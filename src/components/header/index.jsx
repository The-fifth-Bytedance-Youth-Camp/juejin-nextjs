import React, { useState, useEffect, Fragment } from 'react';
import style from './index.module.scss';
import logo from '../../assets/svg/logo-large.svg';
import logo_s from '../../assets/svg/logo-small.svg';
import Link from 'next/link';

const Header = ({ menuList, children }) => {
	const [ lightH ] = useState(1);
	// const navClick = id => setLightH(id);
	const handleScroll = () => {
		let scrollTop = document.documentElement.scrollTop;
		const header = document.querySelector('div[class^="header"]');
		if (scrollTop <= 230) {
			header.className = `${ style.header }`;
		} else {
			header.className = `${ style.header }  ${ style.hide }`;
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<Fragment>
			<div className={ style.header }>
				<div className={ style.container }>
					{ /*logo*/ }
					<Link href="/">
						<img src={ logo.src } alt="稀土掘金"/>
					</Link>
					{ /*nav*/ }
					<div className={ style.nav }>
						<ul className={ style.mainNavList }>
							{
								menuList.map(
									({ id, name, tag }) =>
										<li key={ id }>
											<a className={ id === lightH ? `${ style.active }` : '' } key={ id }>
												{ name }
											</a>
											<span className={ !tag || tag === '' ? '' : style.tag }>{ tag }</span>
										</li>,
								)
							}
						</ul>
					</div>
					{/* phone */ }
					<div className={ style.phone }>
						{/*logo*/ }
						<a href="/">
							<img src={ logo_s.src } alt="掘金"/>
						</a>
						<div className={ style.phoneMenu }>
							首页
							<span className={ style.arrow }></span>
						</div>
						<ul className={ style.phoneNavList }>
							{
								menuList.map((item) =>
									<li key={ item.id }
										// onClick={ () => navClick(item) }
											className={ item.id === lightH ? `${ style.active }` : '' }>
										{ item.name }
										<span className={ item.tag === '' ? '' : style.tag }>
												{ item.tag }
											</span>
									</li>,
								)
							}
						</ul>
					</div>
				</div>
			</div>
			<div style={ {
				width: '100vw',
				minHeight: '100vh',
				paddingTop: '60px',
				backgroundColor: 'var(--primary-background-color)',
			} }>
				{ children }
			</div>
		</Fragment>
	);
};

export default Header;
