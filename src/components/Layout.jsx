import Header from './Header'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Map from './Map'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Map></Map>
      <Footer></Footer>
    </>
  )
}

export default Layout