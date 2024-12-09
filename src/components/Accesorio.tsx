import { FC } from 'react'
import { IAccesorios } from '../type/IAccesorios'

const Accesorio:FC<IAccesorios> = ({titulo, precio, productoImagen}) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='overflow-hidden border-4'>
        <img className='h-[300px] w-[300px]  transition-transform duration-300 ease-in-out hover:scale-125 ' src={productoImagen} alt={productoImagen} />
       </div> 
        <h1 className='cursor-pointer text-white font-poppins text-[18px] mt-3'>{titulo}</h1>
        <h1 className='cursor-pointer text-white font-lato'>{precio}</h1>
    </div>
  )
}

export default Accesorio