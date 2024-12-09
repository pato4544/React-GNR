import { FC } from 'react'
import IRopa from '../type/IRopa'

const Ropita:FC<IRopa> = ({titulo, precio, productoImagen, imagenReversa}) => {
  return (


    <div className='flex justify-around'>
    <div className='flex flex-col items-center'>
    <div className="relative group w-[300px] h-[300px] cursor-pointer">
         
          <img className="border-4  w-full h-auto transition-opacity duration-700 group-hover:opacity-0" src={productoImagen} alt={productoImagen}/>
          <img className="border-4 absolute top-0 left-0 w-full h-auto opacity-0 transition-opacity duration-700 group-hover:opacity-100" src={imagenReversa} alt={imagenReversa}/>
        </div >
        <div className='w-full text-center pb-2'>
        <h2 className='cursor-pointer text-white font-poppins text-[18px] mt-3' >{titulo}</h2>
        <h3 className='cursor-pointer text-white font-lato'>{precio}</h3>
        </div>
    </div>
    </div>
  )
}

export default Ropita