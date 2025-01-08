import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
const Postcontacto:React.FC = () => {

  const navigate = useNavigate();
  
  useEffect(() => {
    const timeout = setTimeout(() => {  // Al pasar 10 segundos se navega a home
      navigate("/");
    }, 10000);
    return () => {  // El return del useEffect se ejecuta cuando la componente se desmonta (por ejemplo, navegando a otra pagina)
      clearTimeout(timeout);  // Evitamos el navigate limpiando el contador de la const timeout
    };
  }, []);  // Array vacio como dependencia para que se ejecute al montar la componente

   const [contador, setContador] = useState<number>(10);  // El contador que va a visualizar el usuario
   
   useEffect(( () => {
   setTimeout(() => {
    setContador(contador - 1);
   }, 1000)}
  ))
  

  return (
    <div className='min-h-screen h-auto w-full bg-black flex items-center justify-center'>
      <div className='flex flex-col text-center text-white gap-y-4'>
        <div className='flex gap-10 justify-center items-center '>
      <h1 className='font-bold  uppercase font-bebasneue text-[60px]'>¡Gracias por tu envío!</h1>
      <FaEnvelopeCircleCheck className="text-yellow-500 text-[60px] mb-1"/>
       </div>
      <h2 className='font-semibold uppercase text-[25px]'>Recibimos tu formulario y ya lo estamos procesando. Esperá nuestra respuesta en breve. </h2>
      <p className='text-[20px] pt-4'>Redirigiendote a la pagina principal en <span className='text-yellow-500'>{contador}</span> segundos.</p>
      </div>
    </div>
  )
}

export default Postcontacto