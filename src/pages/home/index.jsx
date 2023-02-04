import React, { useEffect, useState } from 'react';
import Chapter from '@/component/chapter';

const Home = () => {
	const [label, setLabel] = useState(1)
	const changeLabel = (label)=>{
		setLabel(label)
	}
	return (
		<div>
			<Chapter changeLabel={changeLabel} />
		</div>
	);
};

export default Home;
