import { useLocation } from 'react-router';
import INoticias from '../type/INoticias';

const Noticiaid = () => {

    const location = useLocation(); // Creamos la constante "location", que nos va a servir para llamar al objeto Location, el cual es traido por el hook de useLocation
    const noticia = location.state as INoticias; // Utilizamos la prop state del objeto location para asignarle a la constante noticia el tipo de datos de la interfaz INoticias, y que de esa manera pueda acceder a sus props

    {/* En criollo, lo que te permiten las dos lineas de arriba es usar las props de una interfaz rapidamente*/ }
    
  return (
    <div className='w-full flex justify-center bg-fixed' style={{backgroundImage: ('url(/assets/img/noticias/bg-noticias.png)')}}>
        <div className='min-h-screen flex justify-center pt-20 pb-10'>
            <div className='w-[600px] bg-black/70 flex flex-col '>
            <div className='h-auto pl-2'>
                <h2 className='font-montserrat text-white font-bold text-[20px]'>{noticia.fecha}</h2>
                <h1 className='font-bebasneue text-[40px] text-white'>{noticia.titulo}</h1>
                </div>
                <img className="w-full h-auto" src={noticia.imagenNoticia} alt="" />
                <p className='pt-4 font-roboto text-[16px] text-white h-[30%]'>{noticia.contenido}</p>
            </div>
        </div>
    </div>

  )
}

export default Noticiaid