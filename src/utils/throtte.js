export function throttle(func, time) {
	let timeoutId;
	let lastExecTime = 0;

	return function () {
		const context = this;
		const args = arguments;
		const currentTime = new Date().getTime();

		if (currentTime - lastExecTime < time) {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(function () {
				lastExecTime = currentTime;
				func.apply(context, args);
			}, time);
		} else {
			lastExecTime = currentTime;
			func.apply(context, args);
		}
	};
}
