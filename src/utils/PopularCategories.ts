import accounting from '@assets/categories/money.svg'
import marketing from '@assets/categories/marketing.png'
import desing from '@assets/categories/design.svg'
import development from '@assets/categories/dev.svg'
import project from '@assets/categories/project.png'
import customer from '@assets/categories/customer.png'
import health from '@assets/categories/health.svg'
import car from '@assets/categories/car.png'

interface Category {
  name: string
  jobs: string
  imgSrc: string
}

const PopularCategories: Category[] = [
  {
    name: 'Accounting / Finance',
    jobs: '2',
    imgSrc: accounting
  },
  {
    name: 'Marketing',
    jobs: '2',
    imgSrc: marketing
  },
  {
    name: 'Design',
    jobs: '43',
    imgSrc: desing
  },
  {
    name: 'Development',
    jobs: '12',
    imgSrc: development
  },
  {
    name: 'Project Management',
    jobs: '19',
    imgSrc: project
  },
  {
    name: 'Customer Service',
    jobs: '72',
    imgSrc: customer
  },
  {
    name: 'Health and Care',
    jobs: '25',
    imgSrc: health
  },
  {
    name: 'Automotive Jobs',
    jobs: '92',
    imgSrc: car
  }
]

export default PopularCategories
