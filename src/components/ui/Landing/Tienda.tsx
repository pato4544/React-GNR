import React, { FC } from 'react'
import ITienda from '../../../type/ITienda'

const Tienda:FC<ITienda> = ({productoImagen, titulo, precio}) => {
  return (
    
    <div className='flex flex-col items-center'>
        <img className='w-[290px] h-[220px] transition-all duration-300 hover:shadow-[0px_0px_10px_5px_rgba(255,223,0,0.6)]' src={productoImagen} alt={productoImagen} />
        <h2 className='text-white font-poppins text-[18px] pt-5' >{titulo}</h2>
        <h3 className='text-white font-lato'>{precio}</h3>
    </div>
  )
}

export default Tienda