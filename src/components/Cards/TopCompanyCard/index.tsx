import { SlLocationPin } from 'react-icons/sl'
import Button from '@/shared/components/Button'

interface TopCompany {
  name: string
  imgSrc: string
  jobsOpen: number
  location: string
}

const TopCompanyCard: React.FC<TopCompany> = ({
  name,
  imgSrc,
  jobsOpen,
  location
}): React.ReactElement => {
  return (
    <div className='flex flex-col items-center justify-center h-[250px] w-full border rounded-md hover:bg-whiteBlue transition-all duration-300 ease-in-out hover:shadow-md'>
      <div className='w-16 h-16 rounded-full overflow-hidden'>
        <img src={imgSrc} alt={name} className='w-full h-full object-cover object-center' />
      </div>
      <div className='mt-5 flex items-center flex-col'>
        <h3 className='text-xl font-semibold'>{name}</h3>
        <p className='text-m text-gray-400 flex items-center gap-2 mt-1 mb-2'>
          <SlLocationPin />
          <span>{location}</span>
        </p>
      </div>
      <Button
        type='button'
        additionalClasses='!bg-blue-100 text-primaryBlue  px-4 py-3 rounded-md mt-5 text-sm hover:!bg-primaryBlue hover:text-white transition-all duration-300 ease-in-out'
      >
        {jobsOpen} Open Postion
      </Button>
    </div>
  )
}

export default TopCompanyCard
