import PremierBank from '@assets/clients/premier.png'

export interface IAppliedJob {
  jobTitle: string
  appliedDate: string
  status: string
  companyName: string
  location: string
  companyImage: string
}

const appliedJobsData: IAppliedJob[] = [
  {
    jobTitle: 'Senior Full Stack Engineer, Creator Success',
    appliedDate: 'Nov 4, 2022',
    status: 'Active',
    companyName: 'PrimierBank',
    location: 'Mogadishu SO',
    companyImage: PremierBank
  },
  {
    jobTitle: 'Senior Full Stack Engineer, Creator Success',
    appliedDate: 'Feb 5, 2020',
    status: 'Expired',
    companyName: 'PrimierBank',
    location: 'Mogadishu SO',
    companyImage: PremierBank
  },
  {
    jobTitle: 'Senior Full Stack Engineer, Creator Success',
    appliedDate: 'May 4, 2019',
    status: 'Active',
    companyName: 'PrimierBank',
    location: 'Mogadishu SO',
    companyImage: PremierBank
  },
  {
    jobTitle: 'Senior Full Stack Engineer, Creator Success',
    appliedDate: 'Dec 4, 2022',
    status: 'Expired',
    companyName: 'PrimierBank',
    location: 'Mogadishu SO',
    companyImage: PremierBank
  }
]

export default appliedJobsData
