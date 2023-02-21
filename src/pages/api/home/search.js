export default function searchPost(req, res) {
	const { category, sort } = req.query;
	// res { id, title, content, watch_num, author, gmt_created }
	res.json({
		// 文章信息
		postList: [
			{
				id: 1,
				title: '标题',
				brief: '123 123 123',
				watch_num: '1w',
				author: 'NCK',
				gmt_created: '2022-12-31',
				cover: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad60d8bedf8847e39a50e807921d6e82~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?',
			},
		],
	});
}
