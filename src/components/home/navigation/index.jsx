import React, { PureComponent } from 'react';
import style from './index.module.scss';

export default class SubNav extends PureComponent {
	state = {
		lightH: 1,
	};

	navClick = (item) => {
		this.setState({
			lightH: item.id,
		});
		// to path

		// this.router.push(item.path,{id:item.id})
	};

	render() {
		const { subMenuList } = this.props;
		return (
			<div className={ style.subMenu }>
				<ul className={ style.subMenuBox }>
					{
						subMenuList.map(item => {
							return (
								<li key={ item.id } onClick={ () => this.navClick(item) }>
									<a to={ item.path }
										 className={ item.id === this.state.lightH ? `${ style.active }` : '' }
										 key={ item.id }>
										{ item.name }
									</a>
								</li>
							);
						})
					}
				</ul>
			</div>
		);
	}
}
