interface Menu {
  path: string
  name: string
}

const Menus: Menu[] = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/jobs',
    name: 'Find Jobs'
  },
  {
    path: '/companies',
    name: 'Companies'
  }
]

export default Menus
