import { siteConfig } from "@/config/siteConfig";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import DawesDesign from "@/components/dsd";
import DawesCC from "@/components/dawescc";
import { SidebarToggle } from "@/components/sidebar";

export const Header = () => {
	return (
		<header className='z-100 h-header fixed top-0 mx-auto w-full max-w-max-content md:sticky bg-background-100'>
			<div className='flex w-full h-full max-h-full max-w-[calc(var(--spacing-max-w-content)-1px)] border-b xl:border-x overflow-hidden'>
				<div className='xl:hidden grid grid-cols-1 place-items-center p-4'>
					<SidebarToggle className='size-8' />
				</div>
				<div className='flex grow place-content-center gap-4 border-r py-4 pl-px xl:w-[calc(var(--spacing-sidebar)-1px)] xl:grow-0'>
					<Link
						className='flex items-center gap-4 no-underline'
						href={"/"}>
						<DawesDesign className='size-8 text-primary' />
						<span className='font-bold tracking-tight text-3xl'>ds.d</span>
					</Link>
				</div>
				<div className='flex items-center justify-between w-fit gap-6 p-4 xl:grow'>
					<Link href={siteConfig.links.find((link) => link.name === "website")?.url || "/"}>
						<DawesCC className='size-6' />
					</Link>
					<Link href={siteConfig.links.find((link) => link.name === "github")?.url || "/"}>
						<BsGithub className='inline size-[1.5em]' />
					</Link>
				</div>
			</div>
		</header>
	);
};
