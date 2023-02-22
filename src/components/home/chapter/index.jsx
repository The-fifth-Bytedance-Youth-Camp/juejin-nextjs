import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { EyeOutlined, LikeOutlined, CommentOutlined } from '@ant-design/icons';
import { bffRequest } from '@/utils/request';
import { Skeleton } from 'antd';
import FastImg from '@/components/fastImg';

const PostPreview = ({ id, title, brief, watch_num, author, gmt_created, cover }) => {
	return (
		<div key={ id } className={ styles.content } onClick={ () => window.open(`/post/${ id }`, '_blank') }>
			<div className={ styles.head }>
				<span className={ styles.fontau }>{ author }</span>
				<span className={ styles.icon }>|</span>
				<span className={ styles.font }>{ gmt_created }</span>
			</div>
			<div className={ styles.introduce }>
				<div className={ styles.fonts }>
					<div className={ styles.title }>{ title }</div>
					<div className={ styles.font }>{ brief }</div>
					<div className={ styles.icon }>
							<span>
								<EyeOutlined style={ { color: 'var(--view-color)' } }/>
								<span className={ styles.num }>{ watch_num }</span>
							</span>
						<span className={ styles.hov }><LikeOutlined/><span className={ styles.num }>xx</span></span>
						<span className={ styles.hov }><CommentOutlined/><span className={ styles.num }>xx</span></span>
					</div>
				</div>
				{
					cover ?
						<div className={ styles.imgContainer }>
							<FastImg style={ { objectFit: 'cover' } } pid={ cover } alt={ `${ title }_封面` }/>
						</div>
						: null
				}
			</div>
		</div>
	);
};

const Index = ({ category }) => {
	const [ sort, setSort ] = useState('comprehensive');
	const [ postList, setPostList ] = useState([]);
	const [ page, setPage ] = useState(1);
	let lastScrollTop = 0;

	const onScroll = async () => {
		const viewportHeight = window.innerHeight;
		const documentHeight = document.documentElement.scrollHeight;
		const scrollTop = document.documentElement.scrollTop;
		// 判断用户滑动的方向
		const isScrollDown = scrollTop > lastScrollTop;
		lastScrollTop = scrollTop;
		// 判断是否滑动到页面底部前 200px
		if (scrollTop + viewportHeight >= documentHeight - 200 && isScrollDown) {
			// TODO
			await getData();
			setPage(page + 1);
		}
	};

	const getData = async () => {
		let { postList: addList, more } = await bffRequest.get('/api/home/search', {
			params: { category, sort, page },
		});
		if (more) setPostList([ ...postList, ...addList ]);
	};

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		setPostList([]);
		setPage(1);
		(async () => {
			await getData();
		})();
	}, [ category, sort ]);

	return (
		<div className={ styles.wrapper }>
			<div className={ styles.nav }>
				<span className={ sort === 'comprehensive' ? styles.fontChecked : styles.font }
							onClick={ () => setSort('comprehensive') }>推荐</span>
				<span className={ styles.icon }>|</span>
				<span className={ sort === 'gmt_created' ? styles.fontChecked : styles.font }
							onClick={ () => setSort('gmt_created') }>最新</span>
				<span className={ styles.icon }>|</span>
				<span className={ sort === 'watch_num' ? styles.fontChecked : styles.font }
							onClick={ () => setSort('watch_num') }>热榜</span>
			</div>
			{
				!postList?.length ?
					<Skeleton style={ { padding: '20px' } } active/> :
					postList.map(item => <PostPreview key={ item.id } { ...item }/>)
			}
		</div>
	);
};

export default Index;
