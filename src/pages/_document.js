import { Html, Head, Main, NextScript } from 'next/document';
import { rem } from '@/assets/js/rem';
import { useEffect } from 'react';

export default function Document() {
	useEffect(rem, []);
	return (
		<Html lang="en">
			<Head/>
			<body>
			<Main/>
			<NextScript/>
			</body>
		</Html>
	);
}
