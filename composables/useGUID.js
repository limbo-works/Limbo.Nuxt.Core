/* Make a GUID */
function useGUID(key) {
	if (key) {
		const stateKey = '_guid-' + key;
		const guid = useState(stateKey, makeGUID);

		// Clean up state on unmount
		getCurrentScope() && onScopeDispose(() => {
			clearNuxtState(stateKey);
		}, true);

		return guid.value;
	}

	return makeGUID();
}

export default useGUID;

function makeGUID() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
		/[xy]/g,
		function (c) {
			const r = (Math.random() * 16) | 0,
				v = c == 'x' ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		}
	);
}
