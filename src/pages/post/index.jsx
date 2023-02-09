import React, { Fragment, useEffect, useState } from 'react';
import style from './index.module.scss';
import Article from '@/components/post/article';
import Sidebar from '@/components/post/sidebar';
import { Helmet } from 'react-helmet';
import Author from '@/components/post/author';
import { copyright } from '@/assets/js/copyright';
import { FloatButton } from 'antd';
import BackTop from '@/components/post/backTopIcon';
import ToggleTheme from '@/components/post/toggleTheme';
import useScreenWidth from '@/utils/hooks/useScreenWidth';
import useScrolling from '@/utils/hooks/useScrolling';
import useTheme from '@/utils/hooks/useTheme';

const { Group } = FloatButton;

const Post = ({ title, cover, content, category, tags, author, avatar, time, readCount }) => {
	const { theme, changeTheme } = useTheme();
	useEffect(() => { copyright(author); }, [ author ]);
	const screenWidth = useScreenWidth();
	const isScrolling = useScrolling();
	return (
		<Fragment>

			<Helmet>
				<title>{ title }</title>
				<meta name="keywords" content={ tags.join(',') }/>
				<meta name="author" content={ author }/>
				<meta name="description" content={ content.substring(0, 100) }/>
			</Helmet>
			<div className={ style.Post }>
				<div className={ style.main }>
					<Article theme={ theme } title={ title } cover={ cover }
									 content={ content } category={ category } tags={ tags }
									 render={ () => <Author name={ author } avatar={ avatar } time={ time } readCount={ readCount }/> }/>
					<Sidebar  content={ content } />
				</div>
				{
					screenWidth >= 960 || isScrolling ?
						<Group>
							<BackTop/>
							<ToggleTheme theme={ theme } changeTheme={ changeTheme }/>
						</Group>
						: null
				}
			</div>
		</Fragment>
	);
};

export async function getServerSideProps({ query: { id } }) {
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
	return {
		props: { title, cover, content, category, tags, author, avatar, time, readCount },
	};
}


export default Post;
