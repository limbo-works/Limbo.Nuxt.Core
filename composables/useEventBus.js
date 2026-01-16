export function useEventBus() {
	const app = useNuxtApp();
	const registeredHooks = new Set();

	// Cleanup hooks when component is unmounted
	onBeforeUnmount(() => {
		registeredHooks.forEach((hookName) => {
			app.hooks.removeHook(hookName);
		});
		registeredHooks.clear();
	});

	return {
		on(event, callback) {
			if (typeof callback === 'function') {
				const hookName = `limbo:${event}`;
				app.hook(hookName, callback);
				registeredHooks.add(hookName);
			}
		},

		emit(event, data) {
			app.hooks.callHook(`limbo:${event}`, data);
		},

		off(event, callback) {
			const hookName = `limbo:${event}`;
			app.hooks.removeHook(hookName, callback);
			registeredHooks.delete(hookName);
		},
	};
}
