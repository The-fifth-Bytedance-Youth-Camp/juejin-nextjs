import { React,useState } from 'react';
import Header from '@/components/home/header';
import Navigation from '@/components/home/navigation';
import Chapter from '@/components/home/chapter';
import Banner from '@/components/home/banner';
import Author from '@/components/home/author';
import style from './index.module.scss';
import useScreenWidth from '@/utils/hooks/useScreenWidth';

const Home = ({ menuList, navList }) => {
	const screenWidth = useScreenWidth();
	return (
		<div className={ style.Home }>
			<div className={ style.header }>
				{/* <Header menuList={ menuList }/> */}
				<Navigation navList={ navList }/>
			</div>
			<div className={ style.content }>
				<div className={ style.post_list } style={screenWidth<=960?{ width:screenWidth }:{}}>
					<Chapter/>
				</div>
				<div className={ style.aside }>
					<Banner/>
					<Author/>
				</div>
			</div>
				
		</div>
	);
};

export async function getServerSideProps() {
	// 顶部导航：Header参数
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
	// 二级导航：Navigation参数
	const navList = [
		{ id: 1, name: '综合', path: '/home/', tags: [] },
		{ id: 2, name: '关注', path: '/home/', tags: [] },
		{ id: 3, name: '后端', path: '/home/', tags: [] },
		{ id: 4, name: '前端', path: '/home/', tags: [] },
		{ id: 5, name: 'Android', path: '/home/', tags: [] },
		{ id: 6, name: 'iOS', path: '/home/', tags: [] },
		{ id: 7, name: '人工智能', path: '/home/', tags: [] },
		{ id: 8, name: '开发工具', path: '/home/', tags: [] },
		{ id: 9, name: '代码人生', path: '/home/', tags: [] },
		{ id: 10, name: '阅读', path: '/home/', tags: [] },
	];
	return {
		props: { menuList, navList },
	};
}

export default Home;
