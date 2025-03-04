import PageHeader from "@/components/page-header";
import { CustomMDX } from "@/components/remote-mdx";
import { createClient } from "@/utils/supabase/server";

const title = "design system";
const subtitle = "bulding a better way to design apps & services";

export default async function Home() {
	const supabase = await createClient();

	const { data: mdx, error } = await supabase.from("mdx").select("*").eq("title", "placehold").single();

	if (error) {
		throw error;
	}
	if (mdx) {
		const markdown = mdx.content;
		return (
			<div className='grid grid-cols-1'>
				<PageHeader
					title={title}
					subtitle={subtitle}
				/>

				<div className='@container w-full mx-auto text-pretty'>
					<CustomMDX source={markdown} />
				</div>
			</div>
		);
	} else return <>Unable to Load</>;
}
