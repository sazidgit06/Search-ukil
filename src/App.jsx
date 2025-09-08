import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'


function App() {

  return (
    <>
      <div className='bg-base-200 mulish-font'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <hr className='text-gray-300' />
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
