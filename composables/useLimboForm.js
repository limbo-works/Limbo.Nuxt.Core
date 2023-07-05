/**
 * @function useLimboForm
 * @description Transform a standard form object into a reactive object with some extra getters.
 * @param  {Object} formObject formObject
 * @return {Object} improvedFormObject
 */
export const useLimboForm = (formObject, options = {}) => {
	options = { clone: false, populateFromQuery: false, ...(options || {}) };
	formObject = {
		method: null,
		endpointUrl: null,
		fields: [],
		labels: {},
		...(formObject || {}),
	};

	// If we want a clone in place of changing the original object
	if (options.clone) {
		formObject = JSON.parse(JSON.stringify(formObject));
	}

	// Set default values for fields
	setFieldDefaults(formObject?.fields, options);

	// Default options for the on-object fetch
	const defaultFetchOptions = {
		dataAppendage: {},
		excludeList: [],
		useNativeFormDataOnPost: false,
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

			// Collect form data
			const formData = new FormData();
			this.fields
				.filter((field) => {
					return (
						field && !options.excludeList?.includes?.(field.name)
					);
				})
				.forEach((field) => {
					if (field.name) {
						formData.append(field.name, field.value);
					}
				});
			for (const key in options.dataAppendage) {
				if (!options.excludeList?.includes?.(key)) {
					formData.append(key, options.dataAppendage[key]);
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

	return formObject;
};
export default useLimboForm;

function setFieldDefaults(fields, options) {
	fields?.forEach((field) => {
		// Make sure each field has a value
		if (!('value' in field)) {
			field.value = field.defaultValue ?? null;
			if (field.items) {
				const array = field.items.reduce((acc, item) => {
					if (item.checked) {
						acc.push(item.value);
					}
					return acc;
				}, []);
				field.value = array.length
					? array.join(',')
					: field.defaultValue ?? null;
			}
		}

		// Make sure each field has a default value
		if (!('defaultValue' in field)) {
			field.defaultValue = field.value;
		}

		// Set values from query
		if (options.populateFromQuery) {
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
	});
}
