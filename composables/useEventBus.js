export function useEventBus() {
	const app = useNuxtApp();
	const registeredHooks = new Set();

	// Cleanup hooks when component is unmounted
	getCurrentScope() && onScopeDispose(() => {
		registeredHooks.forEach((hookName) => {
			app.hooks.removeHook(hookName);
		});
		registeredHooks.clear();
	}, true);

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
