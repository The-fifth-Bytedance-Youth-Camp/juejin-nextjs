// 全局引入
import '@/assets/scss/init.scss';
import '@/assets/scss/globals.scss';
import { ConfigProvider } from 'antd';

const theme = {
	token: {
		colorPrimary: '#00b96b',
	},
};

export default function App({ Component, pageProps }) {
	return (
		<ConfigProvider theme={ theme }>
			<Component { ...pageProps } />
		</ConfigProvider>
	);
}
