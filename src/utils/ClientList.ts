import Amzon from '../assets/clients/amazon.svg'
import Figma from '../assets/clients/figma.svg'
import Hormuud from '../assets/clients/hormud.svg'
import PremierBank from '../assets/clients/premierbank.svg'
import slack from '../assets/clients/slack.svg'
import Somtel from '../assets/clients/somtel.svg'
import Spofify from '../assets/clients/spotify.svg'

interface Client {
  name: string
  path: string
  imgSrc: string
}

const ClientLists: Client[] = [
  {
    name: 'Amazon',
    path: 'https://www.amazon.com/',
    imgSrc: Amzon
  },
  {
    name: 'Hormuud',
    path: 'https://www.amazon.com/',
    imgSrc: Hormuud
  },
  {
    name: 'slack',
    path: 'https://www.amazon.com/',
    imgSrc: slack
  },
  {
    name: 'PremierBank',
    path: 'https://www.amazon.com/',
    imgSrc: PremierBank
  },
  {
    name: 'Spofify',
    path: 'https://www.amazon.com/',
    imgSrc: Spofify
  },
  {
    name: 'Somtel',
    path: 'https://www.amazon.com/',
    imgSrc: Somtel
  },
  {
    name: 'Figma',
    path: 'https://www.amazon.com/',
    imgSrc: Figma
  }
]

export default ClientLists
