export default async function delayUntil(conditionFunction, options) {
	options = Object.assign(
		{
			pollInterval: 100,
			timeout: 1000,
			maxPolls: 10,
			startDelay: 0,
		},
		options
	);

	return await new Promise((resolve, reject) => {
		const startTime = Date.now();
		let pollCount = 0;
		const poll = async () => {
			if (conditionFunction()) {
				resolve();
			} else if (Date.now() - startTime > options.timeout) {
				reject(new Error('Timeout'));
			} else if (options.maxPolls && pollCount >= options.maxPolls) {
				reject(new Error('Max polls reached'));
			} else {
				setTimeout(poll, options.pollInterval);
				pollCount++;
			}
		};
		options.startDelay ? setTimeout(poll, options.pollInterval) : poll();
	});
}
