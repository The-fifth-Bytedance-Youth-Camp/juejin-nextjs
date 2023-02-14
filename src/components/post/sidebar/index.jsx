import React, { Component, useState } from 'react';
import style from './index.module.scss';
import listLogo from '/src/assets/svg/list.svg';



const Sidebar = ({ content, avatar, name }) => {
	return (
		<div className={ style.Sidebar } >
			<div className={ style.author_list}>
				<a href="" className={ style.user_item }>
					<img className={ style.author_img } src={ avatar } alt={ name } loading='lazy' />
					<div className={ style.info_box}>
						<div className={ style.username } href="">
						<span className={ style.name } >{ name }</span>
						</div>
						<div className={ style.position } title='前端'>前端</div>
					</div>
				</a>
			</div>
			<div className={ style.relative }> 
				<div className={ style.title }>
					相关文章
				</div>
				<div className={ style.list_body }>
					<div className={ style.entry_list }>
						<a href="" className={ style.item } title='共克时疫 | 面对疫情，掘金开发者们贡献出的那些技术力量'>
							<div className={ style.entry_title }>
							共克时疫 | 面对疫情，掘金开发者们贡献出的那些技术力量
							</div>
							<div className={ style.entry_metabox}>
								<div className={ style.entry_meta }>77点赞</div>
								<div className={ style.entry_meta }> · </div>
								<div className={ style.entry_meta }>10评论</div>
							</div>
						</a>
						<a href="" className={ style.item } title='🌋 2022年终总结征文大赛暨吐槽大会正在进行中！吐出不快，展望未来！'>
							<div className={ style.entry_title }>
							🌋 2022年终总结征文大赛暨吐槽大会正在进行中！吐出不快，展望未来！
							</div>
							<div className={ style.entry_metabox}>
								<div className={ style.entry_meta }>106点赞</div>
								<div className={ style.entry_meta }> · </div>
								<div className={ style.entry_meta }>200评论</div>
							</div>
						</a>
						<a href="" className={ style.item } title='🏆 技术专题第一期 | 聊聊 Deno的一些事儿'>
							<div className={ style.entry_title }>
							🏆 技术专题第一期 | 聊聊 Deno的一些事儿
							</div>
							<div className={ style.entry_metabox}>
								<div className={ style.entry_meta }>512点赞</div>
								<div className={ style.entry_meta }> · </div>
								<div className={ style.entry_meta }>777评论</div>
							</div>
						</a>
					</div> 
				</div>
			</div>
			<div className={ style.next_artical }>
				<div className={ style.next_header}>
					<div className={ style.next_title}>下一篇</div>
					<img className={ style.list_icon } src={ listLogo.src } alt="list_icon" />
				</div>
				<hr className={ style.title_hr } />
				<div className={ style.next_content}>
					<a href="" className={ style.artical } title='🎁 2022年12月更文中奖名单公布！'>🎁 2022年12月更文中奖名单公布！</a>
				</div>
			</div>
		</div>
	);
};


export default Sidebar;
