export function useEventBus() {
	const app = useNuxtApp();

	return {
		on(event, callback) {
			if (typeof callback === 'function') {
				app.hook(`limbo:${event}`, callback);
			}
		},

		emit(event, data) {
			app.hooks.callHook(`limbo:${event}`, data);
		},
	};
}
