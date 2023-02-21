import React from 'react';
import MarkdownNavbar from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import style from './index.module.scss';

const Directory = ({ article }) => {
	return (
		<div className={ style.directory }>
			<p>目录</p>
			<MarkdownNavbar className="markdown_nav" source={ article } ordered={ false }/>
		</div>
	);
};

export default Directory;
