import UserInfoForm from '@component/Employee/UserInfoForm'
import DashboarHeading from '@component/Shared/DashboardHeading'

const EmployeeProfile = (): JSX.Element => {
  return (
    <section className='flex flex-col w-full h-full'>
      <DashboarHeading heading='My Profile' />
      <div className='w-full h-full mt-5 bg-white rounded-md p-5'>
        <UserInfoForm />
      </div>
    </section>
  )
}

export default EmployeeProfile
