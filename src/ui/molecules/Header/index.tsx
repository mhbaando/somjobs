import Hero from '@component/Hero/Hero'
import DarkNav from '@component/Nav/Nav'

const Header = (): React.ReactElement => {
  // TODO: render dark nav only on home page
  return (
    <>
      <Hero />
    </>
  )
}

export default Header
