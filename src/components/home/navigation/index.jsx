import React, { useState } from 'react';
import style from './index.module.scss';

const Navigation = ({ navList }) => {
	const [ lightH, setLightH ] = useState(1);
	const navClick = (item) => setLightH(item.id);
	
	return (
		<div className={ style.subMenu }>
			<ul className={ style.subMenuBox }>
				{
					navList.map(item => {
						return (
							<li key={ item.id } onClick={ ()=>navClick(item) }>
								<a to={ item.path }
										className={ item.id === lightH ? `${ style.active }` : '' }
										key={ item.id }>
									{ item.name }
								</a>
							</li>
						);
					})
				}
			</ul>
		</div>
	);
};

export default Navigation;