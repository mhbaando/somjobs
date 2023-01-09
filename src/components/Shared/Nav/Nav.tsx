/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

import Menus from '@utils/MenuLinks'
import Logo from '@assets/logo/LogoColor.svg'
import Button from '@component/Shared/Button'
import MobileNav from './MobileNav'
import useAuth from '@hooks/auth'
interface Nav {
  additionalClass?: string
}
const DarkNav: React.FC<Nav> = ({ additionalClass }): React.ReactElement => {
  const auth = useAuth()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // disable scroll when the side menue is open
  useEffect(() => {
    const body = document.querySelector('body')
    if (isMenuOpen) {
      body?.classList.add('overflow-hidden')
    }

    return () => {
      body?.classList.remove('overflow-hidden')
    }
  }, [isMenuOpen])

  return (
    <>
      <nav className={`bg-gradient-to-b relative z-10 mt-3 ${additionalClass}`}>
        <div className='flex items-center px-5 py-3 md:px-10 justify-between max-w-screen-xl mx-auto'>
          <div className='flex items-center justify-start gap-10'>
            <img
              src={Logo}
              alt='SomJobs Logo'
              width={130}
              className='cursor-pointer'
              onClick={() => navigate('/')}
            />

            <div className='hidden md:inline-block'>
              <ul className='flex items-center justify-between gap-4'>
                {Menus.map((menu) => {
                  return (
                    <li key={menu.name} className='text-md text-black  menu'>
                      <NavLink to={menu.path}>{menu.name}</NavLink>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className='flex items-center gap-5'>
            {auth.user?.role && (
              <Link
                to={auth.user.role === 'employee' ? '/employee' : '/company'}
                className='cursor-pointer scale-100 hover:scale-95 hover:text-primaryBlue transition-all duration-300 ease-in-out'
              >
                Dashboard
              </Link>
            )}
            <Button
              type='button'
              additionalClasses='text-sm py-2 px-6 rounded-lg hidden sm:inline-block'
              handleClick={() => {
                if (auth.user?.role) {
                  auth.logout()
                  navigate('/')
                } else {
                  navigate('/login')
                }
              }}
            >
              {auth.user?.role ? 'Sign Out' : 'Sign In'}
            </Button>
            <HiOutlineMenuAlt3
              className='text-2xl text-primaryDark cursor-pointer md:hidden'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </nav>
      <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  )
}

export default DarkNav
