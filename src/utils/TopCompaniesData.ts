import Somtel from '@/assets/clients/somtel.jpg'
import hormuud from '@/assets/clients/hormuud.png'
import premier from '@/assets/clients/premier.png'
import cadaani from '@/assets/misc/cadaani.png'

interface TopCompayData {
  name: string
  imgSrc: string
  jobsOpen: number
  location: string
}

const TopCompaniesData: TopCompayData[] = [
  {
    name: 'Hormuud',
    imgSrc: hormuud,
    jobsOpen: 35,
    location: 'Mogadishu So'
  },
  {
    name: 'Premier Bank',
    imgSrc: premier,
    jobsOpen: 25,
    location: 'Mogadishu So'
  },
  {
    name: 'Somtel',
    imgSrc: Somtel,
    jobsOpen: 23,
    location: 'Mogadishu So'
  },
  {
    name: 'Cadaani Restuarent',
    imgSrc: cadaani,
    jobsOpen: 15,
    location: 'Mogadishu So'
  }
]

export default TopCompaniesData
