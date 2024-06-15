import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { HiMiniFire } from 'react-icons/hi2';

import UICard from '../lib/utils/UICard';
import InternshipDetails from '@/data/internshipDetails.json';
import { JobData } from '@/data/jobsDetails';
import UICarousel from '@/lib/utils/UICarousel';
import { popularCategories, stats, carouselImages } from '@/data/constants';
import Login from './Login';
import { useNavbar } from '@/context/NavbarContext';
import { Footer, Navbar } from './index';

const Home = () => {
	const [internshipData, setInternshipData] = useState([]);
	const [jobData, setJobData] = useState([]);
	const { showLogin } = useNavbar();

	useEffect(() => {
		// TODO: use tanstack query to fetch data from db and can also add skeleton feature while fetching data to the Card
		setInternshipData(InternshipDetails);
		setJobData(JobData);
	}, []);

	return (
		<>
			<Navbar/>
			<main className=''>
				{showLogin && <Login />}
				<section id='hero' className='w-full h-screen max-w-[90%] mx-auto p-1'>
					<div className='relative'>
						<h1 className='text-center text-6xl font-bold text-[#333] mt-[3rem]'>
							Make your <span>dream career</span> a reality
						</h1>
						<span className='underline'></span>
					</div>
					<div id='trending'>
						<h2 className='text-3xl font-bold mt-16 flex justify-center items-center gap-x-1 text-center'>
							Trending on InternArea <HiMiniFire className='fill-orange-600 size-9' />{' '}
						</h2>
						<UICarousel numSlides={3}>
							{carouselImages.map(url => (
								<img src={url} alt='' />
							))}
						</UICarousel>
					</div>
				</section>
				<section id='latest-internships' className='bg-[#fafafa] min-h-fit pb-20 p-2'>
					<h2 className='font-bold mt-16 text-3xl text-center text-[#333]'>
						Latest internships on InternArea
					</h2>
					<div className='max-w-screen-lg mx-auto mt-6 text-base flex items-baseline justify-center flex-nowrap'>
						<span className='uppercase tracking-wider mr-4 text-[14px] text-nowrap font-medium text-[--primary-text]'>
							popular categories:
						</span>
						<ul className='flex gap-2 flex-wrap items-center text-sm'>
							{popularCategories.map(category => (
								<button
									key={category}
									className='px-4 py-1 border border-[#ddd] rounded-full cursor-pointer font-medium text-[--primary-text] focus-within:bg-[--primary] focus-within:text-white focus-within:border-[--primary]'>
									{category}
								</button>
							))}
						</ul>
					</div>
					<Carousel className='max-w-screen-xl w-full mx-auto mt-8 '>
						<CarouselContent className='*:basis-1/4 '>
							{internshipData.map(data => (
								<CarouselItem>
									<UICard data={data} />
								</CarouselItem>
							))}
						</CarouselContent>
						<div className='flex justify-center items-center gap-x-12 mt-8 '>
							<CarouselPrevious />
							<CarouselNext />
						</div>
					</Carousel>
				</section>
				<section id='latest-jobs' className='bg-[#fafafa] min-h-fit pb-20 p-2'>
					<h2 className='font-bold mt-8 text-3xl text-center text-[#333]'>Latest jobs on InternArea</h2>
					<div className='max-w-screen-lg mx-auto mt-6 text-base flex items-baseline justify-center flex-nowrap'>
						<span className='uppercase tracking-wider mr-4 text-[14px] text-nowrap font-medium text-[--primary-text]'>
							popular categories:
						</span>
						<ul className='flex gap-2 flex-wrap items-center text-sm'>
							{popularCategories.map(category => (
								<button
									key={category}
									className='px-4 py-1 border border-[#ddd] rounded-full cursor-pointer font-medium text-[--primary-text] focus-within:bg-[--primary] focus-within:text-white focus-within:border-[--primary]'>
									{category}
								</button>
							))}
						</ul>
					</div>
					<Carousel className='max-w-screen-xl w-full mx-auto mt-4 '>
						<CarouselContent className='*:basis-1/4 '>
							{jobData.map(data => (
								<CarouselItem>
									<UICard data={data} />
								</CarouselItem>
							))}
						</CarouselContent>
						<div className='flex justify-center items-center gap-x-12 mt-8 '>
							<CarouselPrevious />
							<CarouselNext />
						</div>
					</Carousel>
				</section>
				<section id='internarea-stats' className='border-t'>
					<div className='grid grid-cols-4 gap-x-8 mt-16 mb-24 max-w-screen-lg mx-auto *:text-center '>
						{stats.map(stat => (
							<div className='flex flex-col justify-between items-center gap-y-1 border-r last:border-none '>
								<p className='text-[44px] font-bold text-[--primary-darkest] tracking-wide pb-4 leading-none '>
									{stat.value}
								</p>
								<p className='text-lg text-[--primary-text] '>{stat.desc}</p>
							</div>
						))}
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Home;
