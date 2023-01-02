/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { BsBriefcase, BsClockHistory, BsCashCoin } from 'react-icons/bs'
import { SlLocationPin } from 'react-icons/sl'
import Formatter from '@utils/Formatter'
interface IJobCard {
  jobName: string
  companyName: string
  location: string
  postedDate: string
  sallery?: number
  shift: string
  status?: string
  companyImage: string
}
const JobCard: React.FC<IJobCard> = ({
  jobName,
  companyImage,
  companyName,
  location,
  postedDate,
  sallery,
  shift,
  status
}): React.ReactElement => {
  return (
    <div className='border bg-white hover:bg-blue-100 duration-300 transition-all ease-in-out cursor-pointer rounded-md w-full px-6 py-5'>
      <div className='flex items-start gap-5'>
        <div className='w-14  rounded-full overflow-hidden flex items-center justify-center '>
          <img src={companyImage} alt='logo' className='object-cover object-center h-full' />
        </div>
        <div className='flex flex-col items-start'>
          <h3 className='text-lg font-semibold'>{jobName}</h3>
          <div className='flex items-center justify-start gap-2 flex-wrap mt-3'>
            <p className='flex items-center gap-2 text-sm text-gray-500'>
              <span>
                <BsBriefcase />
              </span>
              {companyName}
            </p>
            <p className='flex items-center gap-2 text-sm text-gray-500'>
              <span>
                <SlLocationPin />
              </span>
              {location}
            </p>
            <p className='flex items-center gap-2 text-sm text-gray-500'>
              <span>
                <BsClockHistory />
              </span>
              {postedDate}
            </p>
            <p className='flex items-center gap-2 text-sm text-gray-500'>
              <span>
                <BsCashCoin />
              </span>
              {sallery ? Formatter.format(sallery) : 'Not Provided'}
            </p>
          </div>
          <div className='flex items-center justify-start gap-3 w-full mt-4'>
            {status != null && (
              <div className='rounded-full px-4 text-sm py-1 bg-orange-100'>{status}</div>
            )}
            <div className='rounded-full px-4 text-sm py-1 bg-blue-100'>{shift}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobCard
