import { GiSandsOfTime, GiMoneyStack } from 'react-icons/gi'
import { SlLocationPin } from 'react-icons/sl'
import { MdOutlineTimelapse } from 'react-icons/md'
import { BsBookmark, BsBriefcase, BsCalendarDate } from 'react-icons/bs'

import DarkNav from '@component/Shared/Nav/Nav'

import placeholder from '@assets/misc/cta.png'
import Somtel from '@assets/clients/premier.png'
import Button from '@component/Shared/Button'
import Footer from '@ui/molecules/Footer/Footer'
import JobHeader from '@component/jobs/JobHeader'
import JobCard from '@component/Cards/jobscard'

const Job = (): JSX.Element => {
  return (
    <section className='flex justify-between flex-col  w-full bg-whiteBlue'>
      <DarkNav additionalClass='!mt-0 pt-3' />
      <section className='section w-full h-full mt-12'>
        <div className='max-w-5xl mx-auto'>
          <div className='grid grid-cols-3 gap-5'>
            {/* first Column */}
            <div className='col-span-2'>
              <JobHeader />
              <img
                src={placeholder}
                alt='Job Picture'
                className='w-full h-[350px] mt-12 object-cover object-center rounded-md'
              />
              {/* <div className='html' dangerouslySetInnerHTML={{ __html: cleanHTML(html) }}></div> */}

              {/* Related Jobs */}
              <div className='flex w-full flex-col my-12'>
                <h2 className='text-xl font-semibold mb-6'>Related Jobs</h2>
                <JobCard
                  jobName='Product Designer / UI Designer'
                  companyImage={Somtel}
                  companyName='Somtel'
                  location='Mogadishu SO'
                  postedDate='Today'
                  sallery={2500}
                  shift='Full Time'
                  status='Urgent'
                />
              </div>
            </div>
            {/* Second column */}
            <div>
              <div className='grid grid-cols-6 gap-2 content-start '>
                <Button
                  type='button'
                  additionalClasses='w-full py-3 rounded-lg col-span-5 hover:!bg-blue-600 duration-300 transition-all ease-in-out'
                >
                  Apply Now
                </Button>

                <Button
                  type='button'
                  additionalClasses='!bg-blue-100 hover:!bg-blue-200 duration-300 transition-all ease-in-out w-full py-3 rounded-lg'
                >
                  <BsBookmark className='text-primaryBlue' />
                </Button>
              </div>
              <div className='w-full bg-white rounded-md mt-6 py-3 px-4'>
                <h2 className='text-sm font-semibold'>Job Overview</h2>
                <div className='flex items-start justify-start gap-5 mt-5'>
                  <div>
                    <BsCalendarDate className='text-2xl mt-1 text-primaryBlue' />
                  </div>
                  <div>
                    <h4>Date Posted</h4>
                    <p className='text-[12px]'>Posted 1 hour ago </p>
                  </div>
                </div>
                <div className='flex items-start justify-start gap-5 mt-5'>
                  <div>
                    <GiSandsOfTime className='text-2xl mt-1 text-primaryBlue' />
                  </div>
                  <div>
                    <h4 className=''>Expiration Date</h4>
                    <p className='text-[12px]'>Posted 1 hour ago </p>
                  </div>
                </div>
                <div className='flex items-start justify-start gap-5 mt-5'>
                  <div>
                    <SlLocationPin className='text-2xl mt-1 text-primaryBlue' />
                  </div>
                  <div>
                    <h4 className='font-semibold'>Location</h4>
                    <p className='text-[12px]'>Mogadishu SO</p>
                  </div>
                </div>
                <div className='flex items-start justify-start gap-5 mt-5'>
                  <div>
                    <GiMoneyStack className='text-2xl mt-1 text-primaryBlue' />
                  </div>
                  <div>
                    <h4 className='font-semibold'>Sallery</h4>
                    <p className='text-[12px]'>Not Provided</p>
                  </div>
                </div>
                <div className='flex items-start justify-start gap-5 mt-5'>
                  <div>
                    <BsBriefcase className='text-2xl mt-1 text-primaryBlue' />
                  </div>
                  <div>
                    <h4 className='font-semibold'>Date Posted</h4>
                    <p className='text-[12px]'>Posted 1 hour ago </p>
                  </div>
                </div>
                <div className='flex items-start justify-start gap-5 mt-5'>
                  <div>
                    <MdOutlineTimelapse className='text-2xl mt-1 text-primaryBlue' />
                  </div>
                  <div>
                    <h4 className='font-semibold'>Shift</h4>
                    <p className='text-[12px]'>Full Time </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  )
}

export default Job
