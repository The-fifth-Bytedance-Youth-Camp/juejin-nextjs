import React from 'react';
import { Button, Result } from 'antd';

const NotFound = () => {
	return (
		<div style={ {
			width: '100vw',
			height: '100vh',
			paddingTop: '10vh',
		} }>
			<Result
				status="404"
				title="404 NotFound"
				subTitle="你访问的页面不存在，点击下方按钮返回"
				extra={ <Button type="primary">返回上一级</Button> }/>
		</div>
	);
};

export default NotFound;
