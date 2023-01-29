import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { getHighlighter } from '@/assets/styles/markdown/getHighlighter';

const copyCodeStyle = {
	fontSize: '12px',
	color: 'hsla(0,0%,54.9%,.8)',
	position: 'absolute',
	top: '6px',
	right: '15px',
	userSelect: 'none',
};

const CodeBlock = ({ theme, code = '', language = 'text' }) => {
	const [ currentTheme, setCurrentTheme ] = useState(theme);
	useEffect(() => {
		setCurrentTheme(theme);
	}, [ theme ]);
	const [ messageApi, contextHolder ] = message.useMessage();
	const copySuccess = () => {
		messageApi.open({
			type: 'success',
			content: '代码复制成功',
			style: {
				textAlign: 'right',
				marginRight: '2rem',
			},
		});
	};
	return (
		<div style={ { position: 'relative' } }>
			<SyntaxHighlighter language={ language }
												 style={ getHighlighter(currentTheme) }>{ code }</SyntaxHighlighter>
			{ contextHolder }
			<CopyToClipboard text={ code }>
				<span style={ copyCodeStyle } onClick={ copySuccess }>
					{ language }&nbsp;<span style={ { cursor: 'pointer' } }>复制代码</span>
				</span>
			</CopyToClipboard>
		</div>
	);
};

export default CodeBlock;
