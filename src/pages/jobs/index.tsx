import JobsCard from '@component/Cards/jobscard'
import DarkNav from '@component/Nav/Nav'
import JobFilters from '@component/jobs/Filters'
import Hero from '@component/jobs/Hero'

const Jobs = (): React.ReactElement => {
  return (
    <>
      <DarkNav additionalClass='!bg-white' />
      <Hero />
      <section className='section'>
        <div className='max-w-6xl mx-auto'>
          <JobFilters />
          <JobsCard />
        </div>
      </section>
    </>
  )
}

export default Jobs
