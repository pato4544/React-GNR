import { Route, Routes } from 'react-router'
import Home from '../components/Pages/Home'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import Tienda from '../components/Pages/Tienda'
import Notice from '../components/Pages/Noticias'
import Timeline from '../components/Pages/Timelines'
import Noticiaid from '../components/Noticiaid'
import Canciones from '../components/Canciones'
import TiendaProducto from '../components/TiendaProducto'
import Compra from '../components/Compra'
import Album from '../components/Album'
import Contacto from '../components/Contacto'
import Terminos from '../components/Terminos'
import Postcontacto from '../components/Postcontacto'

const AppRouter = () => {
  return (
    <>
   <Header/>  {/* Estas no estan renderizadas de forma condicional, estan permanentemente, ya que se encuentran fuera de routes */}

   <Routes>

    <Route element={<Home/>} path='/'/>  {/*Lo que esta dentro de route se renderiza de forma "condicional". */}


     <Route element={<Album/>} path='/album/:id'>
     {/* Aca va a ir la componente letra anidada*/}
     <Route element={<Canciones/>} path='cancion/:id' />
     </Route>

    <Route element={<Timeline/>} path='/timeline'/> 
  
    <Route path="/noticias" element={<Notice />} />
    <Route path="/noticias/:id" element={<Noticiaid />} /> {/* Ruta condicional de noticias*/}


    <Route path='/contacto' element={<Contacto/>} /> {/* Ruta de contacto */}
    <Route path='/contacto/enviado' element={<Postcontacto/>} />

    
    <Route path='/terminos' element={<Terminos/>} />
    
    <Route element={<Tienda/>} path='/tienda'/>  
      <Route element={<TiendaProducto/>} path = '/tienda/:tipo/:id'/>
      <Route element={<Compra/>} path='/tienda/:tipo/:id/compra'/>

  </Routes>  {/* Estas no estan renderizadas de forma condicional, estan permanentemente, ya que se encuentran fuera de routes */}



    <Footer/>
    </>


  )
}

export default AppRouter