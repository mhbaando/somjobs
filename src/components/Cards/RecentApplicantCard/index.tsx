import React from 'react'
import { BiUser } from 'react-icons/bi'
import { BsBriefcase } from 'react-icons/bs'

interface IRecentApplicantCard {
  appliedJob: string
  applicantsName: string
  applicantsImage: string
  applicantsTitle: string
}
const RecentApplicantCard: React.FC<IRecentApplicantCard> = ({
  appliedJob,
  applicantsImage,
  applicantsName,
  applicantsTitle
}): JSX.Element => {
  return (
    <div className='flex items-center gap-3 bg-white rounded-md h-28 px-5 hover:bg-blue-100 duration-300 ease-in-out transition-all cursor-pointer'>
      <div className='w-20 md:w-11 rounded-md overflow-hidden'>
        <img
          src={applicantsImage}
          alt='Primer Bank'
          className='w-11 h-11 object-cover object-center'
        />
      </div>
      <div>
        <h3 className='text-sm md:font-semibold md:text-xl'>{applicantsName}</h3>
        <div className='flex flex-col gap-1 items-start lg:gap-5 lg:flex-row'>
          <div className='flex items-center gap-1  text-garyish'>
            <BiUser />
            <p className='text-sm font-semibold'>{applicantsTitle}</p>
          </div>
          <div className='flex items-start  md:items-center gap-1  text-garyish'>
            <BsBriefcase />
            <p className='text-sm font-semibold'>Applied: {appliedJob}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentApplicantCard
