import { Link, useLocation } from 'react-router'
import { IVinilos } from '../type/IVinilos';
import { IRopa } from '../type/IRopa';
import { IAccesorios } from '../type/IAccesorios';
import { useState } from 'react';

const TiendaProducto = () => {

  const location = useLocation();
  const dato = location.state as IVinilos | IRopa | IAccesorios  // El dato (el producto entero) recibido por el location puede ser de 3 tipos (las 3 categorias de productos)
  
  
  const [imagenMostrada, setImagenMostrada] = useState(dato.productoImagen)  // El hook para ver las imagenes del producto. De valor inicial le ponemos la imagen principal
  
  const esVinilo = (dato as IVinilos).tipo == 'vinilos';  // La const esVinilo nos verifica si el dato es un vinilo

  const imagenClase = esVinilo  // El mitico operador ternario. Si esVinilo es true (osea, el producto es un vinilo) muestra la imagen con cierta resolucion, si no lo es lo muestra con otra (para accesorios y ropa)
    ? "h-[55vh] w-[70vh]"
    : "h-[75vh] w-[75vh]";
  
  return (
    <div className='min-h-screen bg-black pt-32 pb-12 flex gap-x-12 pl-20'>
    <div className='flex flex-col gap-y-[0.6px] border-white w-40 h-auto'>
  
    {dato.listaImagen.map((img) => (  // Mapeamos el array de imagenes que se va a mostrar a la izquiereq y nos sirve para mostrar la imagen central que queramos
      <img
        className="border h-[23%]"
        src={img.imagen}
        alt={img.imagen}
        onClick={() => setImagenMostrada(img.imagen)}  // Seteamos la imagen principal con la imagen a la que le hagamos click de este array
      />
    ))}
  </div>

        <div className='flex'>
        <img className={imagenClase} src={imagenMostrada} alt={imagenMostrada} />  {/* El valor del hook, que se va cambiando dependiendo de a que imagen del array a la que le hagamos click*/}
        </div>

        <div className='flex flex-col  text-white  max-w-[400px] min-w-[400px] break-words  '>
          <h1 className=' font-bold font-poppins text-[30px] uppercase'>{dato.titulo}</h1>
          <h2 className=' font-lato font-extralight mt-2 text-gray-300 text-[18px]'>{dato.precio}</h2>
         <Link to={`/tienda/${dato.tipo}/${dato.id}/compra`} className='mt-4' ><button className='border border-yellow-400 w-[50%] h-10 text-yellow-400 hover:text-black hover:bg-yellow-400 transition duration-300'><p className='font-bold'>COMPRAR</p></button></Link>
        <div className='flex flex-col border-t border-b mt-8 pt-2 pb-4'>
        <h1 className='text-white font-semibold flex text-[20px] justify-center uppercase'>Descripción</h1>
        <p className='mt-4 text-white'>{dato.descripcion} </p>
        <p className='mt-4 text-white'>{dato.detalles} </p>
        </div>

        </div>
        
        
        </div>
      

  )
  }

export default TiendaProducto