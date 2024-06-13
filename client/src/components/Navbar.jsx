import React, { useState } from 'react';
import { ChevronDown } from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';
import { LuSearch } from 'react-icons/lu';
import { SlMenu } from 'react-icons/sl';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { languages, navItems } from '@/data/constants';
import { GrLanguage } from 'react-icons/gr';

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [showRegisterMenu, setShowRegisterMenu] = useState(false);
	const [selectedLanguage, setSelectedLanguage] = useState('en');
	const [toggleLanguageMenu, setToggleLanguageMenu] = useState(false);
	const user = null;

	const toggleMenu = () => {
		setShowMenu(prev => !prev);
	};

	return (
		<nav className='border-b-2 w-full text-nowrap bg-inherit z-50'>
			<div className='flex justify-between md:justify-between items-center gap-x-4 md:max-w-[95%] lg:max-w-[90%]  px-2  mx-auto '>
				{/* left navbar section */}
				<div className='flex items-center justify-start gap-x-1 md:max-lg:gap-x-4'>
					<button className='p-2 md:hidden' onClick={toggleMenu} aria-label='open sidebar menu'>
						<SlMenu className='text-lg' />
					</button>
					<Link to='/' className='outline-none focus:border-none'>
						<img
							src='images/logo.png'
							className='w-28 min-w-24 object-cover object-center -mt-2 outline-none'
							alt='InternArea logo'
						/>
					</Link>

					{/* sidebar */}
					<div className='absolute top-0 left-0 w-full h-vh bg-black/10 z-40'></div>
					<div
						className={`md:hidden absolute top-0 left-0 w-4/5 h-dvh max-w-[320px] bg-white shadow-lg rounded-br rounded-tr -translate-x-full transition-transform z-50 ${
							showMenu ? 'translate-x-0' : ''
						}`}
						onClick={toggleMenu}>
						<button className='block ml-auto mr-4 mt-1 text-3xl py-1 px-2'>&times;</button>
						{user && (
							<div className='mb-1 cursor-pointer font-semibold border-b border-dashed'>
								<Link className='flex gap-x-2 items-center w-full px-4 py-2' to='/profile'>
									<img
										className='size-12 rounded-full object-cover object-center'
										src='https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlciUyMGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D'
										alt=''
									/>
									<div>
										<h2 id='user-name'>Alex</h2>
										<p className='font-normal text-sm'>Student</p>
									</div>
								</Link>
							</div>
						)}
						<ul>
							<li className='mb-1 cursor-pointer hover:bg-zinc-100 transition-colors font-semibold '>
								<Link className='w-full block px-4 py-3' to='/internships'>
									Internships
								</Link>
							</li>
							<li className='mb-1 cursor-pointer hover:bg-zinc-100 transition-colors font-semibold '>
								<Link className='w-full block px-4 py-3' to='/jobs'>
									Jobs
								</Link>
							</li>
							<hr />
							{user ? (
								<>
									<li className='mb-1 cursor-pointer hover:bg-zinc-100 transition-colors font-semibold '>
										<Link className='w-full block px-4 py-3' to='/applications'>
											My Applications
										</Link>
									</li>
									<li className='mb-1 cursor-pointer hover:bg-zinc-100 transition-colors font-semibold '>
										<Link className='w-full block px-4 py-3' to='/applications'>
											My Resume
										</Link>
									</li>
									<li className='mb-1 cursor-pointer hover:bg-zinc-100 transition-colors font-semibold '>
										<Link className='w-full block px-4 py-3' to='/logout'>
											Logout
										</Link>
									</li>
								</>
							) : (
								<>
									<li className='mb-1 cursor-pointer hover:bg-zinc-100 transition-colors font-semibold '>
										<Link className='w-full block px-4 py-3' to='/jobs'>
											Login
										</Link>
									</li>
									<li className='mb-1 cursor-pointer hover:bg-zinc-100 transition-colors font-semibold '>
										<Link className='w-full block px-4 py-3' to='/jobs'>
											Hire Talent
										</Link>
									</li>
									<li className='mb-1 cursor-pointer hover:bg-zinc-100 transition-colors font-semibold '>
										<Link className='w-full block px-4 py-3' to='/jobs'>
											Admin
										</Link>
									</li>
								</>
							)}
						</ul>
					</div>

					{/* nav buttons */}
					<ul className='md:flex justify-start items-center gap-x-2 hidden'>
						{navItems.map(navItem => (
							<li className='has-[:hover]:bg-[#eafcff] has-[:hover]:text-blue-600' key={navItem.title}>
								<HoverCard openDelay={1} closeDelay={0}>
									<HoverCardTrigger className='inline-flex gap-x-1 justify-center items-center px-3 py-6 text-sm font-semibold cursor-pointer'>
										{navItem.title} <ChevronDown className='size-4' />
									</HoverCardTrigger>
									<HoverCardContent
										align='start'
										sideOffset={0}
										className='w-fit rounded-none px-0 py-2 flex gap-x-4 flex-nowrap z-50'>
										<div>
											<ul>
												{navItem.dropdownContent.map((section, index) => (
													<li className='px-4 py-2 rounded-r-full hover:bg-[#eafcff] group/isOpened:bg-red-500  hover:text-blue-600 text-black/70 selected  capitalize font-semibold transition-colors duration-100 has-[:hover]:bg-[#eafcff]'>
														{section.heading}
													</li>
												))}
											</ul>
										</div>
										<div className='mr-12 border-l border-zinc-200'>
											<ul>
												{navItem.dropdownContent[0].data.map(title => (
													<li className='px-4 py-1 hover:text-blue-600 font-medium cursor-pointer text-sm'>
														{title}
													</li>
												))}
											</ul>
										</div>
									</HoverCardContent>
								</HoverCard>
							</li>
						))}
					</ul>
				</div>

				{/* right navbar section - mobile */}
				<div className='relative'>
					<button
						onClick={() => setShowRegisterMenu(prev => !prev)}
						className='flex justify-center items-center gap-x-1 bg-[#00A5EC] text-white font-semibold px-4 py-2 rounded outline-none hover:bg-[#00a5ecd7] sm:hidden'>
						Register <ChevronDown className='size-4 mt-1' />{' '}
					</button>
					<ul
						className={`${
							showRegisterMenu ? 'block' : 'hidden'
						} absolute top-full right-0 w-[150%] bg-white shadow-md my-1 rounded `}>
						<li>
							<Link to='/student' className='px-3 py-2 block hover:bg-zinc-100'>
								As a student
							</Link>
						</li>
						<li>
							<Link to='/admin' className='px-3 py-2 block hover:bg-zinc-100'>
								As an admin
							</Link>
						</li>
					</ul>
					<ul className='hidden sm:flex justify-start items-center gap-x-3 '>
						<li>
							<button className='inline-flex gap-x-1 justify-center items-center p-3 hover:bg-zinc-50 rounded-[3px] text-sm text-zinc-600 font-semibold flex-nowrap'>
								<LuSearch className='text-xl text-zinc-600' /> Search
							</button>
						</li>
						<li>
							<button className='text-[#00A5EC] text-sm font-semibold px-5 py-2 border border-[#00A5EC] rounded outline-none hidden md:block'>
								Login
							</button>
						</li>
						<li className='break-keep'>
							<Link
								to='/hire-talent'
								className='text-white text-sm text-nowrap bg-[#00A5EC]  font-semibold px-5 py-2 border border-[#00A5EC] rounded outline-none'>
								Hire Talent
							</Link>
						</li>
						<li className='break-keep'>
							<Link
								to='/admin'
								className='text-white text-sm bg-[#00A5EC] font-semibold px-5 py-2 border border-[#00A5EC] rounded outline-none'>
								Admin
							</Link>
						</li>
						{!user && (
							// <li className='relative text-[--primary-text] cursor-pointer px-2 rounded-sm transition-colors group hover:bg-[--grey] '>
							// 	<label htmlFor="language" className='cursor-pointer flex items-center justify-center  '>
							// 		<GrLanguage className='size-5 text-[--primary-text] group-hover:text-black '/>
							// 		<select name="selectLanguage" id="language" className='outline-none py-2 cursor-pointer flex-1 pl-2 bg-inherit group-hover:text-black '>
							// 			{languages.map(language => (
							// 				<option value={language.code}>{language.lang}</option>
							// 			))}
							// 		</select>
							// 	</label>
							// </li>
							<li
								className='relative flex items-center justify-center gap-x-1 p-2 bg-white rounded-sm group '
								onClick={() => setToggleLanguageMenu(prev => !prev)}>
								<GrLanguage className='size-5 text-[--primary-text] hover:text-black ' />
								<ul
									className={`absolute top-full right-2 bg-inherit shadow-md w-32 mt-2 z-50 ${
										toggleLanguageMenu ? 'block' : 'hidden'
									} `}>
									{languages.map(language => (
										<li
											key={language.value}
											className='w-full hover:bg-slate-50 cursor-pointer text-[--primary-text] hover:text-black '>
											<label
												htmlFor={`language-${language.value}`}
												className='block w-full px-2 py-1 cursor-pointer '>
												<input
													type='radio'
													name='selectLanguage'
													id={`language-${language.value}`}
													checked={selectedLanguage === language.value}
													onChange={() => setSelectedLanguage(language.value)}
													className='appearance-none'
												/>
												<span>{language.label}</span>
											</label>
										</li>
									))}
									{console.log(selectedLanguage)}
								</ul>
							</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
