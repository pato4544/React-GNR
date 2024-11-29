import React, { FC } from 'react'
import Album from './Landing/Album'
import ITienda from '../../type/ITienda'
import Tienda from './Landing/Tienda'
import Contacto from './Landing/Newsletter'
import { useNavigate } from 'react-router'
import INoticias from '../../type/INoticias'
import IAlbum from '../../type/IAlbum'


const Landing = () => {

  const Albums: IAlbum[] = [
    { nombre: "Appetite For Destruction", año: 1987, coverImagen: "/assets/img/appetite.webp", linkSpotify: "https://open.spotify.com/intl-es/album/28yHV3Gdg30AiB8h8em1eW", duracion:"54 minutos", sello:"Geffen Records",
      canciones: [
        { "nombre": "Welcome to the Jungle", "id": 1, "spotySong": "https://open.spotify.com/intl-es/track/0G21yYKMZoHa30cYVi1iA8", "duracion": "4:31" },
        { "nombre": "It's So Easy", "id": 2, "spotySong": "", "duracion": "3:23" },
        { "nombre": "Nightrain", "id": 3, "spotySong": "", "duracion": "4:28" },
        { "nombre": "Out Ta Get Me", "id": 4, "spotySong": "", "duracion": "4:23" },
        { "nombre": "Mr. Brownstone", "id": 5, "spotySong": "", "duracion": "3:49" },
        { "nombre": "Paradise City", "id": 6, "spotySong": "", "duracion": "6:46" },
        { "nombre": "My Michelle", "id": 7, "spotySong": "", "duracion": "3:39" },
        { "nombre": "Think About You", "id": 8, "spotySong": "", "duracion": "3:50" },
        { "nombre": "Sweet Child O' Mine", "id": 9, "spotySong": "", "duracion": "5:56" },
        { "nombre": "You're Crazy", "id": 10, "spotySong": "", "duracion": "3:17" },
        { "nombre": "Anything Goes", "id": 11, "spotySong": "", "duracion": "3:25" },
        { "nombre": "Rocket Queen", "id": 12, "spotySong": "", "duracion": "6:14" }
      ]
    },

    { nombre: "G N' R Lies", año: 1988, coverImagen: "/assets/img/lies.webp", linkSpotify: "https://open.spotify.com/intl-es/album/6z5LStxyQzrUTrVxjiOXVU", duracion:"38 minutos ", sello:"Geffen Records", 
      canciones: [
        { "nombre": "Reckless Life", "id": 1, "spotySong": "", "duracion": "3:23" },
        { "nombre": "Nice Boys", "id": 2, "spotySong": "", "duracion": "4:02" },
        { "nombre": "Move to the City", "id": 3, "spotySong": "", "duracion": "4:10" },
        { "nombre": "Mama Kin", "id": 4, "spotySong": "", "duracion": "4:25" },
        { "nombre": "Patience", "id": 5, "spotySong": "", "duracion": "5:55" },
        { "nombre": "Used to Love Her", "id": 6, "spotySong": "", "duracion": "3:14" },
        { "nombre": "You're Crazy", "id": 7, "spotySong": "", "duracion": "3:17" },
        { "nombre": "One in a Million", "id": 8, "spotySong": "", "duracion": "6:06" }
      ]
    },

    { nombre: "Use Your Ilussion I", año: 1991, coverImagen: "/assets/img/uyi.webp", linkSpotify: "https://open.spotify.com/intl-es/album/0CxPbTRARqKUYighiEY9Sz", duracion:"76 minutos ", sello:"Geffen Records",
      canciones: [
        { "nombre": "Right Next Door to Hell", "id": 1, "spotySong": "", "duracion": "3:02" },
        { "nombre": "Dust N' Bones", "id": 2, "spotySong": "", "duracion": "4:09" },
        { "nombre": "Live and Let Die", "id": 3, "spotySong": "", "duracion": "3:03" },
        { "nombre": "Don't Cry", "id": 4, "spotySong": "", "duracion": "4:44" },
        { "nombre": "Perfect Crime", "id": 5, "spotySong": "", "duracion": "3:06" },
        { "nombre": "You Ain't the First", "id": 6, "spotySong": "", "duracion": "2:37" },
        { "nombre": "Bad Obsession", "id": 7, "spotySong": "", "duracion": "5:28" },
        { "nombre": "Back Off Bitch", "id": 8, "spotySong": "", "duracion": "4:00" },
        { "nombre": "Double Talkin' Jive", "id": 9, "spotySong": "", "duracion": "3:25" },
        { "nombre": "November Rain", "id": 10, "spotySong": "", "duracion": "8:57" },
        { "nombre": "The Garden", "id": 11, "spotySong": "", "duracion": "5:21" },
        { "nombre": "Dead Horse", "id": 12, "spotySong": "", "duracion": "4:17" },
        { "nombre": "Coma", "id": 13, "spotySong": "", "duracion": "10:14" }        
      ]
    },

    { nombre: "Use Your Ilussion II", año: 1991, coverImagen: "/assets/img/uyi2.webp", linkSpotify: "https://open.spotify.com/intl-es/album/00eiw4KOJZ7eC3NBEpmH4C", duracion:"77 minutos", sello:"Geffen Records",
      canciones: [
        { "nombre": "Civil War", "id": 1, "spotySong": "", "duracion": "7:42" },
        { "nombre": "14 Years", "id": 2, "spotySong": "", "duracion": "4:21" },
        { "nombre": "Yesterdays", "id": 3, "spotySong": "", "duracion": "3:16" },
        { "nombre": "Knockin' on Heaven's Door", "id": 4, "spotySong": "", "duracion": "5:31" },
        { "nombre": "Get in the Ring", "id": 5, "spotySong": "", "duracion": "3:34" },
        { "nombre": "Shotgun Blues", "id": 6, "spotySong": "", "duracion": "3:23" },
        { "nombre": "Holiday", "id": 7, "spotySong": "", "duracion": "3:21" },
        { "nombre": "Pretty Tied Up", "id": 8, "spotySong": "", "duracion": "4:44" },
        { "nombre": "Locomotive", "id": 9, "spotySong": "", "duracion": "8:42" },
        { "nombre": "So Fine", "id": 10, "spotySong": "", "duracion": "4:06" },
        { "nombre": "Estranged", "id": 11, "spotySong": "", "duracion": "9:23" },
        { "nombre": "November Rain", "id": 12, "spotySong": "", "duracion": "8:47" },
        { "nombre": "Don't Cry", "id": 13, "spotySong": "", "duracion": "4:43" }
      ]
    },

    { nombre: "The Spaghetti Incident?", año: 1993, coverImagen: "/assets/img/spaghetti.webp", linkSpotify: "https://open.spotify.com/intl-es/album/4ieR19hRkKeE81CalJPQNu", duracion:"44 minutos", sello:"Geffen Records", 
      canciones: [
        { "nombre": "Since I Don't Have You", "id": 1, "spotySong": "", "duracion": "3:38" },
        { "nombre": "New Rose", "id": 2, "spotySong": "", "duracion": "3:06" },
        { "nombre": "Down on the Farm", "id": 3, "spotySong": "", "duracion": "3:41" },
        { "nombre": "Human Being", "id": 4, "spotySong": "", "duracion": "3:25" },
        { "nombre": "Raw Power", "id": 5, "spotySong": "", "duracion": "3:37" },
        { "nombre": "Ain't It Fun", "id": 6, "spotySong": "", "duracion": "3:33" },
        { "nombre": "Buick Makane", "id": 7, "spotySong": "", "duracion": "4:09" },
        { "nombre": "Nirvana", "id": 8, "spotySong": "", "duracion": "4:34" },
        { "nombre": "Hair of the Dog", "id": 9, "spotySong": "", "duracion": "4:43" },
        { "nombre": "Attitude", "id": 10, "spotySong": "", "duracion": "3:09" },
        { "nombre": "Black Leather", "id": 11, "spotySong": "", "duracion": "3:17" },
        { "nombre": "You Can't Put Your Arms Around a Memory", "id": 12, "spotySong": "", "duracion": "3:42" },
        { "nombre": "I'm a Man", "id": 13, "spotySong": "", "duracion": "4:43" }        
      ]
    },

    { nombre: "Chinese Democracy", año: 2008, coverImagen: "/assets/img/chinese.webp", linkSpotify: "https://open.spotify.com/intl-es/album/0suNLpB9xraAv1FcdlITjQ", duracion:"72 minutos", sello:"Geffen Records", 
      canciones: [
        { "nombre": "Chinese Democracy", "id": 1, "spotySong": "", "duracion": "4:43" },
        { "nombre": "Shackler's Revenge", "id": 2, "spotySong": "", "duracion": "6:34" },
        { "nombre": "Better", "id": 3, "spotySong": "", "duracion": "4:48" },
        { "nombre": "Street of Dreams", "id": 4, "spotySong": "", "duracion": "4:43" },
        { "nombre": "If the World", "id": 5, "spotySong": "", "duracion": "3:27" },
        { "nombre": "There Was a Time", "id": 6, "spotySong": "", "duracion": "6:39" },
        { "nombre": "Catcher in the Rye", "id": 7, "spotySong": "", "duracion": "5:45" },
        { "nombre": "Riad N' the Bedouins", "id": 8, "spotySong": "", "duracion": "4:10" },
        { "nombre": "Sorry", "id": 9, "spotySong": "", "duracion": "6:27" },
        { "nombre": "I.R.S.", "id": 10, "spotySong": "", "duracion": "4:19" },
        { "nombre": "Madagascar", "id": 11, "spotySong": "", "duracion": "5:52" },
        { "nombre": "This I Love", "id": 12, "spotySong": "", "duracion": "5:35" },
        { "nombre": "Prostitute", "id": 13, "spotySong": "", "duracion": "6:38" }        
      ]
    }
  ]

  const Tiendita: ITienda[] = [
    { titulo: "GNR Lies Dorado Firmado", precio: "$49999 ARS", productoImagen: "/assets/img/lies-vinilo.png" },
    { titulo: "Use Your Ilussion I Dorado", precio: "$44999 ARS", productoImagen: "/assets/img/uyi1-vinilo.png" },
    { titulo: "Use Your Ilussion II Dorado", precio: "$44999 ARS", productoImagen: "/assets/img/uyi2-vinilo.png" },
    { titulo: "Apettite For Destruction Dorado", precio: "$54999 ARS", productoImagen: "/assets/img/appetite-vinilo.png" }

  ]

   const navigate = useNavigate();  {

    const irCancion = (album: IAlbum) => {
      navigate("/2", { state: album });
    };


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
                <div onClick={() => irCancion (album)}>
                < Album

                  nombre={album.nombre}
                  año={album.año}
                  coverImagen={album.coverImagen}
                  linkSpotify={album.linkSpotify}

                />
                </div>
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
}

export default Landing