import React, { Fragment, useEffect } from 'react';
import style from './index.module.scss';
import Article from '@/components/post/article';
import Sidebar from '@/components/post/sidebar';
import { Helmet } from 'react-helmet';
import Author from '@/components/post/author';
import { copyright } from '@/assets/js/copyright';
import useTheme from '@/utils/hooks/useTheme';
import FloatBtn from '@/components/floatBtn';
import { bffRequest } from '@/utils/request';

const Post = ({
								title,
								cover,
								brief,
								content,
								category,
								tags,
								author,
								avatar,
								time,
								watchNum,
								theme: page_theme,
								codeStyle,
								recommendList,
							}) => {
	const { theme, changeTheme } = useTheme();
	useEffect(() => { copyright(author); }, [ author ]);
	return (
		<Fragment>
			<Helmet>
				<title>{ title }</title>
				<meta name="keywords" content={ tags.join(',') }/>
				<meta name="author" content={ author }/>
				<meta name="description" content={ brief }/>
				<link rel="stylesheet"
							href={ `http://localhost:3100/theme/${ theme === 'light' ? page_theme : 'github-dark' }.css` }/>
				<link rel="stylesheet"
							href={ `http://localhost:3100/codeStyle/${ theme === 'light' ? codeStyle : 'atom-one-dark' }.css` }/>
			</Helmet>
			<div className={ style.Post }>
				<div className={ style.main }>
					<Article theme={ theme } title={ title } cover={ cover }
									 content={ content } category={ category } tags={ tags }
									 render={ () => <Author name={ author } avatar={ avatar } time={ time } readCount={ watchNum }/> }/>
					<Sidebar content={ content } avatar={ avatar } name={ author } recommendList={ recommendList }/>
				</div>
				<FloatBtn theme={ theme } changeTheme={ changeTheme }/>
			</div>
		</Fragment>
	);
};

export async function getServerSideProps({ query: { id } }) {
	const {
		title,
		cover,
		content,
		brief,
		category,
		tags,
		author,
		avatar,
		time,
		watchNum,
		theme,
		codeStyle,
		recommendList,
	} = await bffRequest.get('/api/post', {
		params: { id },
	});

	return {
		props: {
			title,
			cover,
			brief,
			content,
			category,
			tags,
			author,
			avatar,
			time,
			watchNum,
			theme,
			codeStyle,
			recommendList,
		},
	};
}

export default Post;
