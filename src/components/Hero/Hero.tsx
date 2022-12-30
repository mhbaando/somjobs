import { BiSearchAlt } from 'react-icons/bi'
import { TiLocationOutline } from 'react-icons/ti'

import DarkNav from '../Nav/Nav'
import HeroImage from '@assets/logo/hero.png'
import Button from '@shared/components/Button'
import { useLocation } from 'react-router-dom'

const Hero = (): React.ReactElement => {
  // get curretn path
  const location = useLocation()

  return (
    <div className='relative w-full h-full z-10'>
      <DarkNav />
      {/* render only on the home page */}
      {location.pathname === '/' && (
        <div className='section mt-10'>
          <div className='flex flex-col items-start justify-center bg-whiteBlue w-full h-[500px] rounded-md max-w-7xl mx-auto relative overflow-hidden p-5 md:p-10'>
            <img
              src={HeroImage}
              alt='Hero bg'
              className='flex absolute right-0 top-0 w-full h-full object-cover '
            />

            {/* title */}
            <div className='flex items-start justify-center flex-col z-10'>
              <h2 className='text-3xl font-semibold max-w-[300px]'>
                Join Us & Explore Thousands of Jobs
              </h2>
              <p className='text-sm'>Find Jobs, Employment & Career Opportunities</p>
            </div>

            {/* search form */}
            <form className='flex flex-col md:flex-row items-start md:items-center justify-between gap-2 bg-white px-3 rounded-md  w-full md:w-1/2 z-10 mt-5 py-5 md:py-2'>
              <div className='relative flex items-start flex-col w-full md:flex-1'>
                <h3 className='px-2 font-semibold'>What</h3>
                <input
                  type='text'
                  placeholder='Job title, keywords, or company'
                  className='w-full p-2 pr-10 border-none focus:ring-0 !outline-none font-Nunito'
                />
                <BiSearchAlt className='absolute right-2 text-2xl top-8' />
              </div>
              <div className='relative flex items-start flex-col w-full md:flex-1'>
                <h3 className='px-2 font-semibold'>What</h3>
                <input
                  type='text'
                  placeholder='City or Postcode'
                  className='w-full p-2 pr-10 border-none focus:ring-0 !outline-none font-Nunito'
                />
                <TiLocationOutline className='absolute right-2 text-2xl top-8 ' />
              </div>
              <Button
                type='button'
                additionalClasses=' px-3 py-2 rounded-md cursor-pointer w-full md:w-auto'
                handleClick={() => console.log('click')}
              >
                Find Jobs
              </Button>
            </form>
            <p className='text-sm mt-3 text-gray-400 z-10'>
              Popular Searches : Designer, Developer, Web, IOS, PHP, Senior, Engineer
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Hero
