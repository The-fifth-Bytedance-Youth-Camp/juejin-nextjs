export const lruCachePlugin = {
	async beforeRequest(url, options, fxios) {
		return true;
	},
	afterRequest(url, options, response, fxios) {
		// console.log(response);
		// return '# 覆盖';
	},
};
