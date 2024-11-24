import React, { FC } from 'react'
import INoticias from '../type/INoticias'

const Noticia:FC<INoticias> = ({titulo, fecha, imagenNoticia, contenido}) => {
    return ( 
        <div className=' flex flex-col w-[324px] h-[577px]  overflow-hidden group'>
          <div  className = 'h-[65%] transition-transform duration-300 ease-in-out group-hover:scale-105'>
          <img className='w-full h-full' src={imagenNoticia} alt={imagenNoticia} />
          </div>
          <div className='bg-black/75 pl-5 pt-5 h-[35%] group-hover:bg-yellow-400 transition duration-300 ease-in'>
            <h3 className='font-montserrat text-white font-bold '>{fecha}</h3>
            <h1 className='font-bebasneue text-[35px] text-white '>{titulo}</h1>
          </div>
        </div> 
    )
  }

export default Noticia