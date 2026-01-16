/* Create a number ID (unlike useId() which generates an id usable by the DOM) */
function useNumberId(key) {
	const counter = useState('_global_number_id_counter', () => 0);

	if (key) {
		const stateKey = '_num-id-' + key;
		const numberId = useState(stateKey, nextNumber);

		// Clean up state on unmount
		onScopeDispose(() => {
			clearNuxtState(stateKey);
		});

		return numberId.value;
	}

	return nextNumber();

	function nextNumber() {
		return counter.value++;
	}
}
export default useNumberId;
