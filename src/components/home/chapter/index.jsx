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
				<span className={ styles.font }>最新</span>
				<span className={ styles.icon }>|</span>
				<span className={ styles.font }>热榜</span>
			</div>
			<div className={ styles.content }>
				<div className={ styles.head }>
					<span className={ styles.fontau }>作者</span>
					<span className={ styles.icon }>|</span>
					<span className={ styles.font }>时间</span>
				</div>
				<div className={ styles.introduce }>
					<div className={ styles.fonts }>
						<div className={ styles.title }>创意投稿大赛来袭，啊是的哈哈的哈哈哈大厦大厦和</div>
						<div className={ styles.font }>又是一年春暖花开。又是一年春暖花开。又是一年春暖花开。又是一年春暖花开。</div>
						<div className={ styles.icon }>
							<span><EyeOutlined style={{ color: 'var(--view-color)' }}/><span className={styles.num}>15w</span></span>
							<span className={styles.hov}><LikeOutlined/><span className={styles.num}>18</span></span>
							<span className={styles.hov}><CommentOutlined/><span className={styles.num}>88</span></span>
						</div>
					</div>
					<div className={ styles.imgContainer }>
						<img
							src={ 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad60d8bedf8847e39a50e807921d6e82~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?' }/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
