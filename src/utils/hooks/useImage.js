import { useEffect, useState } from 'react';

function useImage() {
	const [ is4G, setIs4G ] = useState(false);

	function parseSrc(pid) {
		if (!pid) return;
		return `http://localhost:3100/uploads/${ is4G ? 'jpeg' : 'webp' }/${ pid }.${ is4G ? 'jpeg' : 'webp' }`;
	}

	useEffect(() => {
		setIs4G(navigator.connection?.effectiveType.toLowerCase() === '4g');
	}, []);

	return { parseSrc };
}

export default useImage;
