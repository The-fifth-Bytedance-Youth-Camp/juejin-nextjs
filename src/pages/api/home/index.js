import { personRequest, postRequest } from '@/utils/request';

async function getAuthorDetail(id) {
	return await personRequest.get('/admin/find/public', {
		params: { id, isAdmin: true },
	});
}

export default async function getHomePageData(req, res) {
	const { result: websiteListPost } = await postRequest.get('/post/list/author', {
		params: { limit: 3 },
	});
	const userList = [];
	for (const { author, total_watch_num } of websiteListPost) {
		const authorDetail = await getAuthorDetail(author);
		authorDetail.id = author;
		delete authorDetail?.code;
		if (Math.random() * 100 < 40) {
			authorDetail.rank = 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/lv-6.b69935b.png';
		}
		authorDetail.position = `前端 @ ${ authorDetail.name }`;
		userList.push({ ...authorDetail, total_watch_num });
	}
	res.json({
		// 二级导航：Navigation参数
		navList: [
			{ id: 'mix', name: '综合', tags: [] },
			{ id: 1, name: '后端', tags: [] },
			{ id: 2, name: '前端', tags: [] },
			{ id: 3, name: 'Android', tags: [] },
			{ id: 4, name: 'iOS', tags: [] },
			{ id: 5, name: '人工智能', tags: [] },
			{ id: 6, name: '开发工具', tags: [] },
			{ id: 7, name: '代码人生', tags: [] },
			{ id: 8, name: '阅读', tags: [ '标签信息' ] },
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
		// 作者榜信息
		userList,
	});
}
