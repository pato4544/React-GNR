import React, { FC } from 'react'
import { IAlbum } from '../type/IAlbum'
import { useState } from 'react';



const Album: FC<IAlbum> = ({ nombre, año, coverImagen, linkSpotify }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      <section className='relative w-72 h-72 outline mt-16 outline-yellow-500 outline-1 ml-[20.3%] transition-transform duration-100 ease-in-out hover:scale-105' onMouseEnter={() => setShowOverlay(true)} onMouseLeave={() => setShowOverlay(false)}>

        <img className="w-full h-full object-cover" src={coverImagen} alt={coverImagen} />
        {showOverlay && (
          <div className='absolute inset-0 text-white font-montserrat text-[14px] flex flex-col justify-center text-center space-y-5 bg-black bg-opacity-75'>
            <h1>{nombre}</h1>
            <h1>{año}</h1>
            <a className='hover:text-yellow-400' href={linkSpotify}>¡Escuchalo en Spotify!</a>

          </div>
        )}
      </section>
    </>
  )
}



export default Album