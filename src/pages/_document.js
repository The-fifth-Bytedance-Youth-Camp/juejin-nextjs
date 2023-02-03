import { Html, Head, Main, NextScript } from 'next/document';
import Header from '@/components/home/header';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="UTF-8"/>
			</Head>
			<body>
			<Main/>
			<NextScript/>
			</body>
		</Html>
	);
}
