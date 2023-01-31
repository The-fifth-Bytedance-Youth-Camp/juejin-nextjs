import oneLight from 'react-syntax-highlighter/dist/cjs/styles/prism/one-light.min';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/darcula.min';

const highlighters = {
	light: oneLight,
	dark: dracula,
};

export const getHighlighter = (theme) => highlighters[theme];
