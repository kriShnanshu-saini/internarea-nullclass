import { ChevronRight, TrendingUp, MapPin, Banknote, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

/*
{
    title
    company
    location
    Duration
    category
    isActivelyHiring
    aboutCompany
    aboutInternship
    Whocanapply
    perks
    AdditionalInfo
    numberOfopning
    stipend
    StartDate
}
*/

const UICard = ({ data }) => {
	return (
		<div className='card w-[280px] h-full border border-[--grey] bg-white p-5 rounded-2xl  flex flex-col'>
			<div className='card-header pb-4 border-b border-[--grey]'>
				{data.isActivelyHiring && (
					<p className='flex items-center justify-center gap-x-1 text-[--primary-text] text-xs font-medium border rounded-md w-fit py-1 px-2 mb-2'>
						<TrendingUp className='stroke-[--primary] size-4' />
						Actively hiring
					</p>
				)}
				<h3 className='card-title font-semibold text-sm tracking-wide mt-2'>{data.title}</h3>
				<p className='card-description text-xs font-medium tracking-wide text-slate-400 mt-1 '>
					{data.company}
				</p>
			</div>
			<div className='card-content *:text-sm *:flex *:items-center *:justify-start *:gap-x-1 text-[--base-grey] '>
				<p className='location mt-3'>
					{' '}
					<MapPin className='size-4' /> {data.location}
				</p>
				<p className='salary mt-3'>
					{' '}
					<Banknote className='size-4' /> ₹ {data.stipend} /month
				</p>
				<p className='duration mt-3'>
					{' '}
					<Calendar className='size-4' /> {data.Duration}
				</p>
			</div>
			<div className='card-footer flex items-end justify-between mt-12 flex-1'>
				<small className='bg-[--grey] px-2 text-xs font-medium text-[--base-grey] py-1 rounded-sm'>
					Internship
				</small>
				<p className='view-more flex items-center justify-center gap-x-1 font-medium text-[15px] text-[--primary] hover:text-[--primary-dark] cursor-pointer '>
					View details <ChevronRight className='size-4' />
				</p>
			</div>
		</div>
	);
};

export default UICard;
