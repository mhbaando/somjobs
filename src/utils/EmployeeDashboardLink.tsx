import { CiViewTable } from 'react-icons/ci'
import { HiOutlineTrash } from 'react-icons/hi'
import { AiOutlineUser } from 'react-icons/ai'
import { MdOutlineLockOpen } from 'react-icons/md'
import { BsJournalBookmarkFill, BsBriefcase } from 'react-icons/bs'

const EmployeeDashboardLink = [
  {
    name: 'Dashboard',
    path: '/employee',
    icon: <CiViewTable className='text-2xl' />
  },
  {
    name: 'My Profile',
    path: '/employee/profile',
    icon: <AiOutlineUser className='text-2xl' />
  },
  {
    name: 'My Resume',
    path: '/employee/resume',
    icon: <BsJournalBookmarkFill className='text-2xl' />
  },
  {
    name: 'Applied Jobs',
    path: '/employee/jobs',
    icon: <BsBriefcase className='text-2xl' />
  },
  {
    name: 'ChangePassword',
    path: '/employee/change-password',
    icon: <MdOutlineLockOpen className='text-2xl' />
  },
  {
    name: 'Delete Profile',
    path: '/employee/delete',
    icon: <HiOutlineTrash className='text-2xl' />
  }
]

export default EmployeeDashboardLink
