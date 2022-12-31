import React from 'react'
import JobInfo from './JobInfo'

interface IJobHeader {
  additionalClasses?: string
}
const JobHeader: React.FC<IJobHeader> = ({ additionalClasses }): JSX.Element => {
  return (
    <div className={`flex flex-col w-full ${additionalClasses}`}>
      <h3 className='text-2xl font-semibold'>Product Designer / UI Designer</h3>
      <div>
        {/* <JobInfo
          companyName='Hormuud'
          location='Mogadishu SO'
          postedDate='ToDay'
          shift='Full Time'
          status='urgent'
        /> */}
      </div>
    </div>
  )
}

export default JobHeader
