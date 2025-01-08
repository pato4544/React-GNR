import { FC } from 'react'
import { IVinilos } from '../type/IVinilos';
import { useNavigate } from 'react-router';



const Vinilo:FC<IVinilos> = ({productoImagen, titulo, precio, descripcion, detalles, tipo, listaImagen, id}) => {

  const navigate = useNavigate();
const irProducto = () => {
  const vinilo = {titulo, precio, descripcion, productoImagen, detalles, tipo, listaImagen, id}  
  navigate(`/tienda/${tipo}/${id}`, {state: vinilo})
  window.scrollTo(65, 0); 
}

  return (
   
    <article className='flex flex-col items-center'>
        <img onClick={() => irProducto()} className='cursor-pointer w-[300px] h-[220px] transition-all duration-300 hover:shadow-[0px_0px_10px_5px_rgba(255,223,0,0.6)]' src={productoImagen} alt={productoImagen} />
        <h2 onClick={() => irProducto()} className='cursor-pointer text-white font-poppins text-[18px] mt-3' >{titulo}</h2>
        <p onClick={() => irProducto()} className='cursor-pointer text-white font-lato'>{precio}</p>
    </article>
  
  )
}

export default Vinilo