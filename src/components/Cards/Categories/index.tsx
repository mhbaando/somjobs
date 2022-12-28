import React from 'react'
interface ICategoryCard {
  name: string
  jobs: string
  imgSrc: string
}
const CategoryCard: React.FC<ICategoryCard> = ({ name, jobs, imgSrc }): React.ReactElement => {
  return (
    <div className='flex flex-col items-center justify-center bg-white border hover:bg-whiteBlue hover:shadow-md transition-all duration-300 ease-in-out rounded-md h-[240px] cursor-pointer'>
      <div className='flex w-16 h-16 bg-blue-100 rounded-full items-center justify-center '>
        <img src={imgSrc} alt={name} />
      </div>
      <h3 className='text-lg font-semibold mt-3'>{name}</h3>
      <p className='text-sm text-gray-500 '>({jobs} open positions)</p>
    </div>
  )
}

export default CategoryCard
