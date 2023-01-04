import Button from '@component/Shared/Button'
import { FiEye } from 'react-icons/fi'
import { BsTrash } from 'react-icons/bs'
import AppliedJobCard from '@component/Cards/AppliedJobcard'
import { IAppliedJob } from '@utils/AppliedJobsData'

interface IAppJobs {
  jobs: IAppliedJob[]
}
const AppliedJob: React.FC<IAppJobs> = ({ jobs }): JSX.Element => {
  return (
    <div className='mt-6 overflow-x-auto  rounded-md'>
      <table className='w-full text-left overflow-x-auto'>
        <thead className='bg-whiteBlue h-10 '>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Job Title
            </th>
            <th scope='col' className='px-6 py-3'>
              Date Applied
            </th>
            <th scope='col' className='px-6 py-3'>
              Status
            </th>
            <th scope='col' className='px-6 py-3'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, i) => {
            return (
              <tr className='border-b-2' key={i}>
                <td className='px-6 py-4'>
                  <AppliedJobCard
                    jobTitle={job.jobTitle}
                    companyImage={job.companyImage}
                    companyName={job.companyName}
                    location={job.location}
                  />
                </td>
                <td className='px-6 py-4'>{job.appliedDate}</td>
                <td className='px-6 py-4'>
                  <p
                    className={`${
                      job.status.includes('Active') ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {job.status}
                  </p>
                </td>
                <td>
                  <div className='flex items-center gap-3'>
                    <Button type='button' additionalClasses='!bg-blue-100 ml-6 w-7 h-7 rounded-md'>
                      <FiEye className='text-primaryDark' />
                    </Button>
                    <Button type='button' additionalClasses='!bg-blue-100 w-7 h-7 rounded-md'>
                      <BsTrash className='text-primaryDark' />
                    </Button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AppliedJob
