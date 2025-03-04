import { login } from "./actions";
import { Input } from "@/components/ui/input";
import DawesDesign from "@/components/dsd";
import formatTitle from "title";

const title = "sign in to your account";
const subtitle = "access members only resources";
const caveat = "sign up is currently disabled";
export default function LoginPage() {
	return (
		<div className='grid grid-cols-1 gap-8 py-20 pt-8 px-8 h-[calc(100vh-var(--spacing-header))]'>
			<div className='grid grid-cols-1 gap-4 place-items-center'>
				<h1 className='text-3xl font-medium'>{formatTitle(title)}</h1>
				<h2 className='text-xl font-medium text-gray-900'>{formatTitle(subtitle)}</h2>
			</div>
			<div className='@container w-full mx-auto text-pretty overflow-hidden'>
				<div className='grid grid-cols-1 gap-4 place-items-center relative'>
					<form
						autoComplete='on'
						className='grid grid-cols-1 gap-8 border w-full max-w-lg mx-auto pt-12 pb-10 px-10 bg-background-100 rounded'>
						<DawesDesign className='size-8 text-primary mx-auto mb-6' />

						<div className='relative grid grid-cols-1 gap-2'>
							<label
								htmlFor='email'
								className='text-md text-gray-900'>
								Email Address:
							</label>
							<Input
								id='email'
								className='peer'
								name='email'
								placeholder='Email'
								type='email'
								required
								autoComplete='username email'
							/>
						</div>

						<div className='relative grid grid-cols-1 gap-2'>
							<label
								htmlFor='password'
								className='text-md text-gray-900'>
								Password:
							</label>
							<Input
								id='password'
								className='peer'
								name='password'
								placeholder='Password'
								type='password'
								required
								autoComplete='current-password'
							/>
						</div>

						<button
							formAction={login}
							className='button'>
							Sign in
						</button>
					</form>
					<span className='text-xs text-gray-900'>{formatTitle(caveat)}</span>
				</div>
			</div>
		</div>
	);
}
