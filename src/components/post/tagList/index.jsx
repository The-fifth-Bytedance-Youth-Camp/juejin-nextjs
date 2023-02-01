import style from './index.module.scss';

const TagList = ({ category = '阅读', tags = [ '青训营', '字节跳动' ] }) => {
	return (
		<div className={ style.tag }>
			<span>分类:</span>
			<span className={ style.category }>{ category }</span>
			<span>标签:</span>
			{
				tags.map((item, index) => <span className={ style.tagName } key={ index }>{ item }</span>)
			}
		</div>
	);
};
export default TagList;
