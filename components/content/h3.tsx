import { ReactNode } from "react";
import formatTitle from "title";

export function H3({ children }: { children: ReactNode }) {
	if (typeof children === "string") {
		const match = children.match(/(.*?)\s*\[(.*?)\]\s*$/);

		if (match) {
			const headerText = match[1].trim();
			const rawId = match[2].trim();
			const id = encodeURIComponent(rawId);

			return (
				<>
					<h3
						id={id}
						className='group font-medium text-2xl mt-8 mb-4 relative'>
						{formatTitle(headerText)}
						<a
							href={`#${id}`}
							className='invisible'
							aria-label={`Link to ${headerText}`}></a>
					</h3>
				</>
			);
		}
	}

	// Default case if no ID is provided or children isn't a string
	return <h3 className='group font-medium text-xl mt-2 mb-4 relative'>{children}</h3>;
}
