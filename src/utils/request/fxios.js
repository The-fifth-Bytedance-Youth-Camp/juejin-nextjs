export class Fxios {
	constructor(options = {}) {
		this.plugins = [];
		if (options.basicURL) {
			if (!options.basicURL.endsWith('/')) {
				options.basicURL = options.basicURL + '/';
			}
			this.basicURL = options.basicURL;
			delete options.basicURL;
		}
		this.defaults = { headers: { 'Content-Type': 'application/json' }, ...options };
	}

	/**
	 * 使用插件
	 * 可以链式调用
	 * @param plugin
	 * @returns {Fxios}
	 */
	use(plugin) {
		this.plugins.push(plugin);
		return this;
	}

	/**
	 * 发起一个请求
	 *
	 * @param {string} url - 请求地址
	 * @param {Object} [options={}] - 请求配置
	 * @returns {Promise<*>} - 响应数据
	 * @memberof Fxios
	 */
	async request(url, options = {}) {
		if (this.basicURL) url = this.basicURL + url;
		options = { ...this.defaults, ...options };
		const contentType = options.headers['Content-Type'];
		for (const { beforeRequest } of this.plugins) {
			if (beforeRequest) {
				// 插件返回值为 false 不发送请求
				let parsedRequestFlag = beforeRequest(url, options, this);
				if (parsedRequestFlag instanceof Promise) {
					parsedRequestFlag = await parsedRequestFlag;
				}
				if (parsedRequestFlag === false) return;
			}
		}
		let response = await fetch(url, options);
		if (contentType.includes('application/json')) {
			response = await response.json();
		} else if (contentType.includes('application/octet-stream')) {
			response = await response.blob();
		} else {
			response = await response.text();
		}
		for (const { afterRequest } of this.plugins) {
			if (afterRequest) {
				// 可以在插件中对返回值进行处理
				let parsedResponse = afterRequest(url, options, response, this);
				if (parsedResponse instanceof Promise) {
					parsedResponse = await parsedResponse;
				}
				if (parsedResponse) response = parsedResponse;
			}
		}
		return response;
	};

	/**
	 * 发起一个 GET 请求
	 *
	 * @param {string} url - 请求地址
	 * @param {Object} [options={}] - 请求配置
	 * @returns {Promise<*>} - 响应数据
	 * @memberof Fxios
	 */
	get(url, options = {}) {
		options.method = 'GET';
		return this.request(url, options);
	}

	/**
	 * 发起一个 POST 请求
	 *
	 * @param {string} url - 请求地址
	 * @param {Object} data - 请求数据
	 * @param {Object} [options={}] - 请求配置
	 * @returns {Promise<*>} - 响应数据
	 * @memberof Fxios
	 */
	post(url, data, options = {}) {
		options.method = 'POST';
		options.body = JSON.stringify(data);
		return this.request(url, options);
	}
}

// 插件的使用方法
// const fxios = new Fxios();
// fxios.use(cachePlugin);
