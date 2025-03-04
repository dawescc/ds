import PageHeader from "@/components/page-header";
import { CustomMDX } from "@/components/remote-mdx";
import { createClient } from "@/utils/supabase/server";

const title = "color";
const subtitle = "for accessibility, flexibility, & a little bit of flair";

export default async function Color() {
	const supabase = await createClient();

	const { data: mdx, error } = await supabase.from("mdx").select("*").eq("title", "placehold").single();

	if (error) {
		throw error;
	}
	if (mdx) {
		const markdown = mdx.content;

		return (
			<div className='grid grid-cols-1 -mr-[1px]'>
				<PageHeader
					title={title}
					subtitle={subtitle}
				/>

				<div className='w-full mx-auto text-pretty'>
					<CustomMDX source={markdown} />
				</div>
			</div>
		);
	} else return <>Unable to Load</>;
}
