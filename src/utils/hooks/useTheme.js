import { useEffect, useState } from 'react';

function useTheme() {
	const [ theme, setTheme ] = useState('');

	useEffect(() => {
		const theme = getTheme();
		// 初始化主题
		if (!theme) {
			changeTheme('light');
			return;
		}
		changeTheme(theme);
	});

	const changeTheme = (_theme = 'light') => {
		const htmlRef = document.querySelector('html');
		if (!htmlRef) return;
		htmlRef.setAttribute('data-theme', _theme);
		window.matchMedia(`(prefers-color-scheme: ${ _theme })`);
		localStorage.setItem('theme', _theme);
		setTheme(_theme);
	};

	const getTheme = () => localStorage.getItem('theme');

	return { theme, getTheme, changeTheme };
}

export default useTheme;
