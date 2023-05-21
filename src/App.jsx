import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  HomePage,
  ErrorPage,
  CheckoutPage,
  SingleProductPage,
  BlogPage,
  ContactPage,
  SinglePostPage,
  PolicyPage,
  Register,
} from './page'
import { ShareLayout } from './page'
import {
  ShareLayoutDashboard,
  Stats,
  Profile,
  AllJobs,
  AddJob,
  ProtectRoute,
  AllUsers,
} from './page/Dashboard'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<ShareLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path='/checkout' element={<CheckoutPage />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/contact' element={<ContactPage />}></Route>
          <Route path='/policy' element={<PolicyPage />}></Route>
          <Route path='/blog' element={<BlogPage />}></Route>
          <Route path='/blog/:postId' element={<SinglePostPage />}></Route>
          <Route
            path='/product/:productId'
            element={<SingleProductPage />}
          ></Route>
          <Route path='*' element={<ErrorPage />}></Route>
          <Route
            path='/dashboard'
            element={
              <ProtectRoute>
                <ShareLayoutDashboard />
              </ProtectRoute>
            }
          >
            <Route index element={<Stats />}></Route>
            <Route path='stats' element={<Stats />}></Route>
            <Route path='profile' element={<Profile />}></Route>
            <Route path='all-products' element={<AllJobs />}></Route>
            <Route path='add-product' element={<AddJob />}></Route>
            <Route path='all-users' element={<AllUsers />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
