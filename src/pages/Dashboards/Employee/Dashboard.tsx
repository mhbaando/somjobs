import React, { useState } from 'react'
import DarkNav from '@component/Shared/Nav/Nav'
import { Link, Outlet, useLocation } from 'react-router-dom'
import EmployeeDashboardLink from '@utils/EmployeeDashboardLink'

const EmployeeDashboard = (): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(true)
  const location = useLocation()

  return (
    <section className='bg-whiteBlue min-h-screen max-w-screen'>
      <DarkNav additionalClass='bg-white !mt-0 pt-3 shadow-sm !fixed top-0 w-full' />
      <div className='w-screen h-full flex'>
        {/* Dashboard */}
        <div className='border max-w-1/3 mr-3 sm:mr-0'>
          <div className='fixed h-screen w-[100px] md:w-[280px] top-0 bg-white shadow-md pt-28'>
            <ul className='px-4 md:px-10 flex items-start gap-2 flex-col'>
              {EmployeeDashboardLink.map((menu) => {
                const isActive = location.pathname === menu.path
                return (
                  <Link
                    to={menu.path}
                    key={menu.name}
                    className={`flex items-center justify-center gap-3 p-4 w-full rounded-md transition-all duration-300 ease-in-out hover:bg-blue-100 hover:!text-primaryBlue ${
                      isActive ? 'bg-blue-100 text-primaryBlue' : ''
                    }`}
                  >
                    {menu.icon}
                    <li
                      className={`hidden tex-sm md:inline-block text-md text-garyish hover:text-primaryBlue w-full transition-all duration-300 ease-in-out ${
                        isActive ? '!text-primaryBlue' : ''
                      }`}
                    >
                      {menu.name}
                    </li>
                  </Link>
                )
              })}
            </ul>
          </div>
        </div>
        {/* Render Darshboard */}
        <div className='p-6 w-full ml-[100px] md:ml-[300px] mt-20 col-span-4 mr-5 bg-whiteBlue'>
          <Outlet />
        </div>
      </div>
    </section>
  )
}

export default EmployeeDashboard
