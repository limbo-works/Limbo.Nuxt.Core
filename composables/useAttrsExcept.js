export const useAttrsExcept = (excludes) => {
	const attrs = useAttrs();
	const attrsToReturn = reactive({});

	watch(
		() => attrs,
		() => {
			excludes ??= [];

			for (const key in attrs) {
				if (!excludes.includes(key)) {
					attrsToReturn[key] = attrs[key];
				}
			}
		},
		{ immediate: true }
	);

	return attrsToReturn;
};
