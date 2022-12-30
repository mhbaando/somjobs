import { Link } from 'react-router-dom'
import { BsDash } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'
import { AiFillLinkedin } from 'react-icons/ai'

import Logo from '@assets/logo/LogoColor.svg'
const Footer = (): React.ReactElement => {
  const year = new Date().getFullYear()
  return (
    <section className='flex bg-whiteBlue w-full mt-26'>
      <div className='section max-w-6xl mx-auto mt-16 w-full'>
        <div className='flex items-start justify-between flex-col md:flex-row gap-10'>
          {/* logo footer */}
          <div className='w-full mb-12 md:mb-0 md:max-w-[340px] '>
            <img src={Logo} alt='Somjobs Logo' />
            <p className='text-lg font-semibold pt-5 pb-2'>
              The home of jobs and job seekers, apply now, to get your chance to win
            </p>
            <p className='text-gray-500'>
              The &quot;objects are not valid as a react child&quot; error is thrown when you try to
              pass an object directly to a React component as a prop or child. .
            </p>
          </div>
          {/* quick links */}
          <div className='grid grid-cols-2 md:grid-cols-3 gap-10 flex-2'>
            {/* for candidates */}
            <div className='flex flex-col items-start justify-between h-[200px] '>
              <h3 className='text-lg font-semibold'>For Candidates</h3>
              <Link to='/' className='text-gray-500'>
                Browse Jobs
              </Link>
              <Link to='/' className='flex items-center gap-2 text-gray-500'>
                <BsDash className='w-5 text-primaryDark  hidden lg:inline-block' />
                Browse Categories
              </Link>
              <Link to='/' className='text-gray-500'>
                Candidate Dashboard
              </Link>
              <Link to='/' className='text-gray-500'>
                My Bookmarks
              </Link>
            </div>

            {/* for candidates */}
            <div className='flex flex-col items-start justify-between h-[200px] '>
              <h3 className='text-lg font-semibold'>For Employers</h3>
              <Link to='/' className='text-gray-500'>
                Browse Candidate
              </Link>
              <Link to='/' className='flex items-center gap-2 text-gray-500'>
                Employer Dashboard
              </Link>
              <Link to='/' className='text-gray-500'>
                Add Jobs
              </Link>
              <Link to='/' className='text-gray-500'>
                Job Packages
              </Link>
            </div>

            {/* Help Full resource */}
            <div className='flex flex-col items-start justify-between h-[230px] '>
              <h3 className='text-lg font-semibold'>Helpful Resources</h3>
              <Link to='/' className='text-gray-500'>
                Site Map
              </Link>
              <Link to='/' className='flex items-center gap-2 text-gray-500'>
                Terms of Use
              </Link>
              <Link to='/' className='text-gray-500'>
                Privary Center
              </Link>
              <Link to='/' className='text-gray-500'>
                Security Center
              </Link>
              <Link to='/' className='text-gray-500'>
                Accessiblity Center
              </Link>
            </div>
          </div>
        </div>

        {/* copright */}
        <hr className='mt-10 mb-3' />
        <div className='flex flex-col sm:flex-row gap-5 mb-5 items-center justify-between '>
          <p className='text-gray-500 text-sm'>© {year} SomJobs. All Right Reserved.</p>
          <div className='flex items-center gap-2'>
            <Link
              to='/'
              className='w-7 h-7 hover:bg-blue-100 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out'
            >
              <FaFacebookF className='text-gray-500 text-sm' />
            </Link>
            <Link
              to='/'
              className='w-7 h-7 hover:bg-blue-100 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out'
            >
              <IoLogoTwitter className='text-gray-500 text-sm' />
            </Link>
            <Link
              to='/'
              className='w-7 h-7 hover:bg-blue-100 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out'
            >
              <AiFillLinkedin className='text-gray-500 text-sm' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Footer
