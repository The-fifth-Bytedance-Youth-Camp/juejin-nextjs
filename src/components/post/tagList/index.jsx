import style from './index.module.scss';

const TagList = ({ category, tags }) => {
	return (
		<div className={ style.tag }>
			<span>分类:</span>
			<span className={ style.category }>{ category?.name || '' }</span>
			<span>标签:</span>
			{
				tags.map(({ id, name }, index) => <span className={ style.tagName } key={ index }>{ name }</span>)
			}
		</div>
	);
};
export default TagList;
