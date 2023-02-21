export default function getPostHeaderData(req, res) {
	res.json({
		headerList: [
			{ id: 1, name: '首页', tag: '' },
			{ id: 2, name: '沸点', tag: '' },
			{ id: 3, name: '课程', tag: '' },
			{ id: 4, name: '直播', tag: '' },
			{ id: 5, name: '活动', tag: '' },
			{ id: 6, name: '竞赛', tag: '' },
			{ id: 7, name: '商城', tag: '' },
			{ id: 8, name: 'APP', tag: '邀请有礼' },
			{ id: 9, name: '插件', tag: '' },
		],
	});
}
