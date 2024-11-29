import { Link, useLocation } from 'react-router';
import IAlbum from '../type/IAlbum';
import { PiSpotifyLogoLight } from 'react-icons/pi';
import { FaRegClock } from "react-icons/fa6";
import { BsTag } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";

const Canciones = () => {

  const location = useLocation();
  const album = location.state as IAlbum;


  return (

    <div className='min-h-screen  w-full bg-black flex-col '>

      <div className='w-full h-[40vh] pt-16 bg-center bg-cover z-50' style={{backgroundImage: 'url(/assets/img/fondo9.webp)'}}>
      <div className='w-full h-full bg-gradient-to-b from-transparent to-black'> </div>
      </div>
      

      <div className='flex h-[80%] pt-36 pl-24'>
      <div className=' flex flex-col w-[40%] gap-y-6 pl-4'>
        <img className="h-auto w-[70%]  outline outline-yellow-400" src={album.coverImagen} alt={album.coverImagen} />

        <div className='flex text-[16px] text-white items-center gap-x-4 font-lato'>
          <h1><FaCalendarAlt/></h1>
        <h2 >{album.año}</h2>
        </div>

        <div className='flex text-[16px] text-white items-center gap-x-4 font-lato'>
          <h1><FaRegClock/></h1>
          <h2>{album.duracion}</h2>
        </div>

        <div className='flex text-[16px] text-white items-center gap-x-4 font-lato'>
          <h1><BsTag/></h1>
          <h2>{album.sello}</h2>
        </div>

      </div>
      <div className='w-[45%] items-center justify-center text-center'>
        
      <h1 className='text-white font-bebasneue text-4xl'>TRACKLIST</h1>
      <div className=' h-[100%] mb-10'>
        {album.canciones?.map((cancion) => (
          <div className='bg-black/50 rounded-[10px] w-[100%] h-10 text-white justify-between flex border border-white items-center mt-5'>
            <div className='flex gap-x-5 w-[50%]'>
              <div className='font-montserrat pl-4'>
              {cancion.id}
              </div>
              <div className='font-montserrat'>
              {cancion.nombre}
              </div>
            </div>

            <div className='font-montserrat'>
              {cancion.duracion}
            </div>
            <div className='pr-4'>
              <Link className='hover:text-yellow-400 trainstion duration-300' to={cancion.spotySong}>
                <PiSpotifyLogoLight className='text-[30px]' />
              </Link>
            </div>
          </div>
        ))}
      </div>
      </div>
      </div>
    </div>


  )
}

export default Canciones