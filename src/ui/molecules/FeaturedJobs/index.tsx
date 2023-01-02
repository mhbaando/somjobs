import FeaturedJobCard from '@component/Cards/FeaturedJob'
import Title from '@component/Title'
import Button from '@component/Shared/Button'
import FeaturedJobsList from '@utils/FeaturedJobsList'
import React from 'react'

const FeaturedJobs = (): React.ReactElement => {
  return (
    <section className='section mt-24'>
      <div className='max-w-6xl mx-auto'>
        <Title
          heading='Featured Jobs'
          desc='Know your worth and find the job that qualify your life'
        />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
          {FeaturedJobsList.map((job, i) => {
            return (
              <FeaturedJobCard
                jobname={job.jobname}
                companyImg={job.companyImg}
                companyName={job.companyName}
                location={job.location}
                key={i}
                shift={job.shift}
                status={job.status}
              />
            )
          })}
        </div>
        <div className='flex items-center justify-center w-full mt-12'>
          <Button type='button' additionalClasses='px-3 py-2 rounded-md '>
            Load More Listing
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedJobs
