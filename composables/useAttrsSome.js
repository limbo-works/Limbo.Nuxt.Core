export const useAttrsSome = (subset) => {
	const attrs = useAttrs();
	const attrsToReturn = reactive({});

	watch(
		() => attrs,
		() => {
			subset ??= [];

			for (const key in attrs) {
				if (subset.includes(key)) {
					attrsToReturn[key] = attrs[key];
				}
			}
		},
		{ immediate: true }
	);

	return attrsToReturn;
};
