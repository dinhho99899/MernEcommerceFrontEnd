import { BsInfoSquare, BsBook } from 'react-icons/bs'
import {
  AiOutlineHome,
  AiFillFolderAdd,
  AiFillWallet,
  AiTwotoneHome,
} from 'react-icons/ai'
import {
  MdPermContactCalendar,
  MdOutlineQueryStats,
  MdSpaceDashboard,
} from 'react-icons/md'

export const links = [
  {
    id: 1,
    link: '/',
    text: 'Trang chủ',
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    link: '/blog',
    text: 'Blog',
    icon: <BsInfoSquare />,
  },

  {
    id: 3,
    link: '/contact',
    text: 'Liên hệ',
    icon: <MdPermContactCalendar className='icon' />,
  },
  {
    id: 4,
    link: '/policy',
    text: 'Chinh sach',
    icon: <BsBook className='icon' />,
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
