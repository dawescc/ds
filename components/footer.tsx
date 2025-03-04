import { createClient } from "@/utils/supabase/server";
import DawesDesign from "./dsd";
import { PageNavigation } from "@/components/footer-pagination";

const Footer = async () => {
	const supabase = await createClient();

	const { data, error } = await supabase.auth.getUser();
	if (error) {
		console.log(error);
	}
	return (
		<div className='flex grow border-t'>
			<div className='py-10 px-8 grow grid grid-cols-1 gap-10'>
				<PageNavigation user={data.user} />
				<div className='flex flex-col items-center justify-center gap-2'>
					<DawesDesign />
					<span>2025</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
