import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import hljs from 'highlight.js';

const copyCodeStyle = {
	fontSize: '12px',
	color: 'hsla(0,0%,54.9%,.8)',
	position: 'absolute',
	top: '6px',
	right: '15px',
	userSelect: 'none',
};

const CodeBlock = ({ code = '', language = 'text' }) => {
	const [ messageApi, contextHolder ] = message.useMessage();
	const [ mounted, setMounted ] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const copySuccess = async () => {
		await messageApi.open({
			type: 'success',
			content: '代码复制成功',
			style: {
				textAlign: 'right',
				marginRight: '2rem',
			},
		});
	};
	const codeHighlight = (code) => {
		let codeHtml = code.replaceAll('\t', '  ');
		try {
			if (mounted && hljs.getLanguage(language)) {
				codeHtml = hljs.highlight(codeHtml, { language }).value;
			}
		} catch (_) { }
		return (
			<pre>
				<code dangerouslySetInnerHTML={ { __html: codeHtml } }/>
			</pre>
		);
	};
	return (
		<div style={ { position: 'relative' } }>
			{ codeHighlight(code) }
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
