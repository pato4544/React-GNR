import { useLocation, useParams } from "react-router";
import { IAlbum } from "../type/IAlbum";
import { useEffect, useRef } from "react";

const Canciones = () => {
  const location = useLocation();
  const album = location.state as IAlbum
  const nombreCancionRef = useRef<HTMLParagraphElement>(null);


  const { id } = useParams();

  const cancion = album.canciones.find(c => c.id === parseInt(id || "0"));

  useEffect(() => {
    // Desplazarse hacia el elemento después de que la canción haya cambiado
    if (nombreCancionRef.current) {
      nombreCancionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [cancion?.id]);
  return (
    <div>
      <div>
        <p ref={nombreCancionRef}>{cancion?.id}</p>
      </div>


      <div className="flex mt-8 pb-16">



      <div className = "w-[40%] bg-[50%_0%] h-auto bg-repeat-y brightness-90 opacity-80 " style={{backgroundImage: 'url(/assets/img/fondofacha.webp)'}}/>
  
       
      
        <div className="text-white h-auto w-[60%] flex justify-center ">
        <hr className="border-l-4  border-yellow-500 min-h-full" />
          <div className="w-full pt-6 pl-8 bg-guns-red">
          <p className="font-lato font-semibold text-[30px] text-center uppercase">{cancion?.nombre}</p>
          <div className="mt-12 pl-10 text-white text-[18px]">
            {cancion?.letra?.split(/(@{1,2})/).map((linea) => {
              if (linea === '@') {
                return (<div className="mt-2"></div>)// Salto pequeño
              } else if (linea === '@@') {
                return (<div className="mt-16"></div>)
              } else {
                return <p className="text-left">{linea}</p>;
              }
            })}

          </div>
          </div>
          
        </div>

 
      </div>

    </div>
  );

};

export default Canciones;
