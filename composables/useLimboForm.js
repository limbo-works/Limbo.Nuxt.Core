/**
 * @function useLimboForm
 * @description Transform a standard form object into an extended object with some extra getters.
 * @param  {Object} formObject formObject
 * @param {Object} options options
 * @return {Object} improvedFormObject
 */

export const useLimboForm = (formObject, options = {}) => {
	options = {
		// clone: If true, the formObject will be cloned instead of modified in place
		clone: false,
		// populate: If object, populates from that object
		populate: false,
		// enrichMagicKeys: if object, enriches fields and endpoint url with {properties}
		enrichMagicKeys: false,
		// setDefaultValues: If true, the form will set default values for fields that don't have them already
		setDefaultValues: true,
		// includeList: An array of keys to include in the form object (if not empty, all other keys will be removed)
		includeList: [],
		// excludeList: An array of keys to exclude from the form object
		excludeList: [],
		// fetchOptions: Options for the fetch method
		fetchOptions: {
			// dataAppendage: An object to append to the form data
			dataAppendage: {},
			// includeList: An array of keys to include in the form data (if not empty, all other keys will be removed)
			includeList: [],
			// excludeList: An array of keys to exclude from the form data
			excludeList: [],
			// useNativeFormDataOnPost: If true, the fetch will use FormData for POST requests
			useNativeFormDataOnPost: false,
		},

		...(options || {}),
	};

	// Generate the base structure and add missing properties
	// If we want a clone in place of changing the original object, do it early
	if (options.clone) {
		formObject = JSON.parse(JSON.stringify(formObject || {}));
	} else {
		formObject = { ...(formObject || {}) };
	}

	formObject.title = formObject.title ?? '';
	formObject.method = formObject.method ?? 'GET';
	formObject.endpointUrl = formObject.endpointUrl ?? '';
	formObject.fields = formObject.fields ?? [];
	formObject.labels = formObject.labels ?? {};

	// Set default values for fields
	setFieldDefaults(formObject?.fields, options);

	// Default options for the on-object fetch
	const defaultFetchOptions = {
		dataAppendage: {},
		includeList: [],
		excludeList: [],
		useNativeFormDataOnPost: false,
		...(options.fetchOptions || {}),
	};

	const _endpointUrl = ref(formObject.endpointUrl);

	formObject = {
		...formObject,

		// Get endpoint url
		get endpointUrl() {
			let endpointUrl = _endpointUrl.value;

			// Get magic key data from provided object
			let enrichmentData = {};

			if (options?.populate && typeof options.populate === 'object') {
				enrichmentData = options.enrichMagicKeys;

				if (endpointUrl) {
					Object.keys(enrichmentData).forEach((key) => {
						endpointUrl.replaceAll(`{${key}}`, enrichmentData[key]);
					});
				}
			}

			return endpointUrl;
		},

		set endpointUrl(value) {
			_endpointUrl.value = value;
		},

		// Get a singular field by its name
		get fieldByName() {
			return (
				this.fields?.reduce((acc, field) => {
					acc[field.name] = field;
					return acc;
				}, {}) ?? {}
			);
		},
		// Get an array of fields with the same name
		get fieldsByName() {
			return (
				this.fields?.reduce((acc, field) => {
					acc[field.name] = acc[field.name] ?? [];
					acc[field.name].push(field);
					return acc;
				}, {}) ?? {}
			);
		},
		// Get a singular field by its type
		get fieldByType() {
			return (
				this.fields?.reduce((acc, field) => {
					acc[field.type] = field;
					return acc;
				}, {}) ?? {}
			);
		},
		// Get an array of fields with the same type
		get fieldsByType() {
			return (
				this.fields?.reduce((acc, field) => {
					acc[field.type] = acc[field.type] ?? [];
					acc[field.type].push(field);
					return acc;
				}, {}) ?? {}
			);
		},

		// Add a fetch directly to the form that reads the fields and makes a request
		async fetch(options = defaultFetchOptions) {
			options = { ...defaultFetchOptions, ...(options || {}) };
			const fetchOptions = { ...options };
			delete fetchOptions.dataAppendage;
			delete fetchOptions.includeList;
			delete fetchOptions.excludeList;
			delete fetchOptions.useNativeFormDataOnPost;

			// Collect form data
			const formData = new FormData();
			this.fields
				.filter((field) => {
					return (
						field &&
						!options.excludeList?.includes?.(field.name) &&
						!['button', 'submit'].includes(field.type)
					);
				})
				.forEach((field) => {
					if (field.name) {
						formData.set(field.name, field.value);
					}
				});
			if (options.includeList?.length) {
				for (const [key] of formData.entries()) {
					if (!options.includeList?.includes?.(key)) {
						formData.delete(key);
					}
				}
			}

			// Append form data
			for (const key in options.dataAppendage) {
				if (!options.excludeList?.includes?.(key)) {
					formData.set(key, options.dataAppendage[key]);
				}
			}

			// Make payload
			const body =
				options.useNativeFormDataOnPost &&
				['POST', 'PUT', 'PATCH'].includes(this.method?.toUpperCase?.())
					? formData
					: Object.fromEntries(formData.entries());

			// Make request
			if (
				['GET', 'DELETE'].includes(this.method?.toUpperCase?.()) ||
				!this.method
			) {
				const endpointUrl = new URL(
					this.endpointUrl,
					'https://example.com'
				);
				endpointUrl.search = new URLSearchParams(body).toString();

				const fetchUrl = endpointUrl
					.toString()
					.startsWith('https://example.com')
					? endpointUrl.toString().replace('https://example.com', '')
					: endpointUrl.toString();

				const data = await $fetch(fetchUrl, {
					method: this.method || 'GET',
					...fetchOptions,
				}).then((response) => {
					return response;
				});

				return data;
			} else {
				const data = await $fetch(this.endpointUrl, {
					method: this.method,
					body,
					...fetchOptions,
				}).then((response) => {
					return response;
				});
				return data;
			}
		},
	};

	// Remove keys depending on includes
	if (options.includeList?.length) {
		for (const key in formObject) {
			if (!options.includeList.includes(key)) {
				delete formObject[key];
			}
		}
	}
	// Remove keys depending on excludes
	options.excludeList?.forEach((key) => {
		delete formObject[key];
	});

	// Add reactive fieldValues for two-way binding
	const _fieldValues = reactive({});

	// Initialize fieldValues with current field values
	formObject.fields?.forEach((field) => {
		if (field.name) {
			_fieldValues[field.name] = field.value;
		}
	});

	// Add fieldValues getter and setter
	Object.defineProperty(formObject, 'fieldValues', {
		get() {
			// Update the reactive object with current field values
			this.fields?.forEach((field) => {
				if (field.name) {
					_fieldValues[field.name] = field.value;
				}
			});
			return _fieldValues;
		},
		set(newValues) {
			if (typeof newValues === 'object' && newValues !== null) {
				// Update fields when fieldValues is set
				this.fields?.forEach((field) => {
					if (field.name && field.name in newValues) {
						field.value = newValues[field.name];
						_fieldValues[field.name] = newValues[field.name];
						// Update items if field has them (for checkboxes/radio buttons)
						if (field.items) {
							field.items.forEach((item) => {
								item.checked =
									item.value === newValues[field.name];
							});
						}
					}
				});
			}
		},
		enumerable: true,
		configurable: true,
	});

	// Update fieldValues
	const cleanup = watch(_fieldValues, (newValues) => {
		formObject.fieldValues = newValues;
	});

	onScopeDispose(() => {
		cleanup();
	});

	return formObject;
};
export default useLimboForm;

function setFieldDefaults(fields, options) {
	// Get populate data from provided object
	let populateData = {};

	if (options?.populate && typeof options.populate === 'object') {
		populateData = options.populate;
	}

	// Get magic key data from provided object
	let enrichmentData = {};

	if (options?.populate && typeof options.populate === 'object') {
		enrichmentData = options.enrichMagicKeys;
	}

	fields?.forEach((field, index, fields) => {
		// Make sure each field has a default value
		if (options?.setDefaultValues && !('defaultValue' in field)) {
			field.defaultValue =
				'value' in field
					? field.value
					: (field.items
							?.filter((item) => item.checked) // eslint-disable-line
							?.map?.((item) => item.value) // eslint-disable-line
							?.join?.(',') ?? // eslint-disable-line
						field.items?.find((item) => !item.value)?.value);
		}

		// And a default checked, if a checked is present
		if ('checked' in field && !('defaultChecked' in field)) {
			field.defaultChecked = field.checked;
		}

		// Make sure each field has a value
		if (!('value' in field)) {
			field.value = field.defaultValue;
			if (field.items?.length) {
				const array = field.items.reduce((acc, item) => {
					if (item.checked) {
						acc.push(item.value);
					}
					return acc;
				}, []);
				field.value = array.length
					? array.join(',')
					: field.defaultValue;
			}
		}

		// Set values from populate data (query params or custom object)
		if (options?.populate && Object.keys(populateData).length > 0) {
			for (const key in populateData) {
				if (field?.name === key) {
					if ('checked' in field) {
						if (typeof populateData[key] === 'boolean') {
							field.checked = populateData[key];
						} else if (field.value === populateData[key]) {
							field.checked = true;
						} else {
							field.checked = false;
						}
					} else {
						field.value = populateData[key];
						if (field.items) {
							field.items.forEach((item) => {
								item.checked = item.value === populateData[key];
							});
						}
					}
				}
			}
		}

		// Set magic keys
		if (
			options?.enrichMagicKeys &&
			Object.keys(enrichmentData).length > 0
		) {
			for (const key in enrichmentData) {
				if (field?.value === `{${key}}`) {
					field.value = enrichmentData[key];
					if (field.items) {
						field.items.forEach((item) => {
							item.checked = item.value === field.value[key];
						});
					}
				}
			}
		}

		// Does the field include fields of its own?
		if ('fields' in field) {
			setFieldDefaults(field.fields, options);
		}
	});
}

/**
 * @function useLimboFormLink
 * @description Transform a standard form object into a reactive object with some extra getters.
 * @param  {Object} formObject formObject
 * @param  {Object} injectData injectData
 * @return {String} resolvedUrl
 */
export const useLimboFormLink = (formObject, injectData) => {
	injectData = injectData || {};

	if (formObject?.endpointUrl) {
		if (formObject?.fields?.length) {
			const queryArray = formObject.fields.reduce((acc, field) => {
				if (field.name && field.value) {
					let value = String(field.value);
					for (const key in injectData) {
						value = value.replace(`{${key}}`, injectData[key]);
					}
					acc.push(`${field.name}=${value}`);
				}
				return acc;
			}, []);
			const baseUrl = formObject.endpointUrl;
			const queryString = queryArray.join('&');
			if (!queryString) return baseUrl;
			const separator = baseUrl.includes('?') ? '&' : '?';
			return `${baseUrl}${separator}${queryString}`;
		}
		return formObject?.endpointUrl;
	}
	return '';
};
