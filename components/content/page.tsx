"use client";

import React, { ReactNode, useEffect, useState } from "react";

type Section = {
	id: string;
	title: string;
	level: number;
};

export function Page({ children }: { children: ReactNode }) {
	const [sections, setSections] = useState<Section[]>([]);

	useEffect(() => {
		const headings = Array.from(document.querySelectorAll("h1[id], h2[id], h3[id]"));
		const extractedSections = headings.map((heading) => ({
			id: heading.id,
			title: heading.textContent || "",
			level: parseInt(heading.tagName.substring(1), 10),
		}));
		setSections(extractedSections);
	}, []);

	return (
		<div className='grid grid-cols-1 md:grid-cols-[80%_20%] relative @sm:px-2 @md:px-4'>
			<div className='md:border-r sm:pr-2 md:pr-4 pt-4 pb-20'>{children}</div>

			<div className='hidden md:block relative pl-6 pt-6'>
				<div className='sticky top-24 overflow-x-hidden overflow-y-auto'>
					<div className='flex flex-col'>
						<span className='-mb-4 font-medium'>On This Page</span>
						<ul className='mt-6 space-y-2'>
							{sections.map((section) => (
								<li
									key={section.id}
									className={`${section.level === 2 ? "ml-3" : section.level === 3 ? "ml-6" : ""}`}>
									<a
										href={`#${section.id}`}
										className='text-gray-900'>
										{section.title}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
