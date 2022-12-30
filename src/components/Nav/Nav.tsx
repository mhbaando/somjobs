import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

import Menus from '@utils/MenuLinks'
import Logo from '@assets/logo/LogoColor.svg'
import Button from '@shared/components/Button'
import MobileNav from './MobileNav'
interface Nav {
  additionalClass?: string
}
const DarkNav: React.FC<Nav> = ({ additionalClass }): React.ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

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
            <Button
              type='button'
              additionalClasses='text-sm py-2 px-6 rounded-lg hidden sm:inline-block'
              handleClick={() => navigate('/login')}
            >
              Sign In
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
