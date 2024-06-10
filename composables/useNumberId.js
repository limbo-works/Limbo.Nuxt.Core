/* Create a number ID (unlike useId() which generates an id usable by the DOM) */
function useNumberId(key) {
	const counter = useState(() => 0);
	return key ? useState('_num-id-' + key, nextNumber).value : nextNumber();

	function nextNumber() {
		return counter.value++;
	}
}
export default useNumberId;
