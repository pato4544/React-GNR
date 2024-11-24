import React from 'react'
import Album from './Landing/Album'
import { IAlbum } from '../../type/IAlbum'
import ITienda from '../../type/ITienda'
import Tienda from './Landing/Tienda'
import Contacto from './Landing/Newsletter'


const Landing = () => {

  const Albums: IAlbum[] = [
    { nombre: "Appetite For Destruction", año: 1987, coverImagen: "/assets/img/appetite.webp", linkSpotify: "https://open.spotify.com/intl-es/album/28yHV3Gdg30AiB8h8em1eW" },
    { nombre: "G N' R Lies", año: 1988, coverImagen: "/assets/img/lies.webp", linkSpotify: "https://open.spotify.com/intl-es/album/6z5LStxyQzrUTrVxjiOXVU" },
    { nombre: "Use Your Ilussion I", año: 1991, coverImagen: "/assets/img/uyi.webp", linkSpotify: "https://open.spotify.com/intl-es/album/0CxPbTRARqKUYighiEY9Sz" },
    { nombre: "Use Your Ilussion II", año: 1991, coverImagen: "/assets/img/uyi2.webp", linkSpotify: "https://open.spotify.com/intl-es/album/00eiw4KOJZ7eC3NBEpmH4C" },
    { nombre: "The Spaghetti Incident?", año: 1993, coverImagen: "/assets/img/spaghetti.webp", linkSpotify: "https://open.spotify.com/intl-es/album/4ieR19hRkKeE81CalJPQNu" },
    { nombre: "Chinese Democracy", año: 2008, coverImagen: "/assets/img/chinese.webp", linkSpotify: "https://open.spotify.com/intl-es/album/0suNLpB9xraAv1FcdlITjQ" }
  ]

  const Tiendita: ITienda[] = [
    { titulo: "GNR Lies Dorado Firmado", precio: "$49999 ARS", productoImagen: "/assets/img/lies-vinilo.png" },
    { titulo: "Use Your Ilussion I Dorado", precio: "$44999 ARS", productoImagen: "/assets/img/uyi1-vinilo.png" },
    { titulo: "Use Your Ilussion II Dorado", precio: "$44999 ARS", productoImagen: "/assets/img/uyi2-vinilo.png" },
    { titulo: "Apettite For Destruction Dorado", precio: "$54999 ARS", productoImagen: "/assets/img/appetite-vinilo.png" }
  ]

  return (
    <>

      <section className='w-full h-[3050px] bg-black flex flex-col gap-y-16'>
        <>
          <h1 className='text-white text-center font-bebasneue text-4xl pt-28'>BIOGRAFIA</h1>

          <div className='flex justify-between items-center pl-[12.5%] pr-[12.5%] gap-12'>
            <p className='text-white font-montserrat'>
              Guns N' Roses es una banda estadounidense de hard rock formada en Los Ángeles, California, en 1985. <br />
              Fundada por el guitarrista Slash, el cantante Axl Rose y demas miembros, se convirtió en uno de los grupos más influyentes y populares en la historia del rock. <br /><br />
              Su debut con el álbum Appetite for Destruction (1987) marcó un hito en la música mundial, vendiendo más de 30 millones de copias solo en EE. UU. y presentando himnos como "Sweet Child O' Mine" y "Welcome to the Jungle". <br /><br />
              Este éxito fue solo el comienzo, ya que la banda se consolidó como una de las más exitosas de la historia del rock, con un sonido feroz que mezclaba hard rock con influencias de punk y blues, haciendo eco a una generación entera de fans.</p>
            <img className='h-[390px] w-[510px] outline outline-white' src="/assets/img/live9.webp" alt="" />
          </div>

          <div className='flex justify-between items-center pl-[12.5%] pr-[12.5%] gap-12'>
            <img className='h-[390px] w-[510px] outline outline-white' src="/assets/img/live7.webp" alt="" />
            <p className='text-white font-montserrat'>
              A lo largo de su carrera, Guns N' Roses ha sido nominado y ha ganado varios premios, incluyendo múltiples premios MTV, American Music Awards y nominaciones a los Grammy. <br /><br />
              Su álbum Use Your Illusion I & II (1991), una de sus obras más ambiciosas, canciones como "November Rain" y "Don't Cry", que se convirtieron en himnos del rock clásico.
              Su éxito continuó con Chinese Democracy (2008), después de años de espera y rumores sobre la disolución de la banda. <br /><br />
              A pesar de los cambios en la formación a lo largo de los años, Guns N' Roses sigue siendo una banda esencial del rock mundial, llenando estadios y convocando a miles de fans a sus conciertos en todo el mundo con su característico sonido poderoso y su imparable legado.
            </p>
          </div>
        </>


        <>
          <div>
            <h1 className='text-white text-center mt-28 font-bebasneue text-4xl' >DISCOGRAFIA</h1>
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
          </div>
        </>



        <>
          <h1 className='text-white text-center  mt-28 font-bebasneue text-4xl'>TIENDA</h1>

          <div className="flex justify-around">
            {Tiendita.map((tienda: ITienda) =>

              < Tienda

                titulo={tienda.titulo}
                precio={tienda.precio}
                productoImagen={tienda.productoImagen}
              />
            )}

          </div>
        </>


        <>
       <Contacto/>


        </>
      </section>


    </>
  )
}

export default Landing