import AdForCompany from '@ui/molecules/AdForCompany'
import CallToAction from '@ui/molecules/CallToAction'
import Categories from '@ui/molecules/Categories'
import FeaturedJobs from '@ui/molecules/FeaturedJobs'
import TopCompany from '@ui/molecules/TopCompanies'
import Clients from '@ui/molecules/clients/Index'
import Layout from '@ui/organisims/Layout'

const Home = (): React.ReactElement => {
  return (
    <Layout>
      <Clients />
      <Categories />
      <FeaturedJobs />
      <CallToAction />
      <TopCompany />
      <AdForCompany />
    </Layout>
  )
}
export default Home
