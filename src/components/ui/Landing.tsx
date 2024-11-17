import React from 'react'
import Album from '../Album'
import { IAlbum } from '../../type/IAlbum'

const Landing = () => {

  const Albums: IAlbum[] = [
    { nombre: "Chinese Democracy", año: 2008, coverImagen: "/assets/img/chinese.webp", linkSpotify:"https://open.spotify.com/intl-es/album/0suNLpB9xraAv1FcdlITjQ" },
    { nombre: "Appetite For Destruction", año: 1987, coverImagen: "/assets/img/appetite.webp", linkSpotify:"https://open.spotify.com/intl-es/album/28yHV3Gdg30AiB8h8em1eW" },
    { nombre: "Use Your Ilussion I", año: 1991, coverImagen: "/assets/img/porfa2.webp", linkSpotify:"https://open.spotify.com/intl-es/album/0CxPbTRARqKUYighiEY9Sz" },
    { nombre: "Use Your Ilussion II", año: 1991, coverImagen: "/assets/img/uyi2.webp", linkSpotify:"https://open.spotify.com/intl-es/album/00eiw4KOJZ7eC3NBEpmH4C" },
    { nombre: "The Spaghetti Incident?", año: 1993, coverImagen: "/assets/img/spaghetti.webp", linkSpotify:"https://open.spotify.com/intl-es/album/4ieR19hRkKeE81CalJPQNu" },
    { nombre: "G N' R Lies", año: 1988, coverImagen: "/assets/img/lies.webp", linkSpotify:"https://open.spotify.com/intl-es/album/6z5LStxyQzrUTrVxjiOXVU" }
  ]


  return (
    <>
      <section className='w-full h-[1200px] bg-black'>
        <div className='text-white text-center font-bebasneue text-4xl pt-64'>
          <h1>DISCOGRAFIA</h1>
        </div>

        <div className="grid grid-cols-3">
          {Albums.map((album: IAlbum) =>

            < Album

              nombre={album.nombre}
              año={album.año}
              coverImagen={album.coverImagen}
              linkSpotify={album.linkSpotify}

            />



          )}

        </div>

      </section>


    </>
  )
}

export default Landing