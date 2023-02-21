import React, { useState, useEffect, Fragment } from 'react';
import style from './index.module.scss';

const Navigation = ({ navList, children, onClick }) => {
	const [ lightH, setLightH ] = useState('mix');
	const navClick = id => setLightH(id);
	const handleScroll = () => {
		let scrollTop = document.documentElement.scrollTop;
		const header = document.querySelector('div[class^="navigation"]');
		if (scrollTop <= 500) {
			header.className = `${ style.subMenu }`;
		} else header.className = `${ style.subMenu }  ${ style.hide }`;
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<Fragment>
			<div className={ style.subMenu }>
				<ul className={ style.subMenuBox }>
					{
						navList.map(({ id, name }) => {
							return (
								<li key={ id } onClick={ () => navClick(id) }>
									<a onClick={ () => onClick(id) } key={ id }
										 className={ id === lightH ? `${ style.active }` : '' }>
										{ name }
									</a>
								</li>
							);
						})
					}
				</ul>
			</div>
			<div style={ {
				paddingTop: '45px',
				width: '100vw',
				minHeight: '100vh',
				backgroundColor: 'var(--primary-background-color)',
			} }>
				{ children }
			</div>
		</Fragment>
	);
};

export default Navigation;
