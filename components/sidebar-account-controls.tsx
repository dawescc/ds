import { signout } from "@/app/login/actions";
import Link from "next/link";

const SignOut = () => {
	return (
		<form action={signout}>
			<button
				className='button w-full max-w-full'
				type='submit'>
				Sign Out
			</button>
		</form>
	);
};
const SignIn = () => {
	return (
		<Link href='/login'>
			<div className='button'>Sign In</div>
		</Link>
	);
};

export { SignOut, SignIn };
