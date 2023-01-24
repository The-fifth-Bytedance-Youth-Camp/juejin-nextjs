import copyToClipboard from 'copy-to-clipboard';

/**
 * 复制文章中文字后追加版权信息
 * @param author 作者
 * @param threshold 阈值 - 少于指定字数不追加信息
 */
export function copyright(author, threshold = 30) {
	window.addEventListener('copy', (e) => {
		e.preventDefault();
		let selObj = window.getSelection();
		if (typeof selObj == 'undefined') return false;
		let selectedText = selObj + '';
		if (selectedText.length >= threshold) {
			selectedText = selectedText +
				'\n\n\n' +
				`作者：${ author }\n` +
				`链接：${ location.href }\n` +
				'来源：掘金\n' +
				'著作权归作者所有。商业转载请联系作者获取授权，非商业转载请注明出处。';
		}
		copyToClipboard(selectedText);
		return false;
	});
}
