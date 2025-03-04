import { createClient } from "@/utils/supabase/server";
import { Sidebar } from "./sidebar";

export default async function SidebarWrapper() {
	const supabase = await createClient();

	const { data, error } = await supabase.auth.getUser();
	if (error) {
		console.log(error);
	}

	return <Sidebar user={data.user} />;
}
