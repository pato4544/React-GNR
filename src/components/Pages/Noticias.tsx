import React, { FC } from 'react'
import INoticias from '../../type/INoticias'
import Noticia from '../Noticia'


const Notice = () => {


  const listaNoticias: INoticias[] = [
    {titulo: "¡Únete a Nightrain en 2024 y gana más productos de GN'R!", fecha: "07.22.24", contenido: "", imagenNoticia: "/assets/img/new1.webp"},
    {titulo: "GUNS N' ROSES en Atlanta, GA para Music Midtow", fecha: "05.16.23", contenido: "", imagenNoticia: "/assets/img/new3.webp"},
    {titulo: "GUNS N' ROSES encabezará el Power Trip en Indio, CA", fecha: "03.30.23", contenido: "", imagenNoticia: "/assets/img/new4.webp"},
    {titulo: "Anuncio CD exclusivo de Nightrain: Guns N' Roses: London 1991", fecha: "03.29.23", contenido: "gika", imagenNoticia: "/assets/img/new5.webp"},
    {titulo: "¡Singapur! ¡No podemos esperar!", fecha: "07.19.22", contenido: "", imagenNoticia: "/assets/img/new7.webp"},
    {titulo: "¡Bangkok, volvemos para una noche increíble!", fecha: "07.18.22", contenido: "gika", imagenNoticia: "/assets/img/new8.webp"},
    {titulo: "¡GUNS N' ROSES LLEGA A JAPÓN EN 2022!", fecha: "06.22.22", contenido: "", imagenNoticia: "/assets/img/new9.webp"},
    {titulo: "¡GUNS N' ROSES VUELVE A MÉXICO! ", fecha: "06.14.22", contenido: "", imagenNoticia: "/assets/img/new6.webp"},
    {titulo: "¡Más shows de GN'R anunciados para Sudamérica!", fecha: "04.07.22", contenido: "gika", imagenNoticia: "/assets/img/new13.webp"}
]


  return (
    <>  
            
  
            <div className='bg-fixed min-h-screen pt-20 pb-10 w-full' style={{backgroundImage: ('url(assets/img/n7.png)')}}>
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
            </div>
    </>
  )
}


export default Notice