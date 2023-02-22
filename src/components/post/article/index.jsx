import React, { useEffect, useState } from 'react';
import style from './index.module.scss';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { Image } from 'antd';
import CodeBlock from './codeBlock';
import TagList from '../tagList';

const Article = ({ title, cover, content, category, tags, render = () => {} }) => {
	const components = {
		a: ({ ...props }) => <a { ...props } rel="canonical" target="_blank"/>,
		pre: ({ children }) => {
			const language = children[0].props.className?.replace('language-', '') || 'text';
			const value = children[0].props.children[0];
			return <CodeBlock language={ language } code={ value }/>;
		},
	};
	const [ coverSrc, setCoverSrc ] = useState('');

	useEffect(() => {
		const is4G = navigator.connection?.effectiveType.toLowerCase() === '4g';
		setCoverSrc(`http://localhost:3100/uploads/${ is4G ? 'jpeg' : 'webp' }/${ cover }.${ is4G ? 'jpeg' : 'webp' }`);
	}, [ cover ]);

	return (
		<div className={ style.Article + ' markdown-body' }>
			<h1 className={ style.title }>{ title }</h1>
			{ render() }
			{ cover ?
				<div style={ { marginTop: '20px' } }>
					<Image placeholder preview={ { mask: null } }
								 width="100%" height={ 425 } style={ { objectFit: 'cover' } } src={ coverSrc }
								 alt={ `${ title } - 封面` }/>
				</div>
				: null
			}
			<ReactMarkdown skipHtml={ true } components={ components }
										 rehypePlugins={ [ rehypeKatex ] }
										 remarkPlugins={ [ [ remarkGfm, { singleTilde: false }, remarkMath ] ] }>
				{ content }
			</ReactMarkdown>
			<TagList category={ category } tags={ tags }/>
		</div>
	);
};

export default Article;
