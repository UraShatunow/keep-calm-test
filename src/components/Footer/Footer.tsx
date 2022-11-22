import React from 'react';
import styles from './Footer.module.scss';

export const Footer = (): JSX.Element => {
	return (
		<div className={styles.footer} >
			<p className={styles.copyright}>© TEST, 1022–2022</p>
		</div>
	)
}