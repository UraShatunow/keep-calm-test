import React from 'react';
import { Htag } from '../Htag/Htag';
import ImgWrapper from '../ImgWrapper/ImgWrapper';
import styles from './Section.module.scss';
import { SectionProps } from './Section.props';


export const Section = ({ imgUrlTop, imgUrlBot }: SectionProps): JSX.Element => {
	return (
		<div className={styles.section} >
			<Htag tag="h2">ut aliquip ex ea commodo consequat</Htag>

			<div className={styles.top}>
				<ImgWrapper
					imgUrlj={imgUrlTop}
					alt="test"
					className={styles.imgTop}
				/>

				<div className={styles.textTop}>
					<Htag tag='h3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Htag>
					<p className={styles.paragprah}>
						Incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris nisi ut aliquip ex ea commodo consequat.
						Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur.
					</p>
					<p className={styles.paragprah}>
						Excepteur sint occaecat cupidatat non proident, sunt
						in culpa qui officia deserunt mollit anim id est laborum
					</p>
				</div>
			</div>

			<div className={styles.bot}>
				<div className={styles.textBot}>
					<Htag tag='h3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Htag>
					<p className={styles.paragprah}>
						Incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris nisi ut aliquip ex ea commodo consequat.
						Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur.
					</p>
					<p className={styles.paragprah}>
						Excepteur sint occaecat cupidatat non proident, sunt
						in culpa qui officia deserunt mollit anim id est laborum
					</p>
				</div>

				<ImgWrapper
					imgUrlj={imgUrlBot}
					alt="test"
					className={styles.imgBot}
				/>
			</div>
		</div>
	)
}
