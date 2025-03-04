import type { ReactNode } from "react";

export function Blockquote({ children }: { children: ReactNode }) {
	return <blockquote className='my-5 text-gray-800 pl-3 border-l-4'>{children}</blockquote>;
}
