// 全局引入
import '@/assets/scss/init.scss';
import '@/assets/scss/globals.scss';
import { ConfigProvider } from 'antd';
import { rem } from '@/assets/js/rem';
import { useEffect } from 'react';

const theme = {
	token: {
		colorPrimary: '#00b96b',
	},
};

export default function App({ Component, pageProps }) {
	useEffect(() => {
		document.documentElement.style.fontSize = 100/1534 + 'vw';
	}, []);
	return (
		<ConfigProvider theme={ theme }>
			<Component { ...pageProps } />
		</ConfigProvider>
	);
}
