import { BsBookmark, BsBriefcase } from 'react-icons/bs'
import { SlLocationPin } from 'react-icons/sl'

interface IfeatruedProject {
  jobname: string
  companyName: string
  location: string
  shift: string
  companyImg: string
  status?: string
}
const FeaturedJobCard: React.FC<IfeatruedProject> = ({
  jobname,
  companyImg,
  companyName,
  location,
  shift,
  status
}): React.ReactElement => {
  return (
    <div className='flex flex-col items-start justify-center relative bg-white border hover:bg-whiteBlue h-[180px] w-full rounded-md cursor-pointer transition-all duration-300 ease-in-out p-5'>
      <div className='flex items-center justify-start gap-5'>
        <div className='flex w-14 h-14 rounded-full overflow-hidden'>
          <img
            src={companyImg}
            alt={companyName}
            className='w-full h-full object-cover object-center'
          />
        </div>
        <div>
          <h3 className='text-lg font-semibold'>{jobname}</h3>
          <div className='flex items-center justify-start gap-3 mt-1'>
            <div className='flex items-center justify-start gap-2'>
              <BsBriefcase /> <p className='text-sm'>{companyName}</p>
            </div>
            <div className='flex items-center justify-start gap-2'>
              <SlLocationPin />
              <p className='text-sm'>{location}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-start gap-3 w-full mt-6'>
        {status != null && (
          <div className='rounded-full px-4 text-sm py-1 bg-orange-100'>{status}</div>
        )}
        <div className='rounded-full px-4 text-sm py-1 bg-blue-100'>{shift}</div>
      </div>
      <BsBookmark className='absolute top-4 right-4' />
    </div>
  )
}

export default FeaturedJobCard
