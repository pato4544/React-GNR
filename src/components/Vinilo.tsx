import { FC } from 'react'
import IVinilos from '../type/IVinilos'

const Vinilo:FC<IVinilos> = ({productoImagen, titulo, precio}) => {
  return (
   
    <div className='flex flex-col items-center'>
        <img className='cursor-pointer w-[270px] h-[220px] transition-all duration-300 hover:shadow-[0px_0px_10px_5px_rgba(255,223,0,0.6)]' src={productoImagen} alt={productoImagen} />
        <h2 className='cursor-pointer text-white font-poppins text-[18px] mt-3' >{titulo}</h2>
        <h3 className='cursor-pointer text-white font-lato'>{precio}</h3>
    </div>
  
  )
}

export default Vinilo