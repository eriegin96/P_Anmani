import {ComponentPropsWithoutRef} from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {}

export default function Button({children, className, ...props}: ButtonProps) {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
}
