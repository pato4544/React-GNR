import Album from './Landing/Album'
import Contacto from './Landing/Newsletter'
import { Link, useNavigate } from 'react-router'
import IAlbum from '../../type/IAlbum'
import IVinilos from '../../type/IVinilos'
import Vinilo from '../Vinilo'




const Landing = () => {

  const Albums: IAlbum[] = [
    { nombre: "Appetite For Destruction", año: 1987, coverImagen: "/assets/img/albums/appetite.webp", linkSpotify: "https://open.spotify.com/intl-es/album/28yHV3Gdg30AiB8h8em1eW", duracion:"54 minutos", sello:"Geffen Records",
      canciones: [
        { nombre: "Welcome to the Jungle", id: 1, spotySong: "https://open.spotify.com/intl-es/track/0G21yYKMZoHa30cYVi1iA8", duracion: "4:31" },
        { nombre: "It's So Easy", id: 2, spotySong: "https://open.spotify.com/intl-es/track/58YL9Jo1T0wyijCOZWRmyL", duracion: "3:23" },
        { nombre: "Nightrain", id: 3, spotySong: "https://open.spotify.com/intl-es/track/7CBFRsUz1pz1cS12soVhih", duracion: "4:28" },
        { nombre: "Out Ta Get Me", id: 4, spotySong: "https://open.spotify.com/intl-es/track/62pJJQjiTaTsFYFjDIYjYU", duracion: "4:23" },
        { nombre: "Mr. Brownstone", id: 5, spotySong: "https://open.spotify.com/intl-es/track/65G4Ib3w7tgLjUkO5GseN0", duracion: "3:49" },
        { nombre: "Paradise City", id: 6, spotySong: "https://open.spotify.com/intl-es/track/6eN1f9KNmiWEhpE2RhQqB5", duracion: "6:46" },
        { nombre: "My Michelle", id: 7, spotySong: "https://open.spotify.com/intl-es/track/1NQPc9znr56Ci6f02HoLpg", duracion: "3:39" },
        { nombre: "Think About You", id: 8, spotySong: "https://open.spotify.com/intl-es/track/4WPyOlL7E6ckUcCUzIKNJe", duracion: "3:50" },
        { nombre: "Sweet Child O' Mine", id: 9, spotySong: "https://open.spotify.com/intl-es/track/7o2CTH4ctstm8TNelqjb51", duracion: "5:56" },
        { nombre: "You're Crazy", id: 10, spotySong: "https://open.spotify.com/intl-es/track/5rpfLrI7nSQAu7RnDWZ2dV", duracion: "3:17" },
        { nombre: "Anything Goes", id: 11, spotySong: "https://open.spotify.com/intl-es/track/2seAsYG2FiexpXj8UhG9Zk", duracion: "3:25" },
        { nombre: "Rocket Queen", id: 12, spotySong: "https://open.spotify.com/intl-es/track/0xaNdYwK8ZF3cHSjraQGC0", duracion: "6:14" }
      ]
    },

    { nombre: "G N' R Lies", año: 1988, coverImagen: "/assets/img/albums/lies.webp", linkSpotify: "https://open.spotify.com/intl-es/album/6z5LStxyQzrUTrVxjiOXVU", duracion:"38 minutos ", sello:"Geffen Records", 
      canciones: [
        { nombre: "Reckless Life", id: 1, spotySong: "https://open.spotify.com/intl-es/track/5k1j3UnyXvmgIyNWIfycFb", duracion: "3:23" },
        { nombre: "Nice Boys", id: 2, spotySong: "https://open.spotify.com/intl-es/track/3saiiBttylo6QK8vTAldLl", duracion: "4:02" },
        { nombre: "Move to the City", id: 3, spotySong: "https://open.spotify.com/intl-es/track/0ZnbnrLQdSJiD5TfumVcnc", duracion: "4:10" },
        { nombre: "Mama Kin", id: 4, spotySong: "https://open.spotify.com/intl-es/track/0XRlRULMnFbsm9EhJDHGYW", duracion: "4:25" },
        { nombre: "Patience", id: 5, spotySong: "https://open.spotify.com/intl-es/track/1OEoNpiyqBghuEUaT6Je6U", duracion: "5:55" },
        { nombre: "Used to Love Her", id: 6, spotySong: "https://open.spotify.com/intl-es/track/2uduMoxSNLkDBhyLS2JroT", duracion: "3:14" },
        { nombre: "You're Crazy", id: 7, spotySong: "https://open.spotify.com/intl-es/track/1kuL80G4YwSbuGGNPLRFWF", duracion: "3:17" },
        { nombre: "One in a Million", id: 8, spotySong: "https://open.spotify.com/intl-es/track/693Vu2TytCbonbTu9qQ8M3", duracion: "6:06" }
      ]
    },

    { nombre: "Use Your Ilussion I", año: 1991, coverImagen: "/assets/img/albums/uyi.webp", linkSpotify: "https://open.spotify.com/intl-es/album/0CxPbTRARqKUYighiEY9Sz", duracion:"76 minutos ", sello:"Geffen Records",
      canciones: [
        { "nombre": "Right Next Door to Hell", "id": 1, "spotySong": "https://open.spotify.com/intl-es/track/5YXvG4PL4Wisyx2ScUxVFF", "duracion": "3:02" },
        { "nombre": "Dust N' Bones", "id": 2, "spotySong": "https://open.spotify.com/intl-es/track/4vtXsXvSYaTfKQ0dJXbJGu", "duracion": "4:09" },
        { "nombre": "Live and Let Die", "id": 3, "spotySong": "https://open.spotify.com/intl-es/track/6UVs5qRLZsAufVJaBoYMPc", "duracion": "3:03" },
        { "nombre": "Don't Cry (Original)", "id": 4, "spotySong": "https://open.spotify.com/intl-es/track/2N2yrmodOnVF10mKvItC9P", "duracion": "4:44" },
        { "nombre": "Perfect Crime", "id": 5, "spotySong": "https://open.spotify.com/intl-es/track/4RG9eWQTmyqqn4S5il3mfB", "duracion": "3:06" },
        { "nombre": "You Ain't the First", "id": 6, "spotySong": "https://open.spotify.com/intl-es/track/5qaCOcPZW36ymI61qMgbYx", "duracion": "2:37" },
        { "nombre": "Bad Obsession", "id": 7, "spotySong": "https://open.spotify.com/intl-es/track/16ran5yZDoDZIzvVqgSXyW", "duracion": "5:28" },
        { "nombre": "Back Off Bitch", "id": 8, "spotySong": "https://open.spotify.com/intl-es/track/4ZAuNpHeMIWNrBCPcCrzoq", "duracion": "4:00" },
        { "nombre": "Double Talkin' Jive", "id": 9, "spotySong": "https://open.spotify.com/intl-es/track/46AtSShP5IL2Ls3uHpxmt8", "duracion": "3:25" },
        { "nombre": "November Rain", "id": 10, "spotySong": "https://open.spotify.com/intl-es/track/3YRCqOhFifThpSRFJ1VWFM", "duracion": "8:57" },
        { "nombre": "The Garden", "id": 11, "spotySong": "https://open.spotify.com/intl-es/track/7dbNC7CvnkAxrMOFDwdqn8", "duracion": "5:21" },
        { "nombre": "Garden of Eden", "id": 12, "spotySong": "https://open.spotify.com/intl-es/track/5rGmkQ5cXbDrFPW8CefvFq", "duracion": "3:31" },
        { "nombre": "Don't Damn Me", "id": 13, "spotySong": "https://open.spotify.com/intl-es/track/4BZdQn690mETPLKmNDhbGi", "duracion": "5:18" },
        { "nombre": "Bad Apples", "id": 14, "spotySong": "https://open.spotify.com/intl-es/track/1GS5mCcIPaJ6X6MhUNakG1", "duracion": "5:19" },
        { "nombre": "Dead Horse", "id": 15, "spotySong": "https://open.spotify.com/intl-es/track/7tdJuL2ZgmKDwIIFDdNanK", "duracion": "4:17" },
        { "nombre": "Coma", "id": 16, "spotySong": "https://open.spotify.com/intl-es/track/34Lo0oc0QDJ1wlepfnWHQI", "duracion": "10:14" }
      
      ]
    },

    { nombre: "Use Your Ilussion II", año: 1991, coverImagen: "/assets/img/albums/uyi2.webp", linkSpotify: "https://open.spotify.com/intl-es/album/00eiw4KOJZ7eC3NBEpmH4C", duracion:"77 minutos", sello:"Geffen Records",
      canciones: [
        { "nombre": "Civil War", "id": 1, "spotySong": "https://open.spotify.com/intl-es/track/6i4Qi1mJxXjqNIL9HfJhRs", "duracion": "7:42" },
        { "nombre": "14 Years", "id": 2, "spotySong": "https://open.spotify.com/intl-es/track/7xki0BmuOllyquWqjhETyr", "duracion": "4:21" },
        { "nombre": "Yesterdays", "id": 3, "spotySong": "https://open.spotify.com/intl-es/track/11VGhd5i7deLL0YB0ayicY", "duracion": "3:16" },
        { "nombre": "Knockin' on Heaven's Door", "id": 4, "spotySong": "https://open.spotify.com/intl-es/track/4JiEyzf0Md7KEFFGWDDdCr", "duracion": "5:31" },
        { "nombre": "Get in the Ring", "id": 5, "spotySong": "https://open.spotify.com/intl-es/track/1Tay8nNhYR2gMO6GbjVW5Q", "duracion": "3:34" },
        { "nombre": "Shotgun Blues", "id": 6, "spotySong": "https://open.spotify.com/intl-es/track/3VGEx0xUC5fHpcw3VshMWE", "duracion": "3:23" },
        { "nombre": "Breakdown", "id": 7, "spotySong": "https://open.spotify.com/intl-es/track/0HRQkTbdiXFWTl4WjNnple", "duracion": "7:04" },
        { "nombre": "Pretty Tied Up", "id": 8, "spotySong": "https://open.spotify.com/intl-es/track/2hAt6y582UsTcwvCKTcTMs", "duracion": "4:44" },
        { "nombre": "Locomotive", "id": 9, "spotySong": "https://open.spotify.com/intl-es/track/5CDkYznWVjaOCAYbojfN6H", "duracion": "8:42" },
        { "nombre": "So Fine", "id": 10, "spotySong": "https://open.spotify.com/intl-es/track/1opsSy4JiNUczCyj5aZn11", "duracion": "4:06" },
        { "nombre": "Estranged", "id": 11, "spotySong": "https://open.spotify.com/intl-es/track/3s03nrUInN3NAVjQtmnS0O", "duracion": "9:23" },
        { "nombre": "You Could Be Mine", "id": 12, "spotySong": "https://open.spotify.com/intl-es/track/0dlTGl67UFWcKupzkxZYOn", "duracion": "5:43" },
        { "nombre": "Don't Cry (Alternate Lyrics)", "id": 13, "spotySong": "https://open.spotify.com/intl-es/track/46EZZfbwlJTEZNGQq9vreK", "duracion": "4:43" },
        { "nombre": "My World", "id": 14, "spotySong": "https://open.spotify.com/intl-es/track/4PFvlYJZOh2JwRbEXn93Vc", "duracion": "1:22" }
      ]
    },

    { nombre: "The Spaghetti Incident?", año: 1993, coverImagen: "/assets/img/albums/spaghetti.webp", linkSpotify: "https://open.spotify.com/intl-es/album/4ieR19hRkKeE81CalJPQNu", duracion:"44 minutos", sello:"Geffen Records", 
      canciones: [
        { "nombre": "Since I Don't Have You", "id": 1, "spotySong": "https://open.spotify.com/intl-es/track/5sVf9kN90ScddiT3SdT9Qh", "duracion": "3:38" },
        { "nombre": "New Rose", "id": 2, "spotySong": "https://open.spotify.com/intl-es/track/04yILski78uPS4IM70cqer", "duracion": "3:06" },
        { "nombre": "Down on the Farm", "id": 3, "spotySong": "https://open.spotify.com/intl-es/track/1AU7nLoyAO170E6V5iZkEM", "duracion": "3:41" },
        { "nombre": "Human Being", "id": 4, "spotySong": "https://open.spotify.com/intl-es/track/1lOuIyCsLqFwQFLFahWCC6", "duracion": "3:25" },
        { "nombre": "Raw Power", "id": 5, "spotySong": "https://open.spotify.com/intl-es/track/0mEHMxPXudiogqlo9bbN9p", "duracion": "3:37" },
        { "nombre": "Ain't It Fun", "id": 6, "spotySong": "https://open.spotify.com/intl-es/track/6O2fGDuLTT67XT6wWbkKHh", "duracion": "3:33" },
        { "nombre": "Buick Makane", "id": 7, "spotySong": "https://open.spotify.com/intl-es/track/2bjL9PmPGs02oEjZcBMwuc", "duracion": "4:09" },
        { "nombre": "Hair of the Dog", "id": 8, "spotySong": "https://open.spotify.com/intl-es/track/1kq4BX4zZHyr4O5cJGcduh", "duracion": "4:43" },
        { "nombre": "Attitude", "id": 9, "spotySong": "https://open.spotify.com/intl-es/track/0ivarc4umuzp5I3J7lPDJc", "duracion": "3:09" },
        { "nombre": "Black Leather", "id": 10, "spotySong": "https://open.spotify.com/intl-es/track/2dsamqceYOKqLNx2Ch6Zhz", "duracion": "3:17" },
        { "nombre": "Arms Around a Memory", "id": 11, "spotySong": "https://open.spotify.com/intl-es/track/2BIeuwl9LLYBbnEuk1eF3p", "duracion": "3:42" },
        { "nombre": "I Don't Care About You", "id": 12, "spotySong": "https://open.spotify.com/intl-es/track/7dxQzEdNlOepXrOdw7C4mt", "duracion": "3:45" }
      ]
    },

    { nombre: "Chinese Democracy", año: 2008, coverImagen: "/assets/img/albums/chinese.webp", linkSpotify: "https://open.spotify.com/intl-es/album/0suNLpB9xraAv1FcdlITjQ", duracion:"72 minutos", sello:"Geffen Records", 
      canciones: [
        { "nombre": "Chinese Democracy", "id": 1, "spotySong": "https://open.spotify.com/intl-es/album/0suNLpB9xraAv1FcdlITjQ", "duracion": "4:43" },
        { "nombre": "Shackler's Revenge", "id": 2, "spotySong": "https://open.spotify.com/intl-es/track/5gGKxPqZrEe1yGNq3DPzoL", "duracion": "6:34" },
        { "nombre": "Better", "id": 3, "spotySong": "https://open.spotify.com/intl-es/track/3nW5v0Htr1ySk8czTJIA2V", "duracion": "4:48" },
        { "nombre": "Street of Dreams", "id": 4, "spotySong": "https://open.spotify.com/intl-es/track/2iFkNf2prxUIIGEOEK7yd1", "duracion": "4:43" },
        { "nombre": "If the World", "id": 5, "spotySong": "https://open.spotify.com/intl-es/track/5nVL5zL17GndMM1jt7VUme", "duracion": "3:27" },
        { "nombre": "There Was a Time", "id": 6, "spotySong": "https://open.spotify.com/intl-es/track/2PrmCyoClC4ulLJR42z74O", "duracion": "6:39" },
        { "nombre": "Catcher in the Rye", "id": 7, "spotySong": "https://open.spotify.com/intl-es/track/0NgiTxYAXk6iAJuMqFqgaC", "duracion": "5:45" },
        { "nombre": "Scraped", "id": 8, "spotySong": "https://open.spotify.com/intl-es/track/1Bm7cD88dROf4W45gozDFz", "duracion": "3:50" },
        { "nombre": "Riad N' the Bedouins", "id": 9, "spotySong": "https://open.spotify.com/intl-es/track/3Ipp7nTpEfpUYzT9OExVD0", "duracion": "4:10" },
        { "nombre": "Sorry", "id": 10, "spotySong": "https://open.spotify.com/intl-es/track/3iBECG8Q3PoPlQ6qHkQQtE", "duracion": "6:27" },
        { "nombre": "I.R.S.", "id": 11, "spotySong": "https://open.spotify.com/intl-es/track/7Btnx3rsOhiUtZ9KzA0ewY", "duracion": "4:19" },
        { "nombre": "Madagascar", "id": 12, "spotySong": "https://open.spotify.com/intl-es/track/02LharEqotu4zj644j0923", "duracion": "5:52" },
        { "nombre": "This I Love", "id": 13, "spotySong": "https://open.spotify.com/intl-es/track/2FEWcWHnDmGD6WSqpW4VYu", "duracion": "5:35" },
        { "nombre": "Prostitute", "id": 14, "spotySong": "https://open.spotify.com/intl-es/track/7oSmXhr5DtJ6GLX8tABkyY", "duracion": "6:38" }           
      ]
    }
  ]



 
  const Vinilos: IVinilos[] = [
    { titulo: "GNR Lies Dorado Firmado", precio: "$49999 ARS", productoImagen: "/assets/img/tienda/vinilos/lies-vinilo.png" },
    { titulo: "Use Your Ilussion I Dorado", precio: "$44999 ARS", productoImagen: "/assets/img/tienda/vinilos/uyi1-vinilo.png" },
    { titulo: "Use Your Ilussion II Dorado", precio: "$44999 ARS", productoImagen: "/assets/img/tienda/vinilos/uyi2-vinilo.png" },
    { titulo: "Apettite For Destruction Dorado", precio: "$54999 ARS", productoImagen: "/assets/img/tienda/vinilos/appetite-vinilo.png" }

  ]


  const navigate = useNavigate();  {

    const irCancion = (album: IAlbum) => {
      navigate("/canciones", { state: album });
      window.scrollTo(65, 0); 
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
              <img className='h-[390px] w-[510px] outline outline-white' src="/assets/img/landing/live6.webp" alt="" />
            </div>
  
            <div className='flex justify-between items-center pl-[12.5%] pr-[12.5%] gap-12'>
              <img className='h-[390px] w-[510px] outline outline-white' src="/assets/img/landing/live7.webp" alt="" />
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
  
            
              <Link className='flex justify-center gap-16' to = {"/tienda"}>{Vinilos.map((vinilo: IVinilos) =>
            
                < Vinilo
                  titulo={vinilo.titulo}
                  precio={vinilo.precio}
                  productoImagen={vinilo.productoImagen}
                />
              )}
             </Link>
  
            
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