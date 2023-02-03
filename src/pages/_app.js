import { ConfigProvider } from 'antd';
import { useEffect } from 'react';
import { rem } from '@/assets/js/rem';
import '@/assets/styles/init.css';
import '@/assets/styles/markdown/github-markdown.scss';
import '@/assets/styles/theme/light.scss';
import '@/assets/styles/theme/dark.scss';
//import '@/assets/styles/header.scss';
import Header from '@/components/home/header';

const theme = {
	token: {
		// colorPrimary: '#00b96b',
	},
};

export default function App({ Component, pageProps }) {
	const menuList = [
		{ id: 1, name: '首页', path: '/home', tag: '' },
		{ id: 2, name: '沸点', path: '/pins', tag: '' },
		{ id: 3, name: '课程', path: '/news', tag: '' },
		{ id: 4, name: '直播', path: '/books', tag: '' },
		{ id: 5, name: '活动', path: '/events', tag: '' },
		{ id: 6, name: '竞赛', path: '/events', tag: '' },
		{ id: 7, name: '商城', path: '/events', tag: '' },
		{ id: 8, name: 'APP', path: '/events', tag: '邀请有礼' },
		{ id: 9, name: '插件', path: '/events', tag: '' },
	];
	useEffect(() => {
		rem(document, window);
	}, []);
	return (
		<ConfigProvider theme={ theme }>
			<Header menuList={menuList} />
			<Component { ...pageProps }/>
		</ConfigProvider>
	);
}