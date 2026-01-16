export function useEventListener(...args) {
	let [targets, event, callback, options] = [
		typeof args[1] === 'string' ? args.shift() : undefined,
		...args,
	];

	// Make sure we are working with an options object
	options =
		typeof options === 'boolean'
			? { capture: options }
			: typeof options === 'object'
				? { ...options }
				: {};
	const { immediate } = options;
	delete options.immediate;

	let timeoutId = null;
	const cleanup = () => {
		if (timeoutId !== null) {
			clearTimeout(timeoutId);
			timeoutId = null;
		}
		targets?.forEach((target) =>
			target?.removeEventListener?.(event, callback, !!options?.capture)
		);
	};

	onMounted(() => {
		timeoutId = setTimeout(() => {
			targets = resolveTargets(targets);
			targets?.forEach((target) =>
				target?.addEventListener?.(event, callback, options)
			);
			immediate && callback();
			timeoutId = null;
		});
	});

	onBeforeUnmount(cleanup);
}

function resolveTargets(targets) {
	let result = [];

	targets ??= window;
	targets = [targets].flat();

	targets.forEach((target) => {
		typeof target === 'function' && (target = target());

		if (typeof target === 'string') {
			result = result.concat([...document.querySelectorAll(target)]);
			return;
		}

		if (Array.isArray(target)) {
			result = result.concat(resolveTargets(target));
			return;
		}

		if (isRef(target)) {
			result.push(target.value);
			return;
		}

		result.push(target);
	});

	return result.filter(Boolean);
}
