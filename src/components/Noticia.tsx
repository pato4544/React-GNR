import { FC } from 'react'
import INoticias from '../type/INoticias'
import { useNavigate } from 'react-router'

const Noticia:FC<INoticias> = ({titulo, fecha, imagenNoticia, contenido}) => {


const navigate = useNavigate();  {/* La constante de nombre navigate nos va a dejar usar el hook useNavigate, el cual nos permite navegar a otras rutas programaticamente, sin necesidad de enlaces como <a> o <Link> 40*/}

const irNoticia = () => {

  const noticia = {titulo, fecha, imagenNoticia, contenido} // Aca le pasamos las props a la constante noticia  
  navigate("/noticias/1", {state: noticia} )  // Utilizamos el hook con su alias, poniendo ruta y en state le pasamos todos los datos de noticia que definimos arriba
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 65);
}
    return ( 
        <div onClick={() => irNoticia()} className='cursor-pointer flex flex-col w-[324px] h-[577px]  overflow-hidden group'> {/* Al hacer click en cualquier de los item noticia vamos a realizar la funcion irNoticia de mas arriba, que basicamente nos lleva a esa ruta*/}
          <div  className = 'h-[65%] transition-transform duration-300 ease-in-out group-hover:scale-105'>
          <img className='w-full h-full' src={imagenNoticia} alt={imagenNoticia} />
          </div>
          <div className='bg-black/75 pl-5 pt-5 h-[35%] group-hover:bg-yellow-400 transition duration-300 ease-in'>
            <h3 className='font-montserrat text-white font-bold'>{fecha}</h3>
            <h1 className='font-bebasneue text-[35px] text-white '>{titulo}</h1>
          </div>
        </div> 
    )
  }

export default Noticia