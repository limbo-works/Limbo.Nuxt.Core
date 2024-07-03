/**
 * @function useLimboForm
 * @description Transform a standard form object into an extended object with some extra getters.
 * @param  {Object} formObject formObject
 * @param {Object} options options
 * @return {Object} improvedFormObject
 */
export const useLimboForm = (formObject, options = {}) => {
	options = {
		clone: false,
		populateFromQuery: false,
		setDefaultValues: true,
		fetchOptions: null,
		includeList: [],
		excludeList: [],
		...(options || {}),
	};

	// Generate the base structure and add missing properties
	formObject = { ...(formObject || {}) };
	formObject.title = formObject.title ?? '';
	formObject.method = formObject.method ?? 'GET';
	formObject.endpointUrl = formObject.endpointUrl ?? '';
	formObject.fields = formObject.fields ?? [];
	formObject.labels = formObject.labels ?? {};

	// If we want a clone in place of changing the original object
	if (options.clone) {
		formObject = JSON.parse(JSON.stringify(formObject));
	}

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

	formObject = {
		...formObject,

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
			return this.fields.reduce((acc, field) => {
				acc[field.type] = field;
				return acc;
			}, {});
		},
		// Get an array of fields with the same type
		get fieldsByType() {
			return this.fields.reduce((acc, field) => {
				acc[field.type] = acc[field.type] ?? [];
				acc[field.type].push(field);
				return acc;
			}, {});
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
				this.method?.toUpperCase?.() === 'POST'
					? formData
					: Object.fromEntries(formData.entries());

			// Make request
			if (this.method?.toUpperCase?.() === 'GET' || !this.method) {
				const endpointUrl = new URL(
					this.endpointUrl,
					'https://example.com'
				);
				endpointUrl.search = new URLSearchParams(body).toString();

				const data = await useFetch(
					this.endpointUrl + endpointUrl.search,
					{
						method: this.method || 'GET',
						...fetchOptions,
					}
				).then(({ data, error }) => {
					// Catch errors
					if (error?.value) {
						throw error.value;
					}
					return data.value;
				});
				return data;
			} else {
				const data = await useFetch(this.endpointUrl, {
					method: this.method,
					body,
					...fetchOptions,
				}).then(({ data, error }) => {
					// Catch errors
					if (error?.value) {
						throw error.value;
					}
					return data.value;
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

	return formObject;
};
export default useLimboForm;

function setFieldDefaults(fields, options) {
	fields?.forEach((field) => {
		// Make sure each field has a default value
		if (options?.setDefaultValues && !('defaultValue' in field)) {
			field.defaultValue =
				'value' in field
					? field.value
					: field.items?.find((item) => item.checked)?.value ??
					  field.items?.find((item) => !item.value)?.value;
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

		// Set values from query
		if (options?.populateFromQuery) {
			const { query } = useRoute();
			for (const key in query) {
				if (field.name === key) {
					field.value = query[key];
					if (field.items) {
						field.items.forEach((item) => {
							item.checked = item.value === query[key];
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
			return [formObject.endpointUrl, queryArray.join('&')]
				.filter(Boolean)
				.join('?');
		}
		return formObject?.endpointUrl;
	}
	return '';
};
