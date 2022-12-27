import CategoryCard from '@/components/Cards/Categories'
import Title from '@/components/Title'
import PopularCategories from '@/utils/PopularCategories'
import React from 'react'

const Categories = (): React.ReactElement => {
  return (
    <section className='section mt-24'>
      <div className='max-w-6xl mx-auto'>
        <Title heading='Popular Job Categories' desc='2020 jobs live - 293 added today.' />
        <div className='grid grid-cols-1 sm:gri-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12 gap-5'>
          {PopularCategories.map((cat) => {
            return (
              <CategoryCard key={cat.name} name={cat.name} jobs={cat.jobs} imgSrc={cat.imgSrc} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Categories
