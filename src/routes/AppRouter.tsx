import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../components/Pages/Home'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import Galeria from '../components/Pages/Galeria'
import Tours from '../components/Pages/Tours'
import Tienda from '../components/Pages/Tienda'
import Notice from '../components/Pages/Noticias'
import Timeline from '../components/Pages/Timelines'

const AppRouter = () => {
  return (
    <>
   <Navbar/>  {/* Estas no estan renderizadas de forma condicional, estan permanentemente, ya que se encuentran fuera de routes */}

   <Routes>

    <Route element={<Home/>} path='/home'/>  {/*Lo que esta dentro de route se renderiza de forma "condicional". */}
    <Route element={<Timeline/>} path='/timeline'/> 
    <Route element={<Notice/>} path='/noticias'/> 
    <Route element={<Tienda/>} path='/tienda'/>
    <Route element={<Galeria/>} path='/galeria'/> {/* Aca basicamente ponemos la componente galeria y la ruta que va a usar  */}
    <Route element = {<Tours/>} path='/tours'/>    

  </Routes>  {/* Estas no estan renderizadas de forma condicional, estan permanentemente, ya que se encuentran fuera de routes */}



    <Footer/>
    </>


  )
}

export default AppRouter