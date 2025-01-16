import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { RiBarricadeFill } from "react-icons/ri";

const Compra:React.FC = () => {

  const navigate = useNavigate();
  
  useEffect((() => {
    const timeout = setTimeout(() => {
      navigate("/")
    }, 10000);
    return () => { 
      clearTimeout(timeout);
    }
  }
  ), [])

   const [contador, setContador] = useState<number>(10);
   
   useEffect(( () => {
   setTimeout(() => {
    setContador(contador - 1);
   }, 1000)}
  ),)
  return (
    <div className='min-h-screen h-auto w-full bg-black flex items-center justify-center'>
      <div className='flex flex-col text-center text-white gap-y-4'>
        <div className="flex gap-10 justify-center items-center">
      <h1 className='font-bold uppercase font-bebasneue text-[60px]'>¡Estamos en mantenimiento!</h1>
      <RiBarricadeFill className="text-yellow-500 text-[60px] mb-2"/>
      </div>
      <h2 className="font-semibold uppercase text-[25px]">Gracias por tu paciencia, estamos afinando todo.</h2>
      <p className='text-[20px] pt-4'>Redirigiendote a la pagina principal en <span className='text-yellow-500'>{contador}</span> segundos.</p>
      </div>
    </div>
  )
}

export default Compra