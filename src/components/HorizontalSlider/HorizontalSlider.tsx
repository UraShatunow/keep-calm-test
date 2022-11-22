import React from 'react';
import styles from './HorizontalSlider.module.scss';
import slidesService from '../../services/slidesService.json';
import ImgWrapper from '../ImgWrapper/ImgWrapper';

export const HorizontalSlider = () => {

	window.onbeforeunload = function () {
		window.scrollTo(0, 0);
	}

	window.onload = function () {
		const wh = window.innerHeight;
		// const ww = window.innerWidth;
		const slider = document.getElementById('slider');
		const pan = document.getElementById('pan');
		const item_wrap = document.getElementById('item_wrap')!.scrollWidth + wh / 1.5;
		pan!.style.height = item_wrap + 'px';

		window.addEventListener('scroll', function (event: any) {
			if (event.path[1].scrollY >= slider!.offsetTop) {
				if (event.path[1].scrollY < pan!.offsetTop + pan!.clientHeight) {
					slider!.style.position = 'fixed'; //set position fixed
					let aa = event.path[1].scrollY - pan!.offsetTop;
					document.getElementById('item_wrap')!.style.transform = 'translate3d(-' + aa + 'px, 0px, 0px)';
				}
			}
			if (event.path[1].scrollY <= pan!.offsetTop) {
				slider!.style.position = 'relative'; //set position relative
			}
		});
	}

	return (
		<div className={styles.wrapper}>

			<div className={styles.slider} id="slider">

				{/* <h2 className={styles.title}>Lorem ipsum dolor sit amet</h2> */}

				<div className={styles.itemWrap} id="item_wrap">
					{slidesService.map(i => {
						return (
							<div key={i.id} className={styles.item}>
								<ImgWrapper
									imgUrl={i.imgUrl}
									imgUrlj={i.imgUrlj}
									alt='слайд'
									className={styles.img} />
							</div>
						)
					})}
				</div>
			</div>
			<div id="pan" />

		</div>
	)
}
