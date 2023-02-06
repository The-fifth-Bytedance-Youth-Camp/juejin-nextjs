import React from 'react';
import styles from './index.module.scss';
import { RightOutlined } from '@ant-design/icons';
import { v4 } from 'uuid';

const Author = ({ userList }) => {
	return (
		<div className={ styles.author }>
			<div className={ styles.header }>🎖️作者榜</div>
			{
				userList.map((item) => {
					return (
						<div key={ v4() } className={ styles.user_list }>
							<div className={ styles.avatar }><img className={ styles.avatar_img } src={ userList[0].avatar } alt=""/>
							</div>
							<div>
								<div className={ styles.user_name }>
									<span>{ item.name }</span>
									<img className={ styles.rank } src={ item.rank } alt="author_rank"/>
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
