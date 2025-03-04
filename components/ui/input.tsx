import { cn } from "@/utils/cn";
import * as React from "react";

function Input({ className, ...props }: React.ComponentProps<"input">) {
	return (
		<input
			data-slot='input'
			className={cn(
				"border placeholder:text-gray-900/70 flex text-xl w-full min-w-0 rounded bg-background-200 px-4 py-2 transition-[color,box-shadow] outline-none",
				"disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
				"focus-visible:border-blue-400 focus-visible:ring-blue-400/50 focus-visible:ring-[3px]",
				"aria-invalid:ring-red-600/20 dark:aria-invalid:ring-red-600/40 aria-invalid:border-red-600",

				className
			)}
			{...props}
		/>
	);
}

export { Input };
