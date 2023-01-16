/**
 * 重新封装了 fetch
 */
class Fxios {
	baseURL = '';
	cache = new Map();
	cacheSize = 10;

	/**
	 * config 选项：
	 * 1. headers
	 * 2. params
	 * 3. data
	 * 4. timeout
	 * 5. responseType
	 */

	/**
	 * 构造函数
	 * @param {string} baseURL - 根域名
	 * @param {number} cacheSize - 缓存大小
	 */
	constructor(baseURL, cacheSize = 10) {
		this.baseURL = baseURL;
		this.cacheSize = cacheSize;
	}

	/**
	 * 发起 get 请求
	 * @param {string} url - 请求地址
	 * @param {Object} config - 配置项
	 * @return {Promise}
	 */
	get(url, config = {}) {
		config.method = 'GET';
		return this.request(url, config);
	}

	/**
	 * 发起 post 请求
	 * @param {string} url - 请求地址
	 * @param {Object} data - 请求数据
	 * @param {Object} config - 配置项
	 * @return {Promise}
	 */
	post(url, data, config = {}) {
		config.method = 'POST';
		config.data = data;
		return this.request(url, config);
	}

	/**
	 * 发起请求
	 * @param {string} url - 请求地址
	 * @param {Object} config - 配置
	 * @return {Promise}
	 */
	request(url, config = {}) {
		config = config || {};
		config.headers = config.headers || {};
		config.headers['Content-Type'] = 'application/json';
		if (this.baseURL) {
			url = `${ this.baseURL }${ url }`;
		}
		const cacheKey = JSON.stringify({ url, ...config });
		if (this.cache.has(cacheKey)) {
			this.cache.delete(cacheKey);
			this.cache.set(cacheKey, this.cache.get(cacheKey));
			return this.cache.get(cacheKey);
		}

		return fetch(url, config).then(response => {
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			return response.json();
		}).then(data => {
			if (this.cache.size >= this.cacheSize) {
				this.cache.delete(this.cache.keys().next().value);
			}
			this.cache.set(cacheKey, data);
			return data;
		});
	}
}

export const fxios = (baseURL) => new Fxios(baseURL);

// const fxios = fxios('www.xxx.com/api');
// fxios.get('/xxx/xxx').then(res => console.log(res));
// fxios.post('/xxx', {xxx: 'xxx'}).then(res => console.log(res));
