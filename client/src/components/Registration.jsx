import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FcGoogle } from 'react-icons/fc';
import { MdErrorOutline } from 'react-icons/md';
import { Login } from './index';
import { useNavbar } from '@/context/NavbarContext';
import { Link } from 'react-router-dom';

const registerSchema = z.object({
	email: z.string().email({ message: 'Invalid email address' }),
	password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
	firstName: z.string().min(1, { message: 'First name is required' }),
	lastName: z.string().min(1, { message: 'Last name is required' }),
});

const Registration = () => {
	const { showLogin, setShowLogin } = useNavbar();

	useEffect(() => {
		setShowLogin(false);
	}, []);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: zodResolver(registerSchema) });

	const onSubmit = data => console.log(data);

	return (
		<>
			<section
				id='register'
				className='grid place-content-center min-h-dvh min-w-[305px] '
				style={{ background: 'url("/images/registration-background.png") fixed no-repeat bottom/cover' }}>
				{showLogin && <Login />}
				<header className='px-6 mt-4 md:mt-6 '>
					<div className='relative mb-4 lg:mb-6 w-fit min-[400px]:mx-auto '>
						<h1 className='text-xl font-bold lg:text-[40px] lg:font-extrabold text-[--heading] leading-none  '>
							Sign-up and apply for free
						</h1>
						<span
							style={{ background: "url('/images/underline.svg') no-repeat center/contain " }}
							className='absolute top-1/2 left-1/2 lg:top-[90%] lg:right-0 w-1/2 h-10'></span>
					</div>
					<p className='lg:font-medium lg:text-2xl min-[400px]:text-center text-[--heading] '>
						1,50,000+ companies hiring on Internarea
					</p>
				</header>
				<div
					aria-label='registration-form'
					className='w-full max-w-md mx-auto lg:mt-8 rounded-xl px-6 lg:px-8 py-6 bg-white lg:shadow-[-2px_-2px_6px_rgba(0,107,194,0.12),2px_2px_6px_rgba(0,107,194,0.12)] '>
					<button className='flex items-center justify-center gap-x-2 w-full py-2 border rounded-md text-[--primary-text] font-medium mb-4 md:mb-6 '>
						<FcGoogle /> Sign up with Google
					</button>
					<div className='my-2 md:my-4 flex justify-center items-center gap-x-2 text-sm font-medium text-[--dark-grey] tracking-wide '>
						<div className='border-t flex-1'></div>
						OR
						<div className='border-t flex-1'></div>
					</div>

					<form
						action=''
						onSubmit={handleSubmit(onSubmit)}
						className='flex flex-col items-start justify-start gap-y-4 '>
						<div className='flex flex-col items-start justify-start gap-y-1 w-full '>
							<label htmlFor='email' className='text-[--primary-text] font-medium md:text-sm '>
								Email
							</label>
							<input
								type='email'
								name='user-email'
								id='email'
								{...register('email')}
								placeholder='john@example.com'
								className='border w-full px-2 py-2 text-sm rounded-sm text-[--base-grey] hover:border-[--primary] focus-within:border-[--primary] outline-none invalid:border-red-500 tracking-wide '
							/>
							{errors.email && (
								<p className='text-red-500 text-sm flex items-center justify-start gap-x-1'>
									<MdErrorOutline /> {errors.email.message}
								</p>
							)}
						</div>
						<div className='flex flex-col items-start justify-start gap-y-1 w-full '>
							<label htmlFor='password' className='text-[--primary-text] font-medium md:text-sm '>
								Password
							</label>
							<input
								type='password'
								name='user-password'
								id='password'
								{...register('password')}
								placeholder='Must be at least 6 characters'
								className='border w-full px-2 py-2 text-sm rounded-sm text-[--base-grey] hover:border-[--primary] focus-within:border-[--primary] outline-none invalid:border-red-500 tracking-wide '
							/>
							{errors.password && (
								<p className='text-red-500 text-sm flex items-center justify-start gap-x-1'>
									<MdErrorOutline /> {errors.password.message}
								</p>
							)}
						</div>
						<div className='flex items-center justify-between w-full gap-x-4 '>
							<div className='flex flex-col items-start justify-start gap-y-1 w-full '>
								<label htmlFor='firstName' className='text-[--primary-text] font-medium md:text-sm '>
									First Name
								</label>
								<input
									type='text'
									name='user-first-name'
									id='firstName'
									{...register('firstName')}
									placeholder='John'
									className='border w-full px-2 py-2 text-sm rounded-sm text-[--base-grey] hover:border-[--primary] focus-within:border-[--primary] outline-none invalid:border-red-500 tracking-wide '
								/>
								{errors.firstName && (
									<p className='text-red-500 text-sm flex items-center justify-start gap-x-1'>
										<MdErrorOutline /> {errors.firstName.message}
									</p>
								)}
							</div>
							<div className='flex flex-col items-start justify-start gap-y-1 w-full '>
								<label htmlFor='lastName' className='text-[--primary-text] font-medium md:text-sm '>
									Last Name
								</label>
								<input
									type='text'
									name='user-last-name'
									id='lastName'
									{...register('lastName')}
									placeholder='Doe'
									className='border w-full px-2 py-2 text-sm rounded-sm text-[--base-grey] hover:border-[--primary] focus-within:border-[--primary] outline-none invalid:border-red-500 tracking-wide '
								/>
								{errors.lastName && (
									<p className='text-red-500 text-sm flex items-center justify-start gap-x-1'>
										<MdErrorOutline /> {errors.lastName.message}
									</p>
								)}
							</div>
						</div>
						<small className='text-[--primary-text] '>
							By signing up, you agree to our{' '}
							<a href='#' className='text-[--primary] font-normal hover:text-[--primary-dark] '>
								Terms and Conditions
							</a>
							.
						</small>
						<button
							type='submit'
							className='w-full font-medium bg-[--primary] hover:bg-[--primary-dark] text-white text-sm tracking-wide py-2 rounded-sm '>
							Sign up
						</button>
					</form>
					<p className='mt-4 text-sm font-medium text-center '>
						Already registered?{' '}
						<button onClick={() => setShowLogin(true)} className='text-[--primary] '>
							Login
						</button>{' '}
					</p>
				</div>
			</section>
		</>
	);
};

export default Registration;
