import { BsBriefcase } from 'react-icons/bs'
import { SlLocationPin } from 'react-icons/sl'

import PremierBank from '@assets/clients/premier.png'

interface IAppliedJobCard {
  jobTitle: string
  companyName: string
  companyImage: string
  location: string
}
const AppliedJobCard: React.FC<IAppliedJobCard> = ({
  jobTitle,
  companyImage,
  companyName,
  location
}): JSX.Element => {
  return (
    <div className='flex items-center gap-3'>
      <div className='w-20 md:w-11 rounded-md overflow-hidden'>
        <img
          src={companyImage}
          alt='Primer Bank'
          className='w-11 h-11 object-cover object-center'
        />
      </div>
      <div>
        <h3 className='text-sm md:font-semibold'>{jobTitle}</h3>
        <div className='flex flex-col gap-0 items-start md:gap-5 md:flex-row'>
          <div className='flex items-center gap-3  text-garyish'>
            <BsBriefcase />
            <p className='text-sm'>{companyName}</p>
          </div>
          <div className='flex items-center gap-3  text-garyish'>
            <SlLocationPin />
            <p className='text-sm'>{location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppliedJobCard
