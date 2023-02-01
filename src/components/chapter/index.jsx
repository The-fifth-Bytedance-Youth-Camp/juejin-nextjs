import React, { useState } from 'react';
import styles from './index.module.scss';
import { EyeOutlined, LikeOutlined, CommentOutlined } from '@ant-design/icons';

const Index = () => {
	const [ currentTab, setCurrentTab ] = useState(1);
	return (
		<div className={ styles.wrapper }>
			<div className={ styles.nav }>
				<span className={ currentTab === 1 ? styles.fontChecked : styles.font }>推荐</span>
				<span className={ styles.icon }>|</span>
				<span className={ styles.font }>更新</span>
				<span className={ styles.icon }>|</span>
				<span className={ styles.font }>热榜</span>
			</div>
			<div className={ styles.content }>
				<div className={ styles.head }>
					<span className={ styles.font }>作者</span>
					<span className={ styles.icon }>|</span>
					<span className={ styles.font }>时间</span>
				</div>
				<div className={ styles.introduce }>
					<div className={ styles.fonts }>
						<div className={ styles.title }>创意投稿大赛来袭，啊是的哈哈的哈哈哈大厦大厦和</div>
						<div className={ styles.font }>又是一年春暖花开</div>
						<div className={ styles.icon }>
							<span><EyeOutlined/>15</span>
							<span><LikeOutlined/>18</span>
							<span><CommentOutlined/>88</span>
						</div>
					</div>
					<div className={ styles.imgContainer }>
						<img
							src={ 'https://edu-learn-bbb.oss-cn-chengdu.aliyuncs.com/2023/01/05/6863c3ed0d054d8eae7d21a7e08348b6%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE_20221216_204914.png' }/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
