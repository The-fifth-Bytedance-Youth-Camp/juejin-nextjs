const path = require('path');

module.exports = {
	sassOptions: {
		includePaths: [ path.join(__dirname, './src') ],
	},
	redirects() {
		return [
			{
				source: '/',
				destination: '/home',
				permanent: true,
			},
		];
	},
};
