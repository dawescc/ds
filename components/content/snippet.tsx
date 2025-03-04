import { ReactNode } from "react";
import { Caption } from "./caption";

interface SnippetProps {
	children: ReactNode;
	scroll?: boolean;
	caption?: string | null;
}

export const Snippet = ({ children, scroll = true, caption = null }: SnippetProps) => (
	<div className='my-6'>
		<pre
			className={`
      p-4
      text-sm
      bg-background-100 border text-gray-1000 rounded

      ${scroll ? "overflow-auto" : "whitespace-pre-wrap break-all overflow-hidden"}
    `}>
			<code>{children}</code>
		</pre>

		{caption != null ? <Caption>{caption}</Caption> : null}
	</div>
);
