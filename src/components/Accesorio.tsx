import { FC } from 'react'
import { IAccesorios } from '../type/IAccesorios'
import { useNavigate } from 'react-router';

const Accesorio:FC<IAccesorios> = ({titulo, precio, productoImagen, listaImagen, detalles, descripcion, tipo, id}) => {


  const navigate = useNavigate();
  const irProducto = () => {
    const accesorio = {titulo, precio, productoImagen, listaImagen, detalles, descripcion, tipo, id}
    navigate(`/tienda/${tipo}/${id}`, {state: accesorio})  // El accesorio con todas las props lo pasamos como state en el navigate para agarrarlo con un location 
    window.scrollTo(65, 0); 
  }

  return (
    <article className='flex flex-col items-center'>
      <div className='overflow-hidden border-4'>
        <img onClick={() => irProducto()} className='h-[300px] w-[280px]  transition-transform duration-300 ease-in-out hover:scale-125 ' src={productoImagen} alt={productoImagen} />
       </div> 
        <h2 className='cursor-pointer text-white font-poppins text-[18px] mt-3'>{titulo}</h2>
        <p className='cursor-pointer text-white font-lato'>{precio}</p>
    </article>
  )
}

export default Accesorio