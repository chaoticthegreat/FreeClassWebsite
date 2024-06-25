import { supabase } from '$lib/supabaseClient';

export const actions = {
	default: async ({request})=> {
		const formData = await request.formData();
		const email = formData.get("email") as string;

		const {error} = await supabase.from("mailingList").insert({"id": Math.floor(Math.random()*(999999-100000+1)+100000), "email": email});
		if (error) throw error;
	}
}