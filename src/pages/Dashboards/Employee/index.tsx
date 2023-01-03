import { BsBriefcase, BsSave } from 'react-icons/bs'
import { MdFavoriteBorder } from 'react-icons/md'
import { AiOutlineStar } from 'react-icons/ai'
import Somtel from '@assets/clients/premier.png'

import LineChart from '@component/Shared/Chart/Area'
import JobCard from '@component/Cards/jobscard'
import DashboarHeading from '@component/Shared/DashboardHeading'

const EmployeeHome = (): JSX.Element => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <DashboarHeading heading='Welcome,' headingBold='Kamaal Ali' />
      <div className='grid gird-cols-1 md:grid-cols-3  gap-5 w-full my-12'>
        <div className='bg-white rounded-md w-full relative pt-10 md:col-span-2 px-3'>
          <h3 className='text-lg px-2'>Total Applied Jobs</h3>
          <LineChart />
        </div>

        <div className='bg-white flex flex-col w-full rounded-md px-3 py-4'>
          <div className='flex items-center justify-between gap-2  px-3 py-4 rounded-md cursor-pointer hover:bg-whiteBlue duration-300 transition-all ease-in-out'>
            <div className='w-14 h-12 rounded-md  flex items-center justify-center'>
              <BsBriefcase className='text-2xl text-primaryDark' />
            </div>
            <div className='w-full flex items-center justify-between'>
              <p className='flex flex-col'>
                Applied Jobs
                <span className='text-sm text-garyish'>Applied Jobs</span>
              </p>
              <p className='text-xl font-semibold text-primaryBlue'>8</p>
            </div>
          </div>

          <div className='flex items-center justify-between gap-2  px-3 py-4 rounded-md cursor-pointer hover:bg-whiteBlue duration-300 transition-all ease-in-out'>
            <div className='w-14 h-12 rounded-md  flex items-center justify-center'>
              <BsSave className='text-2xl text-primaryDark' />
            </div>
            <div className='w-full flex items-center justify-between'>
              <p className='flex flex-col'>
                Saved Jobs
                <span className='text-sm text-garyish'>Saved Jobs</span>
              </p>
              <p className='text-xl font-semibold text-primaryBlue'>12</p>
            </div>
          </div>

          <div className='flex items-center justify-between gap-2  px-3 py-4 rounded-md cursor-pointer hover:bg-whiteBlue duration-300 transition-all ease-in-out'>
            <div className='w-14 h-12 rounded-md  flex items-center justify-center'>
              <MdFavoriteBorder className='text-2xl text-primaryDark' />
            </div>
            <div className='w-full flex items-center justify-between'>
              <p className='flex flex-col'>
                Favorate Companies
                <span className='text-sm text-garyish'>your favorite companies</span>
              </p>
              <p className='text-xl font-semibold text-primaryBlue'>5</p>
            </div>
          </div>

          <div className='flex items-center justify-between gap-2  px-3 py-4 rounded-md cursor-pointer hover:bg-whiteBlue duration-300 transition-all ease-in-out'>
            <div className='w-14 h-12 rounded-md  flex items-center justify-center'>
              <AiOutlineStar className='text-2xl text-primaryDark' />
            </div>
            <div className='w-full flex items-center justify-between'>
              <p className='flex flex-col'>
                Rated Jobs
                <span className='text-sm text-garyish'>all jobs you rated</span>
              </p>
              <p className='text-xl font-semibold text-primaryBlue'>2</p>
            </div>
          </div>

          <div className='flex items-center justify-between gap-2  px-3 py-4 rounded-md cursor-pointer hover:bg-whiteBlue duration-300 transition-all ease-in-out'>
            <div className='w-14 h-12 rounded-md  flex items-center justify-center'>
              <BsBriefcase className='text-2xl text-primaryDark' />
            </div>
            <div className='w-full flex items-center justify-between'>
              <p className='flex flex-col'>
                Opened Jobs
                <span className='text-sm text-garyish'>Recent Opened Jobs</span>
              </p>
              <p className='text-xl font-semibold text-primaryBlue'>13</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Applid Jobs */}
      <div className='w-full'>
        <h2 className='text-xl font-semibold mb-6'>Related Jobs</h2>
        <div className='grid gird-cols-1 md:grid-cols-2 gap-4'>
          <JobCard
            jobName='Product Designer / UI Designer'
            companyImage={Somtel}
            companyName='Primier Bank'
            location='Mogadishu SO'
            postedDate='Today'
            sallery={2500}
            shift='Full Time'
            status='Urgent'
          />
          <JobCard
            jobName='Product Designer / UI Designer'
            companyImage={Somtel}
            companyName='Primier Bank'
            location='Mogadishu SO'
            postedDate='Today'
            sallery={2500}
            shift='Full Time'
            status='Urgent'
          />
          <JobCard
            jobName='Product Designer / UI Designer'
            companyImage={Somtel}
            companyName='Primier Bank'
            location='Mogadishu SO'
            postedDate='Today'
            sallery={2500}
            shift='Full Time'
            status='Urgent'
          />
          <JobCard
            jobName='Product Designer / UI Designer'
            companyImage={Somtel}
            companyName='Primier Bank'
            location='Mogadishu SO'
            postedDate='Today'
            sallery={2500}
            shift='Full Time'
            status='Urgent'
          />
        </div>
      </div>
    </div>
  )
}

export default EmployeeHome
