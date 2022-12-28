import Somtel from '@/assets/clients/somtel.jpg'
import hormuud from '@/assets/clients/hormuud.png'
import premier from '@/assets/clients/premier.png'

interface Featuredjob {
  jobname: string
  companyName: string
  location: string
  shift: string
  companyImg: string
  status?: string
}

const FeaturedJobsList: Featuredjob[] = [
  {
    jobname: 'Software Engineer',
    companyName: 'Somtel',
    location: 'Mogadishu SO',
    shift: 'Full Time',
    companyImg: Somtel,
    status: 'Urgent'
  },
  {
    jobname: 'Accountant',
    companyName: 'Hormuud',
    location: 'Baydhabo SO',
    shift: 'Contract',
    companyImg: hormuud
  },
  {
    jobname: 'Cashier',
    companyName: 'PremierBank',
    location: 'Hargeisa SO',
    shift: 'Part Time',
    companyImg: premier
  },
  {
    jobname: 'Cleaner',
    companyName: 'Dahabshil',
    location: 'Growe SO',
    shift: 'Full Time',
    companyImg: Somtel,
    status: 'Urgent'
  },
  {
    jobname: 'Customer Support',
    companyName: 'Hormuud',
    location: 'Mogadishu SO',
    shift: 'Contract',
    companyImg: hormuud
  },
  {
    jobname: 'Tellecome Engineer',
    companyName: 'Hormuud',
    location: 'Baardheere SO',
    shift: 'Contract',
    companyImg: hormuud
  }
]

export default FeaturedJobsList
