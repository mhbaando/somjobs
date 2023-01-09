import JobCard from '@component/Cards/jobscard'
import LineChart from '@component/Shared/Chart/Area'
import DashboarHeading from '@component/Shared/DashboardHeading'
import { AiOutlineStar, AiOutlineCheckCircle } from 'react-icons/ai'
import { BsBriefcase, BsSave } from 'react-icons/bs'
import { MdFavoriteBorder } from 'react-icons/md'
import { CgTimer } from 'react-icons/cg'

import Userplaceholder from '@assets/misc/user.jpg'
import RecentApplicantCard from '@component/Cards/RecentApplicantCard'

const CompanyHome = (): JSX.Element => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <DashboarHeading heading='Hello,' headingBold='Premier Bank' />
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
                Posted Jobs
                <span className='text-sm text-garyish'>All Posted Jobs</span>
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
                Applicants
                <span className='text-sm text-garyish'>All applicants in your jobs</span>
              </p>
              <p className='text-xl font-semibold text-primaryBlue'>12</p>
            </div>
          </div>

          <div className='flex items-center justify-between gap-2  px-3 py-4 rounded-md cursor-pointer hover:bg-whiteBlue duration-300 transition-all ease-in-out'>
            <div className='w-14 h-12 rounded-md  flex items-center justify-center'>
              <AiOutlineCheckCircle className='text-2xl text-primaryDark' />
            </div>
            <div className='w-full flex items-center justify-between'>
              <p className='flex flex-col'>
                Active Jobs
                <span className='text-sm text-garyish'>All Active jobs</span>
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
                Rated
                <span className='text-sm text-garyish'>How many rates you get</span>
              </p>
              <p className='text-xl font-semibold text-primaryBlue'>2</p>
            </div>
          </div>

          <div className='flex items-center justify-between gap-2  px-3 py-4 rounded-md cursor-pointer hover:bg-whiteBlue duration-300 transition-all ease-in-out'>
            <div className='w-14 h-12 rounded-md  flex items-center justify-center'>
              <CgTimer className='text-2xl text-primaryDark' />
            </div>
            <div className='w-full flex items-center justify-between'>
              <p className='flex flex-col'>
                Expired Jobs
                <span className='text-sm text-garyish'>Total Expired Jobs</span>
              </p>
              <p className='text-xl font-semibold text-primaryBlue'>13</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Applid Jobs */}
      <div className='w-full'>
        <h2 className='text-xl font-semibold mb-6'>Recent Applicants</h2>
        <div className='grid gird-cols-1 lg:grid-cols-2 gap-4'>
          <RecentApplicantCard
            applicantsImage={Userplaceholder}
            applicantsName='Kamaal Abshir'
            applicantsTitle='Front End Developer'
            appliedJob='Senior Front End'
          />
          <RecentApplicantCard
            applicantsImage={Userplaceholder}
            applicantsName='Kamaal Abshir'
            applicantsTitle='Front End Developer'
            appliedJob='Senior Front End'
          />
          <RecentApplicantCard
            applicantsImage={Userplaceholder}
            applicantsName='Kamaal Abshir'
            applicantsTitle='Front End Developer'
            appliedJob='Senior Front End'
          />
          <RecentApplicantCard
            applicantsImage={Userplaceholder}
            applicantsName='Kamaal Abshir'
            applicantsTitle='Front End Developer'
            appliedJob='Senior Front End'
          />
          <RecentApplicantCard
            applicantsImage={Userplaceholder}
            applicantsName='Kamaal Abshir'
            applicantsTitle='Front End Developer'
            appliedJob='Senior Front End'
          />
          <RecentApplicantCard
            applicantsImage={Userplaceholder}
            applicantsName='Kamaal Abshir'
            applicantsTitle='Front End Developer'
            appliedJob='Senior Front End'
          />
        </div>
      </div>
    </div>
  )
}

export default CompanyHome
