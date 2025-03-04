import { ReactNode } from "react";

export const Code = ({ children }: { children: ReactNode }) => {
	return (
		<code
			className={`
        [p_&]:px-1
        [p_&]:py-0.5
        [p_&]:rounded
        [p_&]:bg-gray-200
        [p_&]:font-mono
        [p_&]:text-sm
      `}>
			{children}
		</code>
	);
};
