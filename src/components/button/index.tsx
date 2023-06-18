import { ComponentPropsWithoutRef } from 'react';
import styles from './button.module.scss';
import clsx from 'clsx';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {}

export default function Button({ children, className, ...props }: ButtonProps) {
	return (
		<button className={clsx(className, styles.button)} {...props}>
			{children}
		</button>
	);
}
