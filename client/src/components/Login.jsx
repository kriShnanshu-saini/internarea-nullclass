import React from 'react';
import { useNavbar } from '@/context/NavbarContext';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { MdErrorOutline } from 'react-icons/md';

const loginSchema = z.object({
	email: z.string().email({ message: 'Invalid email address' }),
	password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
});

const Login = () => {
	const { setShowLogin } = useNavbar();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit = data => {
		console.log(data);
	};
	return (
		<div className='absolute top-0 left-0 bg-black/60 w-full h-full z-50'>
			<div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-sm w-full mx-auto min-h-96 shadow-lg px-4 py-6 rounded-md bg-white z-50 '>
				<button
					aria-label='close login modal'
					className='text-3xl ml-auto block mb-4 -mt-6 -mr-2 text-[--primary-text] hover:text-black p-2 '
					onClick={() => setShowLogin(false)}>
					&times;
				</button>
				<button className='flex items-center justify-center gap-x-2 w-full border rounded-sm py-1 font-medium text-[--primary-text] hover:text-black '>
					<FcGoogle className='size-4' /> Login with Google
				</button>
				<div className=' my-4 flex justify-center items-center gap-x-2 text-sm font-medium text-[--dark-grey] '>
					<div className='border-t flex-1'></div>
					OR
					<div className='border-t flex-1'></div>
				</div>
				<form
					action=''
					className='flex flex-col items-start justify-start gap-y-4 '
					onSubmit={handleSubmit(onSubmit)}>
					<div className='flex flex-col items-start justify-start gap-y-1 w-full '>
						<label htmlFor='email' className='text-[--primary-text] font-medium '>
							Email
						</label>
						<input
							type='email'
							name='user-email'
							id='email'
							{...register('email')}
							placeholder='joe@example.com'
							className='border w-full px-2 py-2 text-sm rounded-sm text-[--base-grey] hover:border-[--primary] focus-within:border-[--primary] outline-none invalid:border-red-500 tracking-wide '
						/>
						{errors.email && (
							<p className='text-red-500 text-sm flex items-center justify-start gap-x-1'>
								<MdErrorOutline /> {errors.email.message}
							</p>
						)}
					</div>
					<div className='flex flex-col items-start justify-start gap-y-1 w-full '>
						<label htmlFor='password' className='text-[--primary-text] font-medium '>
							Password
						</label>
						<input
							type='password'
							name='user-password'
							id='password'
							{...register('password')}
							placeholder='Must be atleast 6 characters'
							className='border w-full px-2 py-2 text-sm rounded-sm text-[--base-grey] hover:border-[--primary] focus-within:border-[--primary] outline-none invalid:border-red-500 tracking-wider '
						/>
						{errors.password && (
							<p className='text-red-500 text-sm flex items-center justify-start gap-x-1'>
								<MdErrorOutline /> {errors.password.message}
							</p>
						)}
						<Link
							to='/login/forgot-password'
							className='font-medium self-end text-[--primary] mt-2 hover:text-[--primary-dark] transition-colors duration-100 '>
							Forgot password?
						</Link>
					</div>
					<button
						type='submit'
						className='w-full py-2 bg-[--primary] hover:bg-[--primary-dark] font-medium text-white rounded-sm transition-colors duration-100 '>
						Login
					</button>
					<p className='self-center text-[--primary-text] font-medium '>
						New to Internarea? <Link to='/register'> Register</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
