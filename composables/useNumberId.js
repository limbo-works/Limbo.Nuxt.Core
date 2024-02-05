/* Create a number ID (unlike useId() which generates an id usable by the DOM) */
function useNumberId(key = useId()) {
	const counter = useState(() => 0);
	return useState('_num-id-' + key, () => counter.value++);
}
export default useNumberId;
