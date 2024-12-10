import React from 'react'
import { Link, useLocation } from 'react-router'
import IVinilos from '../type/IVinilos';
import IRopa from '../type/IRopa';
import { IAccesorios } from '../type/IAccesorios';

const TiendaProducto = () => {

  const location = useLocation();
  const dato = location.state as IVinilos | IRopa | IAccesorios
  
  
  
  
  
  return (
    <div className='min-h-screen bg-black pt-24 pb-20 flex  border border-violet-500 gap-x-12 pl-20'>
        <div className='flex flex-col border border-white w-40'>
              <img className="border h-[20%]" src={dato.productoImagen} alt="" />
              <img className="border h-[20%]" src={dato.productoImagen} alt="" />
              <img className="border h-[20%]" src={dato.productoImagen} alt="" /> {/* ¿Array imagenes?*/}

        </div>

        <div className='flex border border-red-500'>
        <img className='h-[80vh] w-[80vh]'src={dato.productoImagen} alt={dato.productoImagen} />
        </div>

        <div className='flex flex-col text-white border border-green-500 gap-y-6 '>
          <h1 className='font-montserrat font-bold text-[30px] uppercase'>{dato.titulo}</h1>
          <h2 className='font-monteserrat font-bold'>{dato.precio}</h2>
         <Link to={"/tienda/producto/compra"} ><button className='border rounded-xl w-[50%] hover:text-yellow-500 hover:border-yellow-500 transition duration-500'><p>COMPRAR</p></button></Link>
        <div className='flex flex-col'>
        <h1 className='text-white border-'>Descripción </h1>
        <p>Descripcion del producto</p>
        </div>
        <h1 className='text-white'>Detalles del producto</h1>
        <ul>
          <li>Detalle 1</li>
          <li>Detalle 2</li>
        </ul>
        </div>
        
        </div>
      

  )
}

export default TiendaProducto