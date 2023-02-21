import { postRequest } from '@/utils/request';
import moment from 'moment';

export default async function getPostPageData(req, res) {
	const { id } = req.query;
	const data = await postRequest.get('/post/find', {
		params: { id },
	});
	const { title, author, content, theme, code_style: codeStyle, category, cover, gmt_created, brief } = data;
	const time = moment(gmt_created).format('YYYY年MM月dd日 HH:mm:ss');
	const tags = [ '代码人生', '团队开发', '全栈' ];
	const readCount = 2340;
	const avatar = 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-64a7a9ec-6536-4aec-a1c6-f76a1aa71ccf/d3839a7d-a7bb-4bdf-824d-b95e6da29c3f.png';
	const recommendList = [
		{
			id: 1,
			title: '🌋 2022年终总结征文大赛暨吐槽大会正在进行中！吐出不快，展望未来！',
		},
		{
			id: 2,
			title: '🏆 技术专题第一期 | 聊聊 Demo的一些事儿',
		},
		{
			id: 3,
			title: '🌋 2022年终总结征文大赛暨吐槽大会正在进行中！吐出不快，展望未来！',
		},
		{
			id: 4,
			title: '🏆 技术专题第一期 | 聊聊 Demo的一些事儿',
		},
		{
			id: 5,
			title: '🌋 2022年终总结征文大赛暨吐槽大会正在进行中！吐出不快，展望未来！',
		},
	];
	res.json({
		title,
		cover,
		brief,
		content,
		category,
		tags,
		author,
		avatar,
		time,
		readCount,
		theme,
		codeStyle,
		recommendList,
	});
}
