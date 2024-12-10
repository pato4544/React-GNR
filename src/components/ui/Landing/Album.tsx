import { FC } from 'react'
import IAlbum from '../../../type/IAlbum';
import { useState } from 'react';
import { Link } from 'react-router';
import { PiSpotifyLogoLight } from "react-icons/pi";



const Album: FC<IAlbum> = ({ nombre, año, coverImagen, linkSpotify }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>

      <section className='relative w-72 h-72 outline mt-16 outline-yellow-500 outline-1 ml-[20.3%] transition-transform duration-100 ease-in-out hover:scale-105' onMouseEnter={() => setShowOverlay(true)} onMouseLeave={() => setShowOverlay(false)}>

        <img className="w-full h-full object-cover" src={coverImagen} alt={coverImagen} />
        {showOverlay && (
          <div className='cursor-pointer absolute inset-0 text-white font-montserrat text-[14px] flex flex-col justify-center text-center space-y-5 bg-black bg-opacity-75'>
            <h1 className='text-[18px]'>{nombre}</h1>
            <h1>{año}</h1>
            <Link className='hover:text-yellow-400 flex justify-center items-center gap-3'  to={linkSpotify}>
            <h3>¡Escuchalo en Spotify!</h3>
            <PiSpotifyLogoLight className='text-[30px] text-yellow-400'/>
            </Link>
          </div>
        )}
      </section>
    </>
  )
}



export default Album