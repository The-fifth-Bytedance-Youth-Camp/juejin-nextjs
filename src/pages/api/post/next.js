export default function getNextPost(req, res) {
	// 当前文章 ID
	const { id } = req.query;
	res.json({ next: { id: 123, title: '🎁 2022年12月更文中奖名单公布！' } });
}
