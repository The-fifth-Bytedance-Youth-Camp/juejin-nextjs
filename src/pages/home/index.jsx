import { React, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/home/navigation';
import Chapter from '@/components/home/chapter';
import Banner from '@/components/home/banner';
import Author from '@/components/home/author';
import style from './index.module.scss';
import useScreenWidth from '@/utils/hooks/useScreenWidth';
import FloatBtn from '@/components/floatBtn';
import useTheme from '@/utils/hooks/useTheme';

const Home = ({ navList, userList, bannerList }) => {
	const { theme, changeTheme } = useTheme();
	const screenWidth = useScreenWidth();
	return (
		<Fragment>
			<Helmet>
				<title>稀土掘金</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"></meta>
				<meta name="description"
							content="掘金是面向全球中文开发者的技术内容分享与交流平台。
							我们通过技术文章、沸点、课程、直播等产品和服务，打造一个激发开发者创作灵感，激励开发者沉淀分享，陪伴开发者成长的综合类技术社区。"/>
				<meta name="keywords" content="掘金,稀土,Vue.js,前端面试题,Kotlin,ReactNative,Python"/>
			</Helmet>
			<div className={ style.Home }>	
				<div className={ style.header }>
					<Navigation navList={ navList }/>
				</div>
				<div className={ style.content }>
					<div className={ style.post_list } style={ screenWidth <= 960 ? { width: screenWidth } : {} }>
						<Chapter/>
					</div>
					<div className={ style.aside }>
						<Banner bannerList={ bannerList }/>
						<Author userList={ userList }/>
					</div>
					<FloatBtn theme={ theme } changeTheme={ changeTheme }/>
				</div>	
			</div>
		</Fragment>
	);
};

export async function getServerSideProps() {
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

	// 作者榜信息
	const userList = [
		{
			name: '子奕',
			avatar: 'https://p3-passport.byteimg.com/img/user-avatar/c2187f61d1fe229e6da86541432ba7d3~100x100.awebp',
			rank: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-6.b69935b.png',
			position: '前端 @ Alibaba',
		},
		{
			name: 'lala',
			avatar: 'https://p3-passport.byteimg.com/img/user-avatar/c2187f61d1fe229e6da86541432ba7d3~100x100.awebp',
			rank: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-6.b69935b.png',
			position: '前端 @ Alibaba',
		},
	];

	// 广告栏信息
	const bannerList = [
		{
			id: 1,
			banner_img: 'https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7e67047a2e2b4187886a0eee2c1e93aa~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp',
			mouse: true,
		},
		{
			id: 2,
			banner_img: 'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d45456b58f08408f9bf0bdd51dcf3bcb~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?',
			mouse: true,
		},
	];

	return {
		props: { navList, userList, bannerList },
	};
}

export default Home;
