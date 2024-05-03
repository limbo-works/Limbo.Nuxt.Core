export default function useAttrsExcept(excludes, $attrs) {
	/* useAttrs() causes problems, so do pass in $attrs */
	const attrs = $attrs || useAttrs();
	const attrsToReturn = reactive({});

	!$attrs && console.warn('useAttrsExcept() needs a second argument, an attrs object, to function properly. UseAttrs() causes problems.')

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
}
