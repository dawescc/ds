"use client";

import { siteConfig } from "@/config/siteConfig";
import { cn } from "@/utils/cn";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TiLockClosed } from "react-icons/ti";
import formatTitle from "title";
import { SignOut, SignIn } from "@/components/sidebar-account-controls";
import { useLockBody } from "@/hooks/useLockBody";
import { useSidebar } from "@/components/sidebar-context";
import { HiArrowLeftOnRectangle, HiArrowRightOnRectangle } from "react-icons/hi2";

type SectionKey = keyof typeof siteConfig.pages;

export const SidebarToggle = ({ className }: { className?: string }) => {
	const { isOpen, toggleSidebar } = useSidebar();

	return (
		<button
			onClick={toggleSidebar}
			className={cn("flex w-fit items-center justify-center xl:hidden", "relative", className)}
			aria-label={isOpen ? "Close sidebar" : "Open sidebar"}>
			<HiArrowLeftOnRectangle
				className={cn(
					"absolute inset-0 size-full transition-all [transition-timing-function:cubic-bezier(0.42,0,1,1.25)] duration-[329ms]",
					isOpen ? "" : "-translate-x-20 scale-0 blur-[1.5px]"
				)}
			/>

			<HiArrowRightOnRectangle
				className={cn(
					"absolute inset-0 size-full transition-all [transition-timing-function:cubic-bezier(0.42,0,1,1.25)] duration-[329ms]",
					!isOpen ? "" : "-translate-x-20 scale-0 blur-[1.5px]"
				)}
			/>
		</button>
	);
};

export const Sidebar = ({ user }: { user?: User | null }) => {
	const { isOpen, toggleSidebar } = useSidebar();
	const pathname = usePathname();

	const LockBody = () => {
		useLockBody();
		return null;
	};

	const sectionTitles = Object.keys(siteConfig.pages).map((key) => ({
		key: key as SectionKey,
		title: key,
	}));

	const getPageLinkClasses = ({ linkUrl, privateLink }: { linkUrl: string; privateLink?: boolean }): string => {
		if (pathname === linkUrl) {
			return "bg-gray-100";
		}
		if (privateLink) {
			return "text-gray-900";
		}
		return "text-gray-900";
	};

	return (
		<>
			{isOpen && <LockBody />}

			<aside
				className={cn(
					"z-100 fixed bottom-0 top-header order-1 flex-col border-l border-r h-[calc(100vh-var(--spacing-header))] bg-background-200",
					"transition-all duration-[329ms] [transition-timing-function:cubic-bezier(0.42,0,1,1)]",
					"xl:sticky w-sidebar xl:flex overflow-clip",
					isOpen ? "left-0 h-[calc(100dvh-var(--spacing-header))]" : "-left-full"
				)}>
				<div
					className={cn(
						"relative flex h-full min-h-0 grow flex-col transition-all duration-[389ms][transition-timing-function:cubic-bezier(0.42,0,1,1)]",
						!isOpen ? "-translate-x-1/2 md:translate-0 blur-[2px] md:blur-none scale-95 md:scale-100" : null
					)}>
					<div className='relative flex h-full min-h-0 grow flex-col space-y-4 overflow-y-auto px-6 pb-[14px] pt-4'>
						{sectionTitles.map(({ key, title }) => (
							<div key={key}>
								<p className='mb-0.5 flex h-10 items-center gap-2 py-0.5 pl-3.5 font-medium'>{formatTitle(title)}</p>
								<ul className='relative space-y-1.5'>
									{siteConfig.pages[key].map((page, index) => (
										<li
											key={index}
											className='group'>
											{page.private && !user ? (
												<span
													className={cn(
														"flex flex-row items-center justify-between px-3.5 py-2.5 group-hover:bg-gray-100 rounded text-gray-300",
														getPageLinkClasses({ linkUrl: page.url, privateLink: true })
													)}>
													{formatTitle(page.text)}
													<TiLockClosed className='inline size-[1em] -mb-[1px]' />
												</span>
											) : (
												<Link
													className='no-underline outline-none'
													href={page.url}>
													<span
														className={cn(
															"flex flex-row items-center gap-2 px-3.5 py-2.5 group-hover:bg-gray-100 rounded",
															getPageLinkClasses({ linkUrl: page.url, privateLink: false })
														)}>
														{formatTitle(page.text)}
													</span>
												</Link>
											)}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<div className='px-6 pb-[14px] pt-4'>{user ? <SignOut /> : <SignIn />}</div>
				</div>
			</aside>

			<div
				className={cn(
					"fixed inset-0 backdrop-blur-xs transition-all duration-[433ms] z-[99] xl:hidden",
					"pointer-events-none",
					"[transition-timing-function:cubic-bezier(0.87,0,0.13,1)]",
					isOpen ? "bg-background-100/60 pointer-events-auto" : "bg-transparent opacity-0"
				)}
				onClick={toggleSidebar}
				aria-hidden='true'
			/>
		</>
	);
};
