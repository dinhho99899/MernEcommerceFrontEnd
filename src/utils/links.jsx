import {
  AiFillHome,
  AiFillFolderAdd,
  AiFillWallet,
  AiTwotoneHome,
} from 'react-icons/ai'
import {
  MdPermContactCalendar,
  MdOutlineQueryStats,
  MdSpaceDashboard,
  MdChromeReaderMode,
  MdContactPage,
  MdDescription,
} from 'react-icons/md'
import blog from '../assets/images/Photo5.png'
import blog5 from '../assets/images/hero.png'
import blog6 from '../assets/images/blog1.png'
import blog7 from '../assets/images/Photo7.png'
export const links = [
  {
    id: 1,
    link: '/',
    text: 'Trang chủ',
    icon: <AiFillHome />,
  },
  {
    id: 2,
    link: '/products',
    text: 'Shop',
    icon: <AiFillHome />,
  },
  {
    id: 3,
    link: '/blog',
    text: 'Blog',
    icon: <MdChromeReaderMode />,
  },

  {
    id: 4,
    link: '/contact',
    text: 'Liên hệ',
    icon: <MdContactPage />,
  },
  {
    id: 5,
    link: '/policy',
    text: 'Chính sách',
    icon: <MdDescription />,
  },
]

export const dashboardlinks = [
  {
    id: 1,
    link: '/dashboard/stats',
    text: 'Stats',
    icon: <MdOutlineQueryStats />,
  },
  {
    id: 2,
    link: '/dashboard/all-products',
    text: 'All Products',
    icon: <AiTwotoneHome />,
  },
  {
    id: 3,
    link: '/dashboard/add-product',
    text: 'Add Product',
    icon: <AiFillFolderAdd />,
  },

  {
    id: 4,
    link: '/dashboard/profile',
    text: 'Profile',
    icon: <MdPermContactCalendar />,
  },
  {
    id: 5,
    link: '/dashboard/all-users',
    text: 'All Users',
    icon: <AiFillWallet />,
  },
  {
    id: 6,
    link: '/dashboard/all-orders',
    text: 'Orders',
    icon: <MdSpaceDashboard />,
  },
]
export const quotes = [
  {
    id: 1,
    quote:
      'Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.',
    avatar: blog,
    name: 'Dinh Ho',
    position: 'Developer',
  },
  {
    id: 2,
    quote:
      'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst.',
    avatar: blog5,
    name: 'Hai Le',
    position: 'Consultant',
  },
  {
    id: 3,
    quote:
      'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.',
    avatar: blog6,
    name: 'Minh Phuong',
    position: 'Architect',
  },
  {
    id: 4,
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    avatar: blog,
    name: 'Thomas',
    position: 'Software Engineer',
  },
  {
    id: 5,
    quote:
      "You've gotta dance like there's nobody watching, Love like you'll never be hurt,Sing like there's nobody listening, And live like it's heaven on earth.",
    avatar: blog7,
    name: 'David',
    position: 'Designer',
  },
]
