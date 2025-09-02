import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'


function App() {

  return (
    <>
      <div className='bg-base-200'>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <hr />
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
