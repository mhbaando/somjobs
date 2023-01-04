import AppliedJob from '@component/Employee/AppliedJob'
import DashboarHeading from '@component/Shared/DashboardHeading'
import Pagination from '@component/Shared/Pagination'
import usePagination from '@hooks/pagination'
import appliedJobsData from '@utils/AppliedJobsData'

const AppliedJobs = (): JSX.Element => {
  const itemsPerPage = 10
  const { firstItem, lastItem, paginate, currentPage } = usePagination({ itemsPerPage })

  return (
    <div>
      <DashboarHeading heading='Applied' headingBold='Jobs' />
      <div className='bg-white rounded-md mt-12 w-full p-5'>
        <div className='flex items-center justify-between'>
          <h3 className='font-semibold'>My Applied Jobs</h3>
        </div>
        <div className='w-full overflow-hidden'>
          <AppliedJob jobs={appliedJobsData.slice(firstItem, lastItem)} />
        </div>
        <div className='mt-10'>
          <Pagination
            totalPages={appliedJobsData.length}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  )
}

export default AppliedJobs
