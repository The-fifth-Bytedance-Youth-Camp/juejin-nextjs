import React from 'react';
import Header from '@/components/home/header';
import Author from '@/components/home/author';
import Chapter from '@/components/home/chapter';
import Banner from '@/components/home/banner';
import style from './index.module.scss';

const Home = () => {
	return (
		<div className={ style.Home }>
			<Header/>
			{/* <Chapter/>
			<Banner></Banner>
			<Author/> */}
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
