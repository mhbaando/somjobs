import Button from '@component/Shared/Button'
import Menus from '@utils/MenuLinks'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

interface IMobileNav {
  isMenuOpen: boolean
  setIsMenuOpen: (isMenuOpen: boolean) => void
}
const MobileNav: React.FC<IMobileNav> = ({ isMenuOpen, setIsMenuOpen }): React.ReactElement => {
  const navigate = useNavigate()

  const parent = {
    hidden: { opacity: 0, x: '100%' },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        easing: 'easeInOut',
        duration: 0.3
      }
    }
  }
  const child = {
    hidden: { y: -50, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  return (
    <div className='md:hidden'>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className='absolute w-screen h-screen bg-overlay origin-right z-40'
            key='overlay'
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 0.5, scaleX: 1, visibility: 'visible' }}
            exit={{ opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          ></motion.div>
        )}

        {isMenuOpen && (
          <motion.section
            className='w-full max-w-[250px] h-[250px] rounded-md bg-whiteBlue absolute m-auto left-0 right-0 top-32 flex flex-col overflow-hidden z-50'
            key='menus'
            variants={parent}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <motion.ul variants={parent} className='w-full flex flex-col'>
              {Menus.map((menu) => (
                <Link key={menu.path} to={menu.path} onClick={() => setIsMenuOpen(false)}>
                  <motion.li
                    variants={child}
                    onClick={() => setIsMenuOpen(false)}
                    className='w-full px-3 py-4 hover:bg-primaryDark origin-top hover:text-white cursor-pointer'
                  >
                    {menu.name}
                  </motion.li>
                </Link>
              ))}
            </motion.ul>
            <Button
              type='button'
              additionalClasses='text-sm py-3 px-6 rounded-lg mx-3 mt-5 sm:inline-block'
              handleClick={() => {
                setIsMenuOpen(false)
                navigate('/login')
              }}
            >
              Sign In
            </Button>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileNav
