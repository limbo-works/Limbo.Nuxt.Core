export default function useAppHost() {
	const config = useRuntimeConfig();
	if (config.public.appHost) {
		return config.public.appHost;
	}
	return useRequestURL()?.host ?? '';
}
