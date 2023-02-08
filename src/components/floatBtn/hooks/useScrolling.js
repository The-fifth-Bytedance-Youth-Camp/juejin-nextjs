import { useState, useEffect, useRef } from 'react';

function useIsScrolling() {
	const [ isScrolling, setIsScrolling ] = useState(false);
	const timeoutIdRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			clearTimeout(timeoutIdRef.current);
			setIsScrolling(true);
			timeoutIdRef.current = setTimeout(() => {
				setIsScrolling(false);
			}, 1500);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			clearTimeout(timeoutIdRef.current);
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return isScrolling;
}

export default useIsScrolling;
