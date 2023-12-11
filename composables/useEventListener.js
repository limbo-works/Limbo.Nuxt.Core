import { onMounted, onBeforeUnmount, isRef } from 'vue';

export function useEventListener(...args) {
	let [targets, event, callback, immediate] = [
		typeof args[1] === 'string' ? args.shift() : undefined,
		...args,
	];

	onMounted(() => {
		setTimeout(() => {
			targets = resolveTargets(targets);
			targets?.forEach((target) =>
				target.addEventListener(event, callback)
			);
			immediate && callback();
		});
	});

	onBeforeUnmount(() => {
		targets?.forEach((target) =>
			target.removeEventListener(event, callback)
		);
	});
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

	return result;
}
