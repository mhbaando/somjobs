import { AiFillCheckCircle } from 'react-icons/ai'
import ads from '@assets/misc/ads.png'
import Button from '@component/Shared/Button'
const AdForCompany = (): React.ReactElement => {
  return (
    <section className='section mt-24'>
      <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
        <div>
          <img src={ads} alt='Adverstisment' />
        </div>
        <div>
          <h1 className='text-4xl mb-5 '>Get applications from the world best talents.</h1>
          <p className='text-lg'>
            Capitalize on low hanging fruit to identify a ballpark value added activity to beta
            test. Override the digital divide with additional clickthroughs from DevOps.
          </p>
          <ul>
            <li className='flex items-center justify-star gap-2 my-2 text-md'>
              <span>
                <AiFillCheckCircle className='text-primaryBlue' />
              </span>{' '}
              Bring to the table win-win survival
            </li>
            <li className='flex items-center justify-star gap-2 my-2 text-md'>
              <span>
                <AiFillCheckCircle className='text-primaryBlue' />
              </span>{' '}
              Capitalize on low hanging fruit to identify
            </li>
            <li className='flex items-center justify-star gap-2 my-2 text-md'>
              <span>
                <AiFillCheckCircle className='text-primaryBlue' />
              </span>{' '}
              But I must explain to you how all this
            </li>
          </ul>
          <Button type='button' additionalClasses='px-4 py-2 rounded-lg mt-5 mb-12'>
            Post A Job
          </Button>
        </div>
      </div>
    </section>
  )
}

export default AdForCompany
