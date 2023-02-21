import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/home/navigation';
import Chapter from '@/components/home/chapter';
import Banner from '@/components/home/banner';
import Author from '@/components/home/author';
import style from './index.module.scss';
import useScreenWidth from '@/utils/hooks/useScreenWidth';
import FloatBtn from '@/components/floatBtn';
import useTheme from '@/utils/hooks/useTheme';
import { bffRequest } from '@/utils/request';

const Home = ({ title, description, keywords = [], navList, userList, bannerList }) => {
	const screenWidth = useScreenWidth();
	const { theme, changeTheme } = useTheme();
	const [ cur_category, setCur_category ] = useState('mix');
	return (
		<Fragment>
			<Helmet>
				<title>{ title }</title>
				<meta name="description" content={ description }/>
				<meta name="keywords" content={ keywords.join(',') }/>
			</Helmet>
			<div className={ style.Home }>
				<Navigation navList={ navList } onClick={ setCur_category }>
					<div className={ style.content }>
						<div className={ style.post_list } style={ screenWidth <= 960 ? { width: screenWidth } : {} }>
							<Chapter category={ cur_category }/>
						</div>
						<div className={ style.aside }>
							<Banner bannerList={ bannerList }/>
							<Author userList={ userList }/>
						</div>
						<FloatBtn theme={ theme } changeTheme={ changeTheme }/>
					</div>
				</Navigation>
			</div>
		</Fragment>
	);
};

export async function getServerSideProps() {
	const { title, description, keywords } = await bffRequest.get('/api/home/seo');
	const { navList, userList, bannerList } = await bffRequest.get('/api/home');

	return {
		props: { title, description, keywords, navList, userList, bannerList },
	};
}

export default Home;
