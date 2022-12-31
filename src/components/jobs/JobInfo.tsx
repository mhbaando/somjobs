/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Formatter from '@utils/Formatter'
import React from 'react'
import { BsBriefcase, BsClockHistory, BsCashCoin } from 'react-icons/bs'
import { SlLocationPin } from 'react-icons/sl'

interface IJobInfo {
  companyName: string
  location: string
  postedDate: string
  sallery?: number
  shift: string
  status?: string
}
const JobInfo: React.FC<IJobInfo> = ({
  companyName,
  location,
  postedDate,
  sallery,
  shift,
  status
}): JSX.Element => {
  return (
    <>
      <div className='flex items-center justify-start gap-3 flex-wrap my-3'>
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
      <div className='flex items-center justify-start gap-3 flex-wrap'>
        <div className='px-5 py-1 bg-blue-100 rounded-full text-sm'>{shift}</div>
        <div className='px-5 py-1 bg-orange-100 rounded-full text-sm'>{status}</div>
      </div>
    </>
  )
}

export default JobInfo
