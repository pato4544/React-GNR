import React, { FC } from 'react'
import { IAlbum } from '../type/IAlbum'
import { useState } from 'react';



const Album: FC<IAlbum> = ({ nombre, año, coverImagen, linkSpotify }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      <section className='relative w-72 h-72 outline outline-yellow-500 outline-1 mt-20 ml-[21%]' onMouseEnter={() => setShowOverlay(true)} onMouseLeave={() => setShowOverlay(false)}>

        <img className="w-full h-full object-cover" src={coverImagen} alt={coverImagen} />
        {showOverlay && (
          <div className='absolute inset-0 text-white font-montserrat text-[14px] flex flex-col justify-center text-center space-y-5 bg-black bg-opacity-75'>
            <h1>{nombre}</h1>
            <h1>{año}</h1>
            <a className='hover:text-yellow-400' href={linkSpotify}>¡Escuchalo en Spoty!</a>

          </div>
        )}
      </section>
    </>
  )
}



export default Album