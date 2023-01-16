const path = require('path');

module.exports = {
	sassOptions: {
		includePaths: [ path.join(__dirname, './src') ],
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/home',
				permanent: true,
			},
		];
	},
};
