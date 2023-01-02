import CTA from '@assets/misc/cta.png'
import Button from '@component/Shared/Button'
import { useNavigate } from 'react-router-dom'
const CallToAction = (): React.ReactElement => {
  const navigate = useNavigate()
  return (
    <section className='relative w-full mt-24 flex items-center justify-center h-[450px]'>
      <img
        src={CTA}
        alt='Call to action'
        className='absolute top-0 w-full h-full object-cover object-center'
      />
      <div className='section relative z-10 h-full '>
        <div className='container flex flex-col items-center justify-center h-full'>
          <h2 className='text-2xl sm:text-3xl font-semibold text-white text-center'>
            Make a Difference with Your Online Resume!
          </h2>
          <p className='text-white text-center'>
            Your resume in minutes with Somjobs resume assistant is ready!
          </p>
          <Button
            type='button'
            additionalClasses='!bg-white  !text-primaryDark rounded-md py-2 px-5 mt-7'
            handleClick={() => navigate('/register')}
          >
            Create an Account
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
