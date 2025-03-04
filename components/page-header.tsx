import formatTitle from "title";

interface SectionHeaderProps {
	title: string;
	subtitle: string;
}

const PageHeader = ({ title, subtitle }: SectionHeaderProps) => {
	return (
		<div className='flex group pt-12 pb-10 col-span-full border-b'>
			<div className='grow pt-4 px-3.5 pb-3.5 grid items-center max-w-full'>
				<span>
					<h1 className='text-bold text-5xl sm:text-6xl tracking-[-0.0225rem] mb-[0.15em] inline-flex items-center'>{formatTitle(title)}</h1>
					<h2 className='text-medium text-2xl text-gray-900 sm:text-3xl tracking-[-0.0233rem]'>{formatTitle(subtitle)}</h2>
				</span>
			</div>
		</div>
	);
};

export default PageHeader;
