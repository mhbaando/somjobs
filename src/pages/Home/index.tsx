import Categories from '@/ui/molecules/Categories'
import Clients from '@/ui/molecules/clients/Index'
import Layout from '@/ui/organisims/Layout'

const Home = (): React.ReactElement => {
  return (
    <Layout>
      <Clients />
      <Categories />
    </Layout>
  )
}
export default Home
