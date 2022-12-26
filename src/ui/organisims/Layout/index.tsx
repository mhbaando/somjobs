import Footer from '@/ui/molecules/Footer/Footer'
import Header from '@/ui/molecules/Header'

interface ILayout {
  children: React.ReactElement[] | JSX.Element
}
// eslint-disable-next-line react/prop-types
const Layout: React.FC<ILayout> = ({ children }): React.ReactElement => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
