import React from 'react';
import { FloatButton } from 'antd';

const { BackTop } = FloatButton;

const BackTopIcon = () => {
	return (
		<BackTop icon={
			<div title="回到顶部">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path data-v-0b2d23d8="" fillRule="evenodd" clipRule="evenodd"
								d="M2.75 1C2.33579 1 2 1.33579 2 1.75C2 2.16421 2.33579 2.5 2.75 2.5H13.25C13.6642 2.5 14 2.16421 14 1.75C14 1.33579 13.6642 1 13.25 1H2.75ZM7.24407 3.87287C7.64284 3.41241 8.35716 3.41241 8.75593 3.87287L13.0622 8.84535C13.6231 9.49299 13.163 10.5 12.3063 10.5H10V14C10 14.5523 9.55228 15 9 15H7C6.44772 15 6 14.5523 6 14V10.5H3.69371C2.83696 10.5 2.37691 9.49299 2.93778 8.84535L7.24407 3.87287Z"
								fill="#8A919F"></path>
				</svg>
			</div>
		}/>
	);
};

export default BackTopIcon;
