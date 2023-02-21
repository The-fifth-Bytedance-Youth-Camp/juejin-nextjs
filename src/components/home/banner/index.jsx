import React, { useState, useEffect } from 'react';
import banner from './index.module.scss';
import { CloseOutlined } from '@ant-design/icons';

const Banner = ({ bannerList }) => {
	const [ banners, setBanners ] = useState(bannerList);
	const handleClose = (index) => {
		banners.splice(index, 1);
		setBanners([ ...banners ]);
	};

	const [ scrollY, setScrollY ] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};

	}, []);


	return (
		<div className={ banner.box } style={ scrollY > 800 ? { position: 'sticky', top: '125px' } : null }>
			{
				banners.map((item, index) => {
					return (
						<div key={ item.id } className={ banner.box_top }>
							<img width="240" height="200" src={ item.banner_img }/>
							<div className={ banner.ctrl_box }>
								<CloseOutlined onClick={ () => { handleClose(index); } } className={ banner.close_btn }
															 style={ { color: '#909090', fontSize: '13px' } }/>
								<div className={ banner.label }>
									<span className={ banner.adve }>广告</span>
								</div>
							</div>
						</div>
					);
				})
			}
			<div className={ banner.bottom }>
				<img width="50" height="50"
						 src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png"/>
				<div className={ banner.content_box }>
					<div className={ banner.headline }>下载稀土掘金APP</div>
					<div className={ banner.desc }>一个帮助开发者成长的社区</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
