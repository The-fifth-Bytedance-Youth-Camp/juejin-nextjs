import React from 'react';
import style from './index.module.scss';
import Directory from '@/components/post/directory';


const Sidebar = ({ content, avatar, name, recommendList = [] }) => {
	return (
		<div className={ style.Sidebar }>
			<div className={ style.author_list }>
				<span className={ style.user_item }>
					<img className={ style.author_img } src={ avatar } alt={ name }/>
					<div className={ style.info_box }>
						<div className={ style.username }>
							<span className={ style.name }>{ name }</span>
						</div>
						<div className={ style.position } title="前端">前端</div>
					</div>
				</span>
			</div>
			<div className={ style.relative }>
				<div className={ style.title }>
					相关文章
				</div>
				<div>
					<div className={ style.entry_list }>
						{
							recommendList?.map(({ id, title, watch_num }) =>
								<a key={ id } className={ style.item } title={ title }>
									<div className={ style.entry_title }>
										{ title }
									</div>
									<div className={ style.entry_metabox }>
										<div className={ style.entry_meta }>{ watch_num } 阅读</div>
									</div>
								</a>,
							)
						}
					</div>
				</div>
			</div>
			<div style={ { position: 'sticky', top: '20px', backgroundColor: 'transparent' } }>
				<Directory article={ content }/>
				{
					recommendList[0]?.id && recommendList[0]?.title ? <div className={ style.next_article }>
						<div className={ style.next_header }>
							<div className={ style.next_title }>下一篇</div>
							<svg className={ style.list_icon } viewBox="0 0 1024 1024" version="1.1"
									 xmlns="http://www.w3.org/2000/svg">
								<path
									d="M896 544H384c-17.6 0-32-14.4-32-32s14.4-32 32-32h512c17.6 0 32 14.4 32 32s-14.4 32-32 32zM896 864H384c-17.6 0-32-14.4-32-32s14.4-32 32-32h512c17.6 0 32 14.4 32 32s-14.4 32-32 32zM896 224H384c-17.6 0-32-14.4-32-32s14.4-32 32-32h512c17.6 0 32 14.4 32 32s-14.4 32-32 32zM224 544H128c-17.6 0-32-14.4-32-32s14.4-32 32-32h96c17.6 0 32 14.4 32 32s-14.4 32-32 32zM224 864H128c-17.6 0-32-14.4-32-32s14.4-32 32-32h96c17.6 0 32 14.4 32 32s-14.4 32-32 32zM224 224H128c-17.6 0-32-14.4-32-32s14.4-32 32-32h96c17.6 0 32 14.4 32 32s-14.4 32-32 32z"></path>
							</svg>
						</div>
						<hr className={ style.title_hr }/>
						<div className={ style.next_content }>
							<a href={ `/post/${ recommendList[0].id }` } target="_blank" rel="noreferrer"
								 className={ style.article } title={ recommendList[0].title }>{ recommendList[0].title }</a>
						</div>
					</div> : null
				}
			</div>
		</div>
	);
};


export default Sidebar;
