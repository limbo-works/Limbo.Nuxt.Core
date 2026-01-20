export function useEventBus() {
	const app = tryUseNuxtApp();
	if (!app) {
		return {
			on: () => () => {},
			emit: () => {},
		};
	}

	// Track listeners added in this scope for automatic cleanup
	const scopeListeners = [];

	// Auto-cleanup when scope is disposed (SSR request ends or component unmounts)
	tryOnScopeDispose(() => {
		scopeListeners.forEach((unsubscribe) => unsubscribe());
		scopeListeners.length = 0;
	});

	return {
		/**
		 * Subscribe to an event
		 * @param {string} event - Event name
		 * @param {Function} callback - Event handler
		 * @returns {Function} Unsubscribe function
		 */
		on(event, callback) {
			if (typeof callback !== 'function') {
				return () => {};
			}

			const eventName = `limbo:${event}`;

			// Nuxt hooks don't have a native unsubscribe, so we wrap the callback
			// and track it for removal
			let isActive = true;
			const wrappedCallback = (...args) => {
				if (isActive) {
					callback(...args);
				}
			};

			app.hook(eventName, wrappedCallback);

			const unsubscribe = () => {
				isActive = false;
				// Remove from scope tracking
				const idx = scopeListeners.indexOf(unsubscribe);
				if (idx > -1) scopeListeners.splice(idx, 1);
			};

			// Track for automatic cleanup
			scopeListeners.push(unsubscribe);

			return unsubscribe;
		},

		emit(event, data) {
			app.hooks.callHook(`limbo:${event}`, data);
		},
	};
}

export default useEventBus;
