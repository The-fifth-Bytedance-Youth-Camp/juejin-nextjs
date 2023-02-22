import React from 'react';
import styles from './index.module.scss';
import { RightOutlined } from '@ant-design/icons';

const Author = ({ userList }) => {
	return (
		<div className={ styles.author }>
			<div className={ styles.header }>🎖️作者榜</div>
			{
				userList.map((item) => {
					return (
						<div key={ item.id } className={ styles.user_list }>
							<div className={ styles.avatar }>
								<img className={ styles.avatar_img } src={ userList[0].src }
										 alt={ item.name }/>
							</div>
							<div>
								<div className={ styles.user_name }>
									<span>{ item.name }</span>
									{ item?.rank ? <img className={ styles.rank } src={ item.rank } alt="author_rank"/> : null }
								</div>
								<div className={ styles.user_position }>{ item.position }</div>
							</div>
						</div>
					);
				})
			}
			<div className={ styles.more }>
				<span>完整榜单&nbsp;</span>
				<RightOutlined/>
			</div>
		</div>
	);
};
export default Author;
