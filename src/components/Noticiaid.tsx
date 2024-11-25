import React from 'react'
import { useLocation } from 'react-router';
import INoticias from '../type/INoticias';

const Noticiaid = () => {

    const location = useLocation();
    const noticia = location.state as INoticias;

  return (
    <div className='w-full flex justify-center bg-fixed' style={{backgroundImage: ('url(/assets/img/n7.png)')}}>
        <div className=' bg-black/55 min-h-screen border flex justify-center border-orange-700 pt-16'>
            <div className='w-[600px] flex flex-col  border border-red-700'>
            <div className='h-auto'>
                <h2 className='font-montserrat text-white font-bold text-[20px]'>{noticia.fecha}</h2>
                <h1 className='font-bebasneue text-[40px] text-white'>{noticia.titulo}</h1>
                </div>
                <img className="w-full h-auto border border-green-950 border-4" src={noticia.imagenNoticia} alt="" />
                <p className='font-roboto text-[25px] text-white h-[30%]'>{noticia.contenido}</p>
            </div>
        </div>
    </div>

  )
}

export default Noticiaid