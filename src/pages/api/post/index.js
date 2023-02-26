import { personRequest, postRequest } from '@/utils/request';
import moment from 'moment';

export default async function getPostPageData(req, res) {
	const { id } = req.query;

	await postRequest.get('/post/watch', {
		params: { id },
	});

	const {
		title,
		author,
		content,
		theme,
		code_style: codeStyle,
		category: categoryId,
		cover,
		gmt_created,
		brief,
		watch_num: watchNum,
	} = await postRequest.get('/post/find', {
		params: { id },
	});
	const { result: tags } = await postRequest.get('/post/find/tag', {
		params: { id },
	});
	const { name: category } = await postRequest.get('/category/find', {
		params: { id: categoryId },
	});
	const { name, src } = await personRequest.get('/admin/find/public', {
		params: { id: author, isAdmin: true },
	});
	const time = moment(gmt_created).format('YYYY年MM月DD日 HH:mm:ss');

	let { result: recommendList = [] } = await postRequest.get('/post/search', {
		params: { state: '已发布', category, tags, page: 1, rows: 5 },
	});
	if (recommendList.length < 5) recommendList = [
		...recommendList,
		...(await postRequest.get('/post/search', {
			params: { state: '已发布', category, page: 1, rows: 5 - recommendList.length },
		}))?.result || [],
	];
	if (recommendList.length < 5) recommendList = [
		...recommendList,
		...(await postRequest.get('/post/search', {
			params: { state: '已发布', page: 1, rows: 5 - recommendList.length },
		})).result || [],
	];

	recommendList = recommendList.filter(({ id: rid }) => rid != id);

	res.json({
		title,
		cover,
		brief,
		content,
		category: { id: categoryId, name: category },
		tags,
		author: name,
		avatar: src,
		time,
		watchNum,
		theme,
		codeStyle,
		recommendList: recommendList,
	});
}
