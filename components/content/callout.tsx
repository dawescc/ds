import { ReactNode } from "react";

interface CalloutProps {
	children: ReactNode;
}

export const Callout = ({ children }: CalloutProps) => (
	<div className='bg-background-100 bg-gradient-to-r from-gray-200 to-gray-200/75 rounded flex items-start p-3 my-6'>
		<span className='block grow'>{children}</span>
	</div>
);
