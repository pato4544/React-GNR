import { Route, Routes } from 'react-router'
import Home from '../components/Pages/Home'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import Tienda from '../components/Pages/Tienda'
import Notice from '../components/Pages/Noticias'
import Timeline from '../components/Pages/Timelines'
import Noticiaid from '../components/Noticiaid'
import Canciones from '../components/Canciones'
import Tiendaid from '../components/Noticiaid'
import TiendaProducto from '../components/TiendaProducto'
import Compra from '../components/Compra'

const AppRouter = () => {
  return (
    <>
   <Navbar/>  {/* Estas no estan renderizadas de forma condicional, estan permanentemente, ya que se encuentran fuera de routes */}

   <Routes>

    <Route element={<Home/>} path='/'/>  {/*Lo que esta dentro de route se renderiza de forma "condicional". */}
     <Route element={<Canciones/>} path='/canciones'></Route>

    <Route element={<Timeline/>} path='/timeline'/> 

    <Route element={<Notice/>} path='/noticias'/>
      <Route element={<Noticiaid/>} path='/noticias/1'/> {/* Dentro de la ruta noticias vamos a tener la ruta 1 que va a renderizar la componente Noticiasid */}

    <Route element={<Tienda/>} path='/tienda'/>  
      <Route element={<TiendaProducto/>} path = '/tienda/producto'/>
      <Route element={<Compra/>} path='/tienda/producto/compra'/>

  </Routes>  {/* Estas no estan renderizadas de forma condicional, estan permanentemente, ya que se encuentran fuera de routes */}



    <Footer/>
    </>


  )
}

export default AppRouter