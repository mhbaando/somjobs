import { Link } from 'react-router-dom'
import LoginForm from '@component/auth/Login'

import Bg from '@assets/auth/bg.png'
import Logo from '@assets/logo/LogoColor.svg'

const Login = (): React.ReactElement => {
  return (
    <section className='flex w-full justify-start items-center h-screen overflow-hidden bg-whiteBlue relative gap-10 '>
      <div className='section max-w-6xl mx-auto w-full'>
        {/* Logo */}
        <Link to='/'>
          <img src={Logo} alt='Logo white ' className='flex absolute top-5 left-7 w-24' />
        </Link>
        <img src={Bg} alt='' className='flex absolute top-0 left-0 w-screen h-screen z-0' />
        <LoginForm />
      </div>
    </section>
  )
}

export default Login
