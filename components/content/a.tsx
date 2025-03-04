import Link from "next/link";
import { ReactNode } from "react";

interface AProps {
	children: ReactNode;
	className?: string;
	href: string;
}

export function A({ children, className = "", href, ...props }: AProps) {
	if (href[0] === "#") {
		return (
			<a
				href={href}
				className={`border-b border-gray-alpha-600 transition-all hover:border-gray-1000 ${className}`}
				{...props}>
				{children}
			</a>
		);
	} else {
		return (
			<Link
				href={href}
				className={`border-b border-gray-alpha-600 transition-all hover:border-gray-1000 ${className}`}
				{...props}>
				{children}
			</Link>
		);
	}
}
