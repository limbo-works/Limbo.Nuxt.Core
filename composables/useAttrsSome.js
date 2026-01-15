export default function useAttrsSome(subset, $attrs) {
	/* useAttrs() causes problems, so do pass in $attrs */
	const attrs = $attrs || useAttrs();
	const attrsToReturn = reactive({});

	!$attrs &&
		console.warn(
			'useAttrsSome() needs a second argument, an attrs object, to function properly. UseAttrs() causes problems.'
		);

	const cleanup = watch(
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

	onScopeDispose(() => {
		cleanup();
	});

	return attrsToReturn;
}
