import { CiViewTable } from 'react-icons/ci'
import { HiOutlineTrash } from 'react-icons/hi'
import { AiOutlineUser } from 'react-icons/ai'
import { MdOutlineLockOpen } from 'react-icons/md'
import { BsBriefcase, BsFileEarmarkMedical } from 'react-icons/bs'

import { RiUser2Line } from 'react-icons/ri'
import { BiSend } from 'react-icons/bi'

const CompanyDashboardLink = [
  {
    name: 'Dashboard',
    path: '/company',
    icon: <CiViewTable className='text-2xl' />
  },
  {
    name: 'Company Profile',
    path: '/company/profile',
    icon: <RiUser2Line className='text-2xl' />
  },
  {
    name: 'Post a new job',
    path: '/company/post-job',
    icon: <BiSend className='text-2xl' />
  },
  {
    name: 'Manage Jobs',
    path: '/company/jobs',
    icon: <BsBriefcase className='text-2xl' />
  },
  {
    name: 'All Applicants',
    path: '/company/applicants',
    icon: <BsFileEarmarkMedical className='text-2xl' />
  },
  {
    name: 'Change Password',
    path: '/company/change-password',
    icon: <MdOutlineLockOpen className='text-2xl' />
  },
  {
    name: 'Delete Profile',
    path: '/company/delete',
    icon: <HiOutlineTrash className='text-2xl' />
  }
]

export default CompanyDashboardLink
