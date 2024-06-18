import React, { useCallback, useEffect, useState } from 'react';
import { Footer, Navbar } from '@/components';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { LuFilter } from 'react-icons/lu';
import { PiClockClockwiseBold, PiClockClockwiseFill } from "react-icons/pi";
import { Search, TrendingUp, MapPin, Banknote, Calendar } from 'lucide-react';


const InternshipPage = () => {
	const [profile, setProfile] = useState('');
	const [location, setLocation] = useState('');
	const [wfh, setWfh] = useState(false);
	const [partTime, setPartTime] = useState(false);
	const [minStipend, setMinStipend] = useState(0);
	const [keywords, setKeywords] = useState('');

	const clearFilters = () => {
		setProfile('');
		setLocation('');
		setWfh(false);
		setPartTime(false);
		setMinStipend(0);
	};

	return (
		<>
			<Navbar />
			<main className='bg-[--light-grey] w-full '>
				<div className='w-full max-w-screen-lg mx-auto pt-1 pb-8 '>
					<Breadcrumb className='mt-6 '>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href='/'>Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Internships</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
					<div className='flex items-start justify-between gap-x-4 mt-20 h-full sticky top-0 '>
						<div className='grid grid-rows-[auto_1fr] w-fit h-min sticky top-0 '>
							<div className='border border-[--grey] rounded-md flex flex-col items-start justify-start w-fit px-4 py-8 bg-white  '>
								<p className='flex items-center justify-center gap-x-1 self-center '>
									<LuFilter className='text-[--primary-dark] stroke-1 ' />
									<span className='font-medium text-[--heading] '>Filters</span>
								</p>
								<form action='#' className='flex items-start justify-start flex-col gap-y-4 '>
									<div className='flex flex-col items-start justify-start gap-y-1 w-full mt-4 '>
										<label htmlFor='profile' className='text-[--primary-text] font-medium '>
											Profile
										</label>
										<input
											type='text'
											name='profile'
											id='profile'
											placeholder='e.g. Marketing'
											className='border w-full px-2 py-2 text-sm rounded-sm text-[--base-grey] hover:border-[--primary] focus-within:border-[--primary] outline-none tracking-wide '
											value={profile}
											onChange={e => setProfile(e.target.value)}
										/>
									</div>
									<div className='flex flex-col items-start justify-start gap-y-1 w-full '>
										<label htmlFor='location' className='text-[--primary-text] font-medium '>
											Location
										</label>
										<input
											type='text'
											name='location'
											id='location'
											placeholder='e.g. Delhi'
											className='border w-full px-2 py-2 text-sm rounded-sm text-[--base-grey] hover:border-[--primary] focus-within:border-[--primary] outline-none invalid:border-red-500 tracking-wide '
											value={location}
											onChange={e => setLocation(e.target.value)}
										/>
									</div>
									<div className='flex items-center justify-start gap-x-2 w-full '>
										<input
											type='checkbox'
											name='wfh'
											id='wfh'
											className='size-4'
											checked={wfh}
											onChange={() => setWfh(prev => !prev)}
										/>
										<label htmlFor='wfh' className='text-[--primary-text] font-medium '>
											Work from home
										</label>
									</div>
									<div className='flex items-center justify-start gap-x-2 w-full -mt-2 '>
										<input
											type='checkbox'
											name='part-time'
											id='part-time'
											className='size-4'
											checked={partTime}
											onChange={() => setPartTime(prev => !prev)}
										/>
										<label htmlFor='part-time' className='text-[--primary-text] font-medium '>
											Part-time
										</label>
									</div>
									<div className='flex flex-col items-start justify-start gap-y-1 w-full '>
										<label htmlFor='stipend' className='text-[--primary-text] font-medium '>
											Desired minimum monthly stipend (₹)
										</label>
										<Slider
											max={12000}
											step={2000}
											value={[minStipend]}
											onValueChange={val => setMinStipend(val)}
											className='mt-4'
										/>
										<div className='flex items-center justify-evenly w-full text-sm '>
											{[0, 2000, 4000, 6000, 8000, 10000].map(num => (
												<button onClick={() => setMinStipend(num)}>{num}</button>
											))}
										</div>
									</div>
									<button
										type='button'
										className='text-[--primary] hover:text-[--primary-dark] font-medium mt-8 text-sm self-end '
										onClick={clearFilters}>
										Clear all
									</button>
								</form>
							</div>
							<div className='bg-white border border-[--grey] rounded-md px-4 py-8 mt-2  '>
								<p className='font-medium text-lg text-center text-[--heading] '>Keyword Search</p>
								<div className='mt-4 flex items-center justify-between rounded-sm overflow-hidden border border-[--grey] '>
									<input
										type='text'
										placeholder='e.g. Design, Mumbai, Infosys'
										className='w-full px-2 py-2 text-sm '
										value={keywords}
										onChange={e => setKeywords(e.target.value)}
									/>
									<button
										type='submit'
										className='bg-[--primary] hover:bg-[--primary-dark] px-2 py-2 text-white '>
										<Search className='size-5 ' />
									</button>
								</div>
							</div>
						</div>
						<div className='flex-1 flex flex-col gap-y-4 '>
							{Array(20).fill(0).map(el => (
                                <a href="/#">
                                    <Card className='text-sm shadow-sm hover:shadow-lg hover:scale-[1.005] transition-transform duration-75'>
                                        <CardHeader className='flex items-start justify-between flex-row '>
                                            <div >
                                                <CardTitle className='text-base mb-1 '>Telecalling (Female)</CardTitle>
                                                <CardDescription>
                                                    Positive Thought
                                                    <span className='ml-2 border border-[--primary-dark] text-[--primary-dark] rounded-xl px-2 text-xs py-[2px] '>Actively hiring</span>
                                                </CardDescription>
                                            </div>
                                            <img src="/images/companyLogo_placeholder.svg" alt="Company Logo" className='block size-12 ' />
                                        </CardHeader>
                                        <CardContent className='text-xs flex items-center gap-x-4'>
                                            <p className='flex items-center gap-x-1 text-[--primary-text]'> <MapPin className='size-4 text-inherit' /> Delhi, Noida </p>
                                            <p className='flex items-center gap-x-1 text-[--primary-text]'> <Calendar className='size-4 text-inherit' /> 3 months </p>
                                            <p className='flex items-center gap-x-1 text-[--primary-text]'> <Banknote className='size-4 text-inherit' /> ₹ 5,000 /month </p>
                                        </CardContent>
                                        <CardFooter>
                                            <p className='flex items-center gap-x-2 text-[--primary-dark] bg-[#EAFCFF] text-xs rounded-xl p-1 '> <PiClockClockwiseBold/>  5 days ago </p>
                                        </CardFooter>
                                    </Card>
                                </a>
                            ))}
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default InternshipPage;
