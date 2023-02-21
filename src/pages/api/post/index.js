export default function getPostPageData(req, res) {
	const { id } = req.query;
	let content = '## 对象解构\n' +
		'\n' +
		'`const { Group } = FloatButton;`' +
		'\n' +
		'对象的解构赋值在花括号内写需要解构属性的key，可以在冒号后重命名，也可以在等号后给值为undefined的属性赋初始值\n' +
		'\n' +
		'```js\n' +
		'const obj = {\n' +
		'  name: \'guo\',\n' +
		'  age: 18,\n' +
		'  school: undefined,\n' +
		'  address: \'ShangHai\'\n' +
		'}\n' +
		'\n' +
		'const { name, age } = obj\n' +
		'console.log(name, age)  //guo 18\n' +
		'\n' +
		'const { school: schoolName = \'SSPU\' } = obj\n' +
		'console.log(schoolName)   //SSPU\n' +
		'```\n' +
		'\n' +
		'应用：引入的库或网络请求返回的结果提取需要的内容\n' +
		'\n' +
		'\n' +
		'\n' +
		'## 数组解构\n' +
		'\n' +
		'数组按照元素的顺序进行解构，可以留空跳过元素\n' +
		'\n' +
		'```js\n' +
		'const arr = [1, 2, 3, 4, 5]\n' +
		'const [x, y, z] = arr\n' +
		'console.log(x, y, z)  //1 2 3\n' +
		'\n' +
		'const [a, , , b] = arr\n' +
		'console.log(a, b)   //1 4\n' +
		'```';
	content += content;
	content += content;
	const title = '[ HTTP协议 ｜ 青训营笔记 ]';
	const author = '写代码的NCK';
	const tags = [ '代码人生', '团队开发', '全栈' ];
	const time = '2022年09月26日 20:50';
	const readCount = 2340;
	const cover = 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3bac437b40864f099bdc9a8e1645f506~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.image';
	// const cover = null;
	const category = '前端';
	const avatar = 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-64a7a9ec-6536-4aec-a1c6-f76a1aa71ccf/d3839a7d-a7bb-4bdf-824d-b95e6da29c3f.png';
	const theme = 'juejin';
	const codeStyle = 'atom-one-light';
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
	const brief = '';
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
