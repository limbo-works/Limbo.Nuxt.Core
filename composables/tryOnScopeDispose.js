export default function tryOnScopeDispose(fn, failSilently = true) {
	if (getCurrentScope()) {
		onScopeDispose(fn, failSilently);
	}
}
