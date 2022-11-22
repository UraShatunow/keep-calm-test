import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { HorizontalSlider } from '../components/HorizontalSlider/HorizontalSlider';
import { Section } from '../components/Section/Section';

export const HomePage = (): JSX.Element => {
	return (
		<>
			<Header />
			<Section
				imgUrlTop='/images/section/section-1-1.jpg'
				imgUrlBot='/images/section/section-1-2.jpg' />
			<HorizontalSlider />
			<Section
				imgUrlTop='/images/section/section-2-1.jpg'
				imgUrlBot='/images/section/section-2-2.jpg' />
			<Footer />
		</>
	)
}