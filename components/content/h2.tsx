import { ReactNode } from "react";
import formatTitle from "title";

export function H2({ children }: { children: ReactNode }) {
	if (typeof children === "string") {
		const match = children.match(/(.*?)\s*\[(.*?)\]\s*$/);

		if (match) {
			const headerText = match[1].trim();
			const rawId = match[2].trim();
			const id = encodeURIComponent(rawId);

			return (
				<>
					<h2
						id={id}
						className='group font-medium text-3xl mt-10 mb-5 relative'>
						{formatTitle(headerText)}
						<a
							href={`#${id}`}
							className='invisible'
							aria-label={`Link to ${headerText}`}></a>
					</h2>
				</>
			);
		}
	}

	// Default case if no ID is provided or children isn't a string
	return <h2 className='group font-medium text-2xl mt-2 mb-4 relative'>{children}</h2>;
}
