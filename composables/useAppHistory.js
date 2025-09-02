let metaPosition = undefined;
let navigationDirection = 0;

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
		navigationDirection: 0,

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

	if (import.meta.client) {
		dataObject.ready = true;
		metaPosition ??= router.options.history.state.position;
		update();
	}
	watch(() => route.fullPath, update);

	function update() {
		if (metaPosition !== router.options.history.state.position) {
			navigationDirection = Math.sign(
				router.options.history.state.position - metaPosition
			);
			metaPosition = router.options.history.state.position;
		}

		dataObject.backUrl = router.options.history.state.back;
		dataObject.currentUrl = router.options.history.state.current;
		dataObject.forwardUrl = router.options.history.state.forward;
		dataObject.position = router.options.history.state.position;
		dataObject.navigationDirection = navigationDirection;
	}

	return dataObject;
};
