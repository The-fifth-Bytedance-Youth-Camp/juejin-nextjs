import React from 'react';
import style from './index.module.scss';

const Author = ({ name, avatar, time, readCount }) => {
	return (
		<div className={ style.Author }>
			<img className={ style.avatar } src={ avatar } alt={ name }/>
			<div className={ style.info }>
				<div className={ style.name }>{ name }</div>
				<div className={ style.meta }>
					<span>{ time }</span>
					<span> &nbsp;· &nbsp;阅读 { readCount }</span>
				</div>
			</div>
		</div>
	);
};

export default Author;
