import NotFoundImg from '@assets/misc/404.png'
import Button from '@component/Shared/Button'
import { useNavigate } from 'react-router-dom'

const NotFound = (): JSX.Element => {
  const navigate = useNavigate()
  return (
    <section className='w-screen h-screen  bg-whiteBlue overflow-hidden'>
      <div className='w-full h-full flex flex-col items-center justify-between relative bg-transparent'>
        <h3 className='z-10 text-3xl font-semibold mt-20'>404 Not Found</h3>
        <Button
          type='button'
          handleClick={() => navigate('/')}
          additionalClasses='px-5 py-2 rounded-md z-10 mb-20 mt-5'
        >
          Go Home
        </Button>
        <img
          src={NotFoundImg}
          alt='404 Image'
          className='w-full h-full absolute object-cover object-center top-0 left-0'
        />
      </div>
    </section>
  )
}

export default NotFound
