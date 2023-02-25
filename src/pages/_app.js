import { ConfigProvider } from 'antd';
import { useEffect, useState } from 'react';
import { rem } from '@/assets/js/rem';
import '@/assets/styles/init.css';
import '@/assets/styles/theme/light.scss';
import '@/assets/styles/theme/dark.scss';
import Header from '@/components/header';
import '@/components/post/directory/directory.css';
import { bffRequest } from '@/utils/request';

const theme = {
	token: {
		// colorPrimary: '#00b96b',
	},
};

export default function App({ Component, pageProps }) {
	const [ headerList, setHeaderList ] = useState([]);
	useEffect(() => {
		rem(document, window);
		(async () => {
			const { headerList } = await bffRequest.get('/api/header');
			setHeaderList(headerList);
			await bffRequest.get('/api/website');
		})();
	}, []);
	return (
		<ConfigProvider theme={ theme }>
			<Header menuList={ headerList }>
				<Component { ...pageProps }/>
			</Header>
		</ConfigProvider>
	);
}
