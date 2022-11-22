import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ImgWrapperProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	imgUrl?: string;
	imgUrlj: string;
	alt: string;
	className?: string;
}
