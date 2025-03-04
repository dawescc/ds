import { ReactNode } from "react";
import formatTitle from "title";

export function H1({ children }: { children: ReactNode }) {
	if (typeof children === "string") {
		const match = children.match(/(.*?)\s*\[(.*?)\]\s*$/);

		if (match) {
			const headerText = match[1].trim();
			const rawId = match[2].trim();
			const id = encodeURIComponent(rawId);

			return (
				<>
					<h1
						id={id}
						className='group font-medium text-4xl mt-12 mb-6 relative'>
						{formatTitle(headerText)}
						<a
							href={`#${id}`}
							className='invisible'
							aria-label={`Link to ${headerText}`}></a>
					</h1>
				</>
			);
		}
	}

	// Default case if no ID is provided or children isn't a string
	return <h1 className='group font-medium text-3xl mt-2 mb-4 relative'>{children}</h1>;
}
