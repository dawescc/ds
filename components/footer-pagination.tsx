"use client";

import { siteConfig } from "@/config/siteConfig";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import formatTitle from "title";

type SectionKey = keyof typeof siteConfig.pages;

const isExternalLink = (url: string): boolean => {
	return url.startsWith("http://") || url.startsWith("https://");
};

const getAllPages = (user?: User | null) => {
	const allPages: { name: string; text: string; url: string; private: boolean }[] = [];

	Object.keys(siteConfig.pages).forEach((key) => {
		const sectionKey = key as SectionKey;
		siteConfig.pages[sectionKey].forEach((page) => {
			// Only filter private pages if there's no user
			// Always filter external links
			if ((!page.private || user) && !isExternalLink(page.url)) {
				allPages.push(page);
			}
		});
	});

	return allPages;
};

const usePageNavigation = (user?: User | null) => {
	const pathname = usePathname();
	const allPages = getAllPages(user);

	const currentPageIndex = allPages.findIndex((page) => page.url === pathname);

	const previousPage = currentPageIndex > 0 ? allPages[currentPageIndex - 1] : null;
	const nextPage = currentPageIndex < allPages.length - 1 ? allPages[currentPageIndex + 1] : null;

	return { previousPage, nextPage };
};

export const PreviousPage = ({ user }: { user?: User | null }) => {
	const { previousPage } = usePageNavigation(user);

	if (!previousPage) return null;

	return (
		<Link
			href={previousPage.url}
			className='flex items-center group'>
			<div className='flex flex-col items-start'>
				<span className='text-sm text-gray-900'>Last</span>
				<div className='flex items-center gap-1 group-hover:underline text-lg'>
					<TfiAngleLeft className='text-gray-900' />
					{formatTitle(previousPage.text)}
				</div>
			</div>
		</Link>
	);
};

export const NextPage = ({ user }: { user?: User | null }) => {
	const { nextPage } = usePageNavigation(user);

	if (!nextPage) return null;

	return (
		<Link
			href={nextPage.url}
			className='flex items-center group'>
			<div className='flex flex-col items-end'>
				<span className='text-sm text-gray-900'>Next</span>
				<div className='flex items-center gap-1 group-hover:underline text-lg'>
					{formatTitle(nextPage.text)}
					<TfiAngleRight className='text-gray-900' />
				</div>
			</div>
		</Link>
	);
};

export const PageNavigation = ({ user }: { user?: User | null }) => {
	const { previousPage, nextPage } = usePageNavigation(user);

	if (!previousPage && !nextPage) return null;

	return (
		<div className='flex justify-between items-center w-full py-8 pt-4'>
			{previousPage ? <PreviousPage user={user} /> : <div />}
			{nextPage ? <NextPage user={user} /> : <div />}
		</div>
	);
};
