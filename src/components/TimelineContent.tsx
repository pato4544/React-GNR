import { FC, useEffect, useState } from 'react'
import ITimeline from '../type/ITimeline'

const TimelineContent:FC<ITimeline> = ({titulo, contenido, imagen}) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const element = document.getElementById(titulo);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
          setIsVisible(isInViewport);
        }
      };

      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Comprobamos si es visible al cargar la página
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);






  return (

    <div>

    {/* <div className='border border-yellow-600 flex flex-col text-white'>
    <h1 className='font-bebasneue'>Timeline</h1>
    <h2 className='font-rowdies'>Guns N’ Roses no solo cambió la música, también dejó una marca indeleble en la cultura popular. Sus canciones traspasaron fronteras y sus shows quedaron grabados en la memoria de millones. Con actitud desafiante y energía arrolladora, esta banda definió una era y sigue siendo un referente del rock. Acá te contamos, en una línea de tiempo, los momentos más icónicos que transformaron a GN’R en una leyenda viva. ¡Seguí leyendo y reviví la historia de estos gigantes del rock!</h2>
    </div> */}


    <div className='flex pl-[15%] border border-blue-500 pb-40 pt-40'>

        <div id={titulo} className={`border border-emerald-800 transition mr-20 duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-40'
        }`}>

            <img className='w-[700px] h-[80vh]' src={imagen} alt={imagen} />
        </div>


        <div className={`text-white border w-[50%] mr-20  border-amber-500 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-40'
        }`}>
            <h1 className='text-[22px] font-lato font-bold'>{titulo}</h1>
            <p className='text-[22px] pt-10 font-montserrat'>{contenido}</p>
        </div>
    </div>

    </div>
  )
}

export default TimelineContent