import { Link, useLocation } from 'react-router'
import { IVinilos } from '../type/IVinilos';
import { IRopa } from '../type/IRopa';
import { IAccesorios } from '../type/IAccesorios';

const TiendaProducto = () => {

  const location = useLocation();
  const dato = location.state as IVinilos | IRopa | IAccesorios
  
  
  
  
  
  return (
    <div className='min-h-screen bg-black pt-24 pb-20 flex gap-x-12 pl-20'>
    <div className='flex flex-col gap-y-[0.6px] border-white w-44 h-auto'>
  
    {dato.listaImagen.map((img) => (
      <img
        className="border h-[25%]"
        src={img.imagen}
        alt={img.imagen}
      />
    ))}
  </div>

        <div className='flex'>
        <img className='h-[80vh] w-[75vh]'src={dato.productoImagen} alt={dato.productoImagen} />
        </div>

        <div className='flex flex-col text-white  max-w-[400px] min-w-[400px] break-words gap-y-2 '>
          <h1 className='font-extralight text-[30px] uppercase'>{dato.titulo}</h1>
          <h2 className='font-lato font-semiboldd'>{dato.precio}</h2>
         <Link to={"/tienda/producto/compra"} ><button className='border border-yellow-400 w-[50%] h-10 text-yellow-400 hover:text-black hover:bg-yellow-400 transition duration-300'><p className='font-bold'>COMPRAR</p></button></Link>
        <div className='flex flex-col border-t border-b mt-5 pt-2 pb-4'>
        <h1 className='text-white'>DETALLES</h1>
        <p className='pt-4'>Descripciakjnknjknjknkjnkjnkjnjknjknjknkjnk </p>
        <p>Detallitos</p>
        </div>

        </div>
        
        
        </div>
      

  )
  }

export default TiendaProducto