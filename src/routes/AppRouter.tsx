import React from 'react'
import { Route, Routes } from 'react-router'
import Album from '../components/Album'
import Hero from '../components/ui/Hero'
import Home from '../components/Pages/Home'
import Pagina2 from '../components/Pages/Noticias'
import Noticias from '../components/Pages/Noticias'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'

const AppRouter = () => {
  return (
    <>
   <Navbar/>

   <Routes>

    <Route element={<Home/>} path='/'/>  {/*Lo que esta dentro de route se renderiza de forma "condicional". */}
    <Route element={<Noticias/>} path='/noticias'/>
    

    </Routes>


    <Footer/>
    </>


  )
}

export default AppRouter