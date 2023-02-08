import React, { useEffect, useRef, useState } from 'react';
import BackTop from '@/components/floatBtn/backTopIcon';
import ToggleTheme from '@/components/floatBtn/toggleTheme';
import useScreenWidth from '@/utils/hooks/useScreenWidth';
import useScrolling from './hooks/useScrolling';
import { FloatButton } from 'antd';

const { Group } = FloatButton;
const FloatBtn = ({ theme, changeTheme }) => {
	const screenWidth = useScreenWidth();
	const isScrolling = useScrolling();
	const [ opacity, setOpacity ] = useState();
	const [ display, setDisplay ] = useState();
	const [ isChanging, setIsChanging ] = useState();
	const changingRef = useRef(null);

	// 点一次延迟 1500 毫秒隐藏
	useEffect(() => {
		clearTimeout(changingRef.current);
		setIsChanging(true);
		changingRef.current = setTimeout(() => {
			setIsChanging(false);
		}, 1500);
		return () => {
			clearTimeout(changingRef.current);
		};
	}, [ theme ]);

	useEffect(() => {
		setDisplay(true);
		setOpacity(screenWidth >= 960 || isScrolling || isChanging);
	}, [ isChanging, isScrolling, screenWidth ]);

	// 等待过渡动画结束
	useEffect(() => {
		if (!opacity) {
			const timer = setTimeout(() => {
				setDisplay(false);
			}, 500);
			return () => clearTimeout(timer);
		}
	}, [ opacity ]);

	return (
		<div style={ {
			opacity: opacity ? 1 : 0,
			transition: 'opacity .5s',
			display: display ? 'block' : 'none',
		} }>
			<Group>
				<BackTop/>
				<ToggleTheme theme={ theme } changeTheme={ changeTheme }/>
			</Group>
		</div>
	);
};

export default FloatBtn;
