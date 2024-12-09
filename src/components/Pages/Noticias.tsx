import INoticias from '../../type/INoticias'
import Noticia from '../Noticia'


const Notice = () => {


  const listaNoticias: INoticias[] = [
    {titulo: "¡Únete a Nightrain en 2024 y gana más productos de GN'R!", fecha: "07.22.24", contenido:"Con el lanzamiento del nuevo tema de la banda, The General, hemos creado cajas de música de edición limitada con el single. Las paquetes estándar incluyen un abrelatas oficial de Nightrain con funda. Los paquetes premium incluyen el abrelatas + una remera de manga larga de Nightrain y una funda impermeable para celular. Además, habrá una sorpresa: ¡un lote limitado de cajas de música con otra canción de la banda! Solo los miembros seleccionados de Nightrain que compren el paquete premium podrán ganar una. ¡Sumate al Nightrain hoy mismo!", imagenNoticia: "/assets/img/noticias/new1.webp"},
    {titulo: "GUNS N' ROSES en Atlanta, GA para Music Midtow", fecha: "05.16.23", contenido: "Los Guns N' Roses suman un nuevo show a su gira mundial del 2023: el 17 de septiembre desde Music Midtown, en Piedmont Park, Atlanta, GA. No habrá preventa exclusiva para miembros de Nightrain, pero todos pueden pedir su código de preventa en el sitio del festival. La preventa comenzará el 18 de mayo a las 10 am hora local. ¡No te lo podés perder!", imagenNoticia: "/assets/img/noticias/new2.webp"},
    {titulo: "GUNS N' ROSES encabezará el Power Trip en Indio, CA", fecha: "03.30.23", contenido: "Este otoño, el Empire Polo Club en Indio, CA, será el escenario de POWER TRIP, un evento histórico de tres días, del 6 al 8 de octubre, que reunirá a seis bandas legendarias: Guns N' Roses y Iron Maiden el viernes, AC/DC y Ozzy Osbourne el sábado, y Metallica y Tool el domingo. ¡Un fin de semana inolvidable para los fanáticos del rock!", imagenNoticia: "/assets/img/noticias/new3.webp"},
    {titulo: "Anuncio CD exclusivo de Nightrain: Guns N' Roses: London 1991", fecha: "03.29.23", contenido: "Guns N' Roses: London 1991 incluye canciones remasterizadas de su icónico show en Wembley Stadium el 31 de agosto de 1991: Bad Obsession, Live And Let Die, Voodoo Child (Slight Return) / Civil War / Voodoo Child (Slight Return), You Could Be Mine, Only Women Bleed / Knockin’ On Heaven’s Door, Estranged. ¡Un álbum que captura la esencia de esa histórica actuación!", imagenNoticia: "/assets/img/noticias/new4.webp"},
    {titulo: "¡Singapur! ¡No podemos esperar!", fecha: "07.19.22", contenido: "Guns N' Roses ha añadido una nueva fecha en Singapur. La banda se presentará en el Singapore National Stadium el 12 de noviembre. Los miembros de Nightrain tienen acceso anticipado a las entradas, y también se ofrecerán experiencias VIP exclusivas para el evento. ¡No te lo podés perder!", imagenNoticia: "/assets/img/noticias/new5.webp"},
    {titulo: "¡Bangkok, volvemos para una noche increíble!", fecha: "07.18.22", contenido: "Guns N' Roses sumó una nueva fecha en Bangkok, Tailandia, el 9 de noviembre de 2022 en el SCG Stadium. No te pierdas la oportunidad de verlos en vivo. Los miembros de Nightrain tienen acceso anticipado a las entradas. ¡Asegurate de conseguir tu lugar!", imagenNoticia: "/assets/img/noticias/new6.webp"},
    {titulo: "¡GUNS N' ROSES LLEGA A JAPÓN EN 2022!", fecha: "06.22.22", contenido: "Guns N' Roses ha añadido dos nuevos shows en Japón como parte de su World Tour 2022. No te pierdas la oportunidad de verlos en el Saitama Super Arena el 5 y 6 de noviembre. Los miembros activos de Nightrain podrán obtener su código de preventa único al iniciar sesión en la página de la gira. ¡Asegurá tu entrada antes que nadie!", imagenNoticia: "/assets/img/noticias/new7.webp"},
    {titulo: "¡GUNS N' ROSES VUELVE A MÉXICO! ", fecha: "06.14.22", contenido: "Guns N' Roses se presentará en México este otoño en las siguientes ciudades: el 15 de octubre en Mérida (Xmatkuil), el 18 de octubre en Guadalajara (Estadio Akron), el 21 de octubre en Ciudad de México (Estadio Ciudad de los Deportes) y el 23 de octubre en Monterrey (Estadio Mobil Super). Las entradas ya están a la venta en las plataformas correspondientes.", imagenNoticia: "/assets/img/noticias/new8.webp"},
    {titulo: "¡Más shows de GN'R anunciados para Sudamérica!", fecha: "04.07.22", contenido: "¡Guns N' Roses suma más fechas en Sudamérica! La venta anticipada para Sao Paulo, BR (Allianz Parque) arranca el 7 de abril. Pronto se sumarán Recife, Goiania, Belo Horizonte y Bogotá. Los miembros activos de Nightrain obtendrán su código exclusivo al ingresar. Para más detalles sobre fechas y venta pública, revisá gunsnroses.com/tour. Si todavía no te uniste, mirá los nuevos paquetes de Nightrain 2022 y sumate a la gira.", imagenNoticia: "/assets/img/noticias/new9.webp"}
]


  return (
    <>  
            
  
            <div className='bg-fixed min-h-screen pt-20 pb-10 w-full flex flex-col items-center' style={{backgroundImage: ('url(/assets/img/noticias/bg-noticias.png)')}}>
              <div className='flex justify-center'>
                  <div className='grid grid-cols-3 gap-12  '>
              {listaNoticias.map((noticia: INoticias) =>

                < Noticia 
                  titulo={noticia.titulo}
                  fecha={noticia.fecha}
                  contenido={noticia.contenido}
                  imagenNoticia={noticia.imagenNoticia}

                />
              )}
                </div>
              </div>
              <button className='bg-yellow-400/90 w-[14%] h-12 mt-20 mb-20'>
                <h2 className='font-lato text-[20px] font-semibold text-white hover:scale-110 transition duration-300 '>MAS NOTICIAS</h2>
              </button>
            </div>
    </>
  )
}


export default Notice