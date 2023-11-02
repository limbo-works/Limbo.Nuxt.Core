export const useAppHistory = () => {
	const route = useRoute();
	const router = useRouter();

	const dataObject = reactive({
		ready: false,

		// From router history state
		backUrl: null,
		currentUrl: route.fullPath,
		forwardUrl: null,
		position: null,

		// And additionals
		get hasHistory() {
			return !!this.backUrl;
		},
		get hasForward() {
			return !!this.forwardUrl;
		},
		goBack() {
			this.hasHistory && router.go(-1);
		},
		goForward() {
			this.hasForward && router.go(1);
		},
	});

	onMounted(() => {
		dataObject.ready = true;

		dataObject.backUrl = router.options.history.state.back;
		dataObject.currentUrl = router.options.history.state.current;
		dataObject.forwardUrl = router.options.history.state.forward;
		dataObject.position = router.options.history.state.position;
	});
	watch(
		() => route.fullPath,
		() => {
			dataObject.backUrl = router.options.history.state.back;
			dataObject.currentUrl = router.options.history.state.current;
			dataObject.forwardUrl = router.options.history.state.forward;
			dataObject.position = router.options.history.state.position;
		}
	);

	return dataObject;
};
