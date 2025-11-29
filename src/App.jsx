import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Layout from './components/Layout'
import About from './page/About'
import Course from './page/Course'
import Faq from './page/Faq'
import Contact from './page/Contact'

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout></Layout>}>
     <Route index element={<Home></Home>}></Route>
     <Route path='/about' element={<About></About>}></Route>
     <Route path='/courses' element={<Course></Course>}></Route>
     <Route path='/faq' element={<Faq></Faq>}></Route>
     <Route path='/contact' element={<Contact></Contact>}></Route>
  </Route>
))

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
