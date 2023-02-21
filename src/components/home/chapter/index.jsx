import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { EyeOutlined, LikeOutlined, CommentOutlined } from '@ant-design/icons';
import { bffRequest } from '@/utils/request';
import { Skeleton } from 'antd';
import useImage from '@/utils/hooks/useImage';

const Index = ({ category }) => {
	const [ sort, setSort ] = useState('RAND()');
	const [ postList, setPostList ] = useState([]);
	const { parseSrc } = useImage();

	useEffect(() => {
		(async () => {
			const { postList } = await bffRequest.get('/api/home/search', {
				params: { category, sort },
			});
			setPostList(postList);
		})();
	}, [ category, sort ]);

	return (
		<div className={ styles.wrapper }>
			<div className={ styles.nav }>
				<span className={ sort === 'RAND()' ? styles.fontChecked : styles.font }
							onClick={ () => setSort('RAND()') }>推荐</span>
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
					postList.map(({ id, title, brief, watch_num, author, gmt_created, cover }) =>
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
											<img src={ parseSrc(cover) } alt={ `${ title }_封面` }/>
										</div>
										: null
								}
							</div>
						</div>,
					)
			}
		</div>
	);
};

export default Index;
