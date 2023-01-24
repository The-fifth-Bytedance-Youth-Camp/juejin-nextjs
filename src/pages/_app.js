import { ConfigProvider } from 'antd';
import { useEffect } from 'react';
import { rem } from '@/assets/js/rem';
import '@/assets/styles/init.css';
import '@/assets/styles/markdown/github-markdown.scss';
import '@/assets/styles/theme/light.scss';
import '@/assets/styles/theme/dark.scss';

const theme = {
	token: {
		// colorPrimary: '#00b96b',
	},
};

export default function App({ Component, pageProps }) {
	useEffect(() => {
		rem(document, window);
	}, []);
	return (
		<ConfigProvider theme={ theme }>
			<Component { ...pageProps } />
		</ConfigProvider>
	);
}
