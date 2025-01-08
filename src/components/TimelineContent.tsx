import { FC, useEffect, useState } from 'react'
import { ITimeline } from '../type/ITimeline';

const TimelineContent:FC<ITimeline> = ({titulo, contenido, imagen, id}) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const element = document.getElementById(contenido);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 250;
          const isInViewport = rect.top <= window.innerHeight - offset && rect.bottom >= 0;
          setIsVisible(isInViewport);
        }
      };

      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);


      const containerStyle = id % 2 === 0 
      ? 'bg-[#f4ed33] border-2 border-white text-black' : 'bg-black border-2 border-[#f4ed33] text-white';
  return (

    
    
    <div className={`flex pl-[10%] pb-32  pt-28 h-[650px] border-none ${containerStyle}`}>

        <div id={contenido} className={`w-[70%] h-auto transition mr-10 ${containerStyle} duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-40'
        }`}>

            <img src={imagen} alt={imagen} className={`w-full h-full shadow-2xl ${containerStyle} }`}/>
        </div>


        <div className={`${containerStyle} border-none w-[70%] h-[90%] mr-40  transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-40'
        }`}>
            <h2 className='text-[26px] font-lato font-bold'>{titulo}</h2>
            <p className='text-[21px] mt-8  font-montserrat'>{contenido}</p>
        </div>
    </div>
    

   
  )
}

export default TimelineContent