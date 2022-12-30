import JobCard from '@component/Cards/jobscard'
import DarkNav from '@component/Nav/Nav'
import Pagination from '@component/Pagination'
import JobFilters from '@component/jobs/Filters'
import Hero from '@component/jobs/Hero'
import FeaturedJobsList from '@utils/FeaturedJobsList'
import Footer from '@ui/molecules/Footer/Footer'
import usePagination from '@hooks/pagination'

const Jobs = (): React.ReactElement => {
  const itemsPerPage = 2
  const { currentPage, firstItem, lastItem, paginate } = usePagination({
    itemsPerPage
  })
  return (
    <>
      <DarkNav additionalClass='!bg-white' />
      <Hero />
      <section className='section mb-12'>
        <div className='max-w-5xl mx-auto'>
          <JobFilters />
          <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-12'>
              {FeaturedJobsList.slice(firstItem, lastItem).map((job, i) => (
                <JobCard
                  key={i}
                  companyImage={job.companyImg}
                  companyName={job.companyName}
                  location={job.location}
                  jobName={job.jobname}
                  postedDate='30/12/2022'
                  shift={job.shift}
                  status={job.status}
                />
              ))}
            </div>
            <Pagination
              itemsPerPage={itemsPerPage}
              totalPages={FeaturedJobsList.length}
              currentPage={currentPage}
              paginate={paginate}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Jobs
