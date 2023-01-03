import React from 'react'

interface IDashboardHeading {
  heading: string
  subHeading?: string
  headingBold?: string
}
const DashboarHeading: React.FC<IDashboardHeading> = ({
  heading,
  headingBold,
  subHeading = 'Ready to jump back in?'
}): JSX.Element => {
  return (
    <div className='flex flex-col w-full'>
      <h3 className='text-xl'>
        {heading} <span className='font-bold'>{headingBold}</span>
      </h3>
      <span className='text-sm text-garyish'>{subHeading}</span>
    </div>
  )
}

export default DashboarHeading
