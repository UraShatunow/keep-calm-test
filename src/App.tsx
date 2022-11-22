import React, { useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import LazyLoad from 'vanilla-lazyload';

const App = () => {

	useEffect(() => {
		let document: any = {};
		if (!document.lazyLoadInstance) {
			document.lazyLoadInstance = new LazyLoad({
				elements_selector: '.lazy'
			});
		}

		document.lazyLoadInstance.update();
	}, []);

	return (
		<>
			<HomePage />
		</>
	);
}

export default App;