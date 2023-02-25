import { personRequest, postRequest } from '@/utils/request';
import moment from 'moment';

// 传入一个日期对象或日期字符串
function convertToDaysAgo(date) {
	const msPerDay = 24 * 60 * 60 * 1000; // 一天的毫秒数
	const today = new Date(); // 获取今天的日期
	const diffInMs = today - new Date(date); // 计算传入日期与今天日期的毫秒差
	const diffInDays = Math.floor(diffInMs / msPerDay); // 将毫秒差转换为天数
	if (diffInDays === 0) {
		return '今天';
	} else if (diffInDays === 1) {
		return '昨天';
	} else if (diffInDays < 7) {
		return `${ diffInDays } 天前`;
	} else {
		return moment(date).format('YYYY-MM-DD'); // 超过一周，返回日期字符串
	}
}

async function getAuthorDetail(id) {
	return await personRequest.get('/admin/find/public', {
		params: { id, isAdmin: true },
	});
}

export default async function searchPost(req, res) {
	const { category, sort, page } = req.query;
	let { rows: postList, total } = await postRequest.get('/post/sort/find', {
		params: { category, sort, page, rows: 8 },
	});
	postList = postList?.map(item => ({
		...item,
		gmt_created: convertToDaysAgo(item.gmt_created),
	}));
	let retArr = [];
	for (const postListElement of postList) {
		retArr.push({ ...postListElement, author: (await getAuthorDetail(postListElement.author)).name });
	}
	// 文章信息
	res.json({ postList: retArr, more: +page < Math.ceil(total / 8) });
}
