import { React,useState } from 'react';
import Header from '@/components/home/header';
import Chapter from '@/components/home/chapter';
import Banner from '@/components/home/banner';
import Author from '@/components/home/author';
import style from './index.module.scss';
//import { useWindowDimensions } from 'react-native/index';
import useScreenWidth from '@/utils/hooks/useScreenWidth';

const Home = () => {
	// const windowWidth = useWindowDimensions().width;
	// const windowHeight = useWindowDimensions().height;
	// console.log(windowWidth);
	const screenWidth = useScreenWidth();

	
	return (
		<div className={ style.Home }>
			<Header/>
			<div className={ style.content }>
				<div className={ style.post_list } style={screenWidth<=960?{ width:screenWidth }:{}}>
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
