import React from 'react';
import style from './index.module.scss';
import { Card } from 'antd';


const Sidebar = ({ contentNav }) => {
	return (
		<div className={ style.Sidebar }>
		<Card 
		title="目录" 
		extra={<a href="#">More</a>} 
		style={{ width: 300 }} 
		hoverable 
		>
      <p><a>{ contentNav[0] }</a></p>
      <p><a>{ contentNav[1] }</a></p>
    </Card>
		</div>
	);
};

export default Sidebar;
