import React, { useEffect, useRef } from 'react';
import cn from 'classnames';
import styles from './ImgWrapper.module.scss';
import LazyLoad from 'vanilla-lazyload';
import { ImgWrapperProps } from './ImgWrapper.props';

const ImgWrapper = ({ imgUrl, imgUrlj, alt, className }: ImgWrapperProps): JSX.Element => {

	const image = useRef(null);
	let document: any = {};

	useEffect(() => {
		if (!document.lazyLoadInstance) {
			document.lazyLoadInstance = new LazyLoad({
				elements_selector: '.lazy'
			});
		}

		LazyLoad.resetStatus(image.current!);
		document.lazyLoadInstance.update();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [imgUrl, imgUrlj]);

	return (
		<span className={cn(styles.imgWrapper, className)}>
			<picture>
				<source data-srcset={imgUrl} type="image/webp" />
				<img ref={image} className={cn(styles.img, "lazy")} data-src={imgUrlj} src="/images/lazy.jpg" alt={alt} />
			</picture>
			<noscript>
				<img className={cn(styles.img)} src={imgUrlj} alt={alt} />
			</noscript>
		</span>
	);
}

export default ImgWrapper;