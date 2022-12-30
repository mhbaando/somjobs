import { Link } from 'react-router-dom'

import Bg from '@assets/auth/bg.png'
import Logo from '@assets/logo/LogoColor.svg'
import RegisterForm from '@component/auth/Register'

const Register = (): React.ReactElement => {
  return (
    <section className='flex w-full justify-start items-center h-screen overflow-hidden bg-whiteBlue relative gap-10 '>
      <div className='section max-w-6xl mx-auto w-full'>
        {/* Logo */}
        <Link to='/'>
          <img
            src={Logo}
            alt='Logo white '
            className='flex absolute top-5 left-7 w-24 cursor-pointer'
          />
        </Link>
        <img src={Bg} alt='' className='flex absolute top-0 left-0 w-screen h-screen z-0' />
        <RegisterForm />
      </div>
    </section>
  )
}

export default Register
