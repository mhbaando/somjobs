import PostJobForm from '@component/Company/PostJobForm'
import DashboarHeading from '@component/Shared/DashboardHeading'

const PostJob = (): JSX.Element => {
  return (
    <section>
      <DashboarHeading heading='Post a new' headingBold='job' />
      <div className='w-full bg-white rounded-md p-5 my-12'>
        <PostJobForm />
      </div>
    </section>
  )
}

export default PostJob
