import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { RiGooglePlayLine, RiTwitterLine } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa';
import { LuLinkedin } from 'react-icons/lu';
import { FaYoutube } from 'react-icons/fa';
import { CiCoffeeCup } from "react-icons/ci";
import { Link } from 'react-router-dom';

import { footer } from '@/data/constants';


const Footer = () => {
	return (
		<footer className='w-full min-h-screen bg-[#333]'>
			<div
				className='flex justify-between items-center py-24 px-16 '
				style={{ background: 'url("/images/footer-bg.png") no-repeat center/cover' }}>
				<p className='text-4xl font-bold text-white '>
					Empower your career with <br />
					InternArea today
				</p>
				<div className='flex items-center justify-center gap-x-4 '>
					<button className='flex items-center justify-center gap-x-2 text-lg bg-white px-8 py-3 rounded-md font-medium text-[--primary-text] '>
						<FcGoogle /> Continue with Google
					</button>
					<button className='text-lg font-medium bg-black/25 px-8 py-3 rounded-md text-white '>
						Register now
					</button>
				</div>
			</div>
			<div className='w-full py-8 px-12 text-white'>
				<div className='grid grid-cols-4 border-b border-[--grey] pb-8 '>
					{footer.header.map(data => (
						<div className='w-fit'>
							<p className='font-medium text-base mb-3'>{data.heading}</p>
							<ul>
								{data.body.map(item => (
									<li className='text-sm mb-2 cursor-pointer '>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className='grid grid-cols-5 h-fit mt-6'>
					{footer.footer.map(data => (
						<ul className='last:col-span-2 '>
							{data.map(item => (
								<li className='mb-2 text-sm cursor-pointer w-fit'>{item}</li>
							))}
						</ul>
					))}
				</div>
				<div className='mt-12 mb-4 flex items-center justify-between '>
					<div className='flex items-center justify-start gap-x-6'>
						<button className='flex items-center justify-center gap-x-2 border border-white rounded-md px-3 py-2'>
							<RiGooglePlayLine className='size-6' /> Get Android App
						</button>
						<div className='flex items-center gap-x-4'>
							<Link>
								<FaInstagram className='size-6' />
							</Link>
							<Link>
								<RiTwitterLine className='size-6' />
							</Link>
							<Link>
								<FaYoutube className='size-6' />
							</Link>
							<Link>
								<LuLinkedin className='size-6' />
							</Link>
						</div>
					</div>
					<p className='text-sm'>&copy; Copyright 2024. All Rights Reserved</p>
				</div>
			</div>
			<p className='text-center flex items-center justify-center gap-x-1 text-white pb-4 text-sm'>
				Made with <CiCoffeeCup /> by anshuL{' '}
			</p>
		</footer>
	);
};

export default Footer;
