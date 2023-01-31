import React from 'react';
import Header from '@/components/home/header';
import Chapter from '@/components/home/chapter';
import Banner from '@/components/home/banner';
import Author from '@/components/home/author';
import style from './index.module.scss';

const Home = () => {
	return (
		<div className={ style.Home }>
			<Header/>
			<div className={ style.content }>
				<div className={ style.post_list }>
					<Chapter/>
				</div>
				<div className={ style.aside }>
					<Banner/>
					<Author/>
				</div>
			</div>
		</div>
	);
};

export default Home;
