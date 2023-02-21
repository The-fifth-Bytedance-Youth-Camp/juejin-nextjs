export default function seo(req, res) {
	res.json({
		title: '稀土掘金',
		description: '掘金是面向全球中文开发者的技术内容分享与交流平台。' +
			'我们通过技术文章、沸点、课程、直播等产品和服务，打造一个激发开发者创作灵感，激励开发者沉淀分享，陪伴开发者成长的综合类技术社区。',
		keywords: [ '掘金', '稀土', 'Vue.js', '前端', '面试题', 'Kotlin', 'ReactNative', 'Python' ],
	});
}
