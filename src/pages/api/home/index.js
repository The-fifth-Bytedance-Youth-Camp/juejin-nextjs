export default function getHomePageData(req, res) {
	res.json({
		// 二级导航：Navigation参数
		navList: [
			{ id: 'mix', name: '综合', tags: [] },
			{ id: 3, name: '后端', tags: [] },
			{ id: 4, name: '前端', tags: [] },
			{ id: 5, name: 'Android', tags: [] },
			{ id: 6, name: 'iOS', tags: [] },
			{ id: 7, name: '人工智能', tags: [] },
			{ id: 8, name: '开发工具', tags: [] },
			{ id: 9, name: '代码人生', tags: [] },
			{ id: 10, name: '阅读', tags: [] },
		],
		// 作者榜信息
		userList: [
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
			{
				name: 'lala',
				avatar: 'https://p3-passport.byteimg.com/img/user-avatar/c2187f61d1fe229e6da86541432ba7d3~100x100.awebp',
				rank: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-6.b69935b.png',
				position: '前端 @ Alibaba',
			},
		],
		// 广告栏信息
		bannerList: [
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
		],
	});
}
