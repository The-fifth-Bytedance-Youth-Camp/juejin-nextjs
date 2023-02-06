import React, { Component, useState } from "react";
import 'markdown-navbar/dist/navbar.css';
import style from './index.module.scss';
import { Card } from 'antd';
import ReactDOM from 'react-dom';
// One third-part component for render markdown documentation
import ReactMarkdown from 'react-markdown';
import MarkdownNavbar from 'markdown-navbar';
// The default style of markdown-navbar should be imported additionally
import MarkNav from "markdown-navbar";



const Sidebar = ({ content }) => {
	return (
		<div className={ style.Sidebar } >
		<Card title="相关文章" style={{ width: 300 }} >
			<p className={ style.related }>共克时疫 | 面对疫情，掘金开发者们贡献出的那些技术力量</p>
			<div className={ style.extra }>
			<div className={ style.like }>77点赞  · </div>
			<div className={ style.comment }>10评论</div>
			</div>
			<p className={ style.related }>新年伊始，2月更文带你在技术写作之路「兔飞猛进」｜ 掘金日新计划 </p>
			<div className={ style.extra }>
			<div className={ style.like }>101点赞  · </div>
			<div className={ style.comment }>85评论</div>
			</div>
		</Card>
		<Card className={ style.next } title="下一篇" style={{ width: 300 }}>
			<p>🏆 技术专题第一期 | 聊聊 Deno的一些事儿</p>
		</Card>
		<Card  className={ style.menuNav } title="目录" style={{ width: 300 }}>
			<MarkNav source={ content } />
		</Card>
		</div>
		
	);
};


export default Sidebar;
