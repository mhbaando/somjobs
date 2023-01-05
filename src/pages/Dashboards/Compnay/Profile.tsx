import UserInfoForm from '@component/Shared/UserInfoForm'
import DashboarHeading from '@component/Shared/DashboardHeading'
import CompanyInfo from '@component/Company/CompanyInfo'

const CompanyProfile = (): JSX.Element => {
  return (
    <section className='flex flex-col w-full h-full'>
      <DashboarHeading heading='My Profile' />
      <div className='w-full h-full mt-5 bg-white rounded-md p-5'>
        <UserInfoForm />
        <hr className='my-12' />
        <CompanyInfo />
      </div>
    </section>
  )
}

export default CompanyProfile
