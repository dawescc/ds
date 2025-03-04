import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/utils/cn";
import { forwardRef, HTMLAttributes, useMemo } from "react";

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
	asChild?: boolean;
}

const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(({ className, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : "span";

	const [bgColorClass, filteredClassName] = useMemo(() => {
		const bgClass = className?.match(/(?:dark:bg-|bg-)[a-zA-Z0-9-]+/g) || [];
		const filteredClasses = className?.replace(/(?:dark:bg-|bg-)[a-zA-Z0-9-]+/g, "").trim();
		return [bgClass, filteredClasses];
	}, [className]);

	return (
		<Comp
			className={cn("relative block opacity-[0.65] size-[1em]", filteredClassName)}
			ref={ref}
			{...props}>
			{Array.from({ length: 12 }).map((_, i) => (
				<span
					key={i}
					className='absolute top-0 left-1/2 w-[8%] h-full animate-spinner-leaf-fade'
					style={{
						transform: `rotate(${i * 30}deg)`,
						animationDelay: `${-(11 - i) * 100}ms`,
					}}>
					<span className={cn("block w-full h-[30%] rounded-full bg-current", bgColorClass)}></span>
				</span>
			))}
		</Comp>
	);
});

Spinner.displayName = "Spinner";

export { Spinner };
