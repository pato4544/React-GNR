import { IAccesorios } from "../../type/IAccesorios"
import IRopa from "../../type/IRopa"
import IVinilos from "../../type/IVinilos"
import Ropita from "../Ropita"
import Vinilo from "../Vinilo"
import Accesorio from "../Accesorio"
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Dispatch, SetStateAction, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Tienda = () => {
  
  const itemsPerPage = 4;

  const [viniloPage, setViniloPage] = useState<number>(0); 
  const [ropaPage, setRopaPage] = useState<number>(0); 
  const [accesorioPage, setAccesorioPage] = useState<number>(0);

  const Vinilos: IVinilos[] = [
    { titulo: "GNR Lies Dorado Firmado", precio: "$49999 ARS", productoImagen: "/assets/img/tienda/vinilos/lies-vinilo.png" },
    { titulo: "Use Your Ilussion I Dorado", precio: "$44999 ARS", productoImagen: "/assets/img/tienda/vinilos/uyi1-vinilo.png" },
    { titulo: "Use Your Ilussion II Dorado", precio: "$44999 ARS", productoImagen: "/assets/img/tienda/vinilos/uyi2-vinilo.png" },
    { titulo: "Apettite For Destruction Dorado", precio: "$54999 ARS", productoImagen: "/assets/img/tienda/vinilos/appetite-vinilo.png" },
    { titulo: "Apettite For Destruction Dorado", precio: "$54999 ARS", productoImagen: "/assets/img/tienda/vinilos/appetite-vinilo.png" },
    { titulo: "Apettite For Destruction Dorado", precio: "$54999 ARS", productoImagen: "/assets/img/tienda/vinilos/appetite-vinilo.png" },
    { titulo: "Apettite For Destruction Dorado", precio: "$54999 ARS", productoImagen: "/assets/img/tienda/vinilos/appetite-vinilo.png" },
    { titulo: "Apettite For Destruction Dorado", precio: "$54999 ARS", productoImagen: "/assets/img/tienda/vinilos/appetite-vinilo.png" },
    { titulo: "Apettite For Destruction Dorado", precio: "$54999 ARS", productoImagen: "/assets/img/tienda/vinilos/appetite-vinilo.png" },
  ]

  const Ropa: IRopa[] = [
    { titulo: "Campera Verde", precio: "$40000 ARS", productoImagen: "/assets/img/tienda/ropa/armygreen.webp", imagenReversa: "assets/img/tienda/ropa/armygreenreverse.webp" },
    { titulo: "Remera Calavera", precio: "$40000 ARS", productoImagen: "/assets/img/tienda/ropa/tskull.webp", imagenReversa: "assets/img/tienda/ropa/tskullreverse.webp" },
    { titulo: "Camiseta UYI Tour", precio: "$40000 ARS", productoImagen: "/assets/img/tienda/ropa/tuyi.webp", imagenReversa: "assets/img/tienda/ropa/tuyireverse.webp" },
    { titulo: "Chaqueta Marron", precio: "$20000 ARS", productoImagen: "/assets/img/tienda/ropa/tjacket.webp", imagenReversa: "/assets/img/tienda/ropa/tjacketreverse.webp" },
    { titulo: "Remera Appetite", precio: "$20000 ARS", productoImagen: "/assets/img/tienda/ropa/tapettite.webp", imagenReversa: "/assets/img/tienda/ropa/tapettitereverse.webp" },
    { titulo: "Chaqueta Marron", precio: "$20000 ARS", productoImagen: "/assets/img/tienda/ropa/ts2.webp", imagenReversa: "/assets/img/tienda/ropa/ts2r.webp" },
    { titulo: "Chaqueta Marron", precio: "$20000 ARS", productoImagen: "/assets/img/tienda/ropa/ts3.webp", imagenReversa: "/assets/img/tienda/ropa/ts3r.webp" },
    { titulo: "Chaqueta Marron", precio: "$20000 ARS", productoImagen: "/assets/img/tienda/ropa/ts4.webp", imagenReversa: "/assets/img/tienda/ropa/ts4r.webp" },
    { titulo: "Chaqueta Marron", precio: "$20000 ARS", productoImagen: "/assets/img/tienda/ropa/ts5.webp", imagenReversa: "/assets/img/tienda/ropa/ts5r.webp" },
    { titulo: "Chaqueta Marron", precio: "$20000 ARS", productoImagen: "/assets/img/tienda/ropa/ts6.webp", imagenReversa: "/assets/img/tienda/ropa/ts6r.webp" },
    { titulo: "Chaqueta Marron", precio: "$20000 ARS", productoImagen: "/assets/img/tienda/ropa/ts7.webp", imagenReversa: "/assets/img/tienda/ropa/ts7r.webp" },
    { titulo: "Chaqueta Marron", precio: "$20000 ARS", productoImagen: "/assets/img/tienda/ropa/ts8.webp", imagenReversa: "/assets/img/tienda/ropa/ts8r.webp" }
    

  ]

  const Accesorios: IAccesorios[] = [
    { titulo: "Funko Axl", precio: "50000 ARS", productoImagen: "/assets/img/tienda/accesorios/taxl.webp"},
    { titulo: "Funko Slash", precio: "50000 ARS", productoImagen: "/assets/img/tienda/accesorios/tslash.webp"},
    { titulo: "Funko Duff", precio: "50000 ARS", productoImagen: "/assets/img/tienda/accesorios/tduff.webp"},
    { titulo: "Encendedor Guns", precio: "50000 ARS", productoImagen: "/assets/img/tienda/accesorios/tzipo.webp"},
    { titulo: "Gorra", precio: "50000 ARS", productoImagen: "/assets/img/tienda/accesorios/tgorra.webp"},
    { titulo: "Gorra", precio: "50000 ARS", productoImagen: "/assets/img/tienda/accesorios/tgorra2.webp"},
    { titulo: "Gorra", precio: "50000 ARS", productoImagen: "/assets/img/tienda/accesorios/tgorra3.webp"},
    { titulo: "Gorra", precio: "50000 ARS", productoImagen: "/assets/img/tienda/accesorios/tgorra4.webp"},
    { titulo: "Tabla para cortar", precio: "50000 ARS", productoImagen: "/assets/img/tienda/accesorios/ttabla.webp"},
    { titulo: "Almohada ", precio: "50000 ARS", productoImagen: "/assets/img/tienda/accesorios/talmohada.webp"},
    { titulo: "Vaso whisky", precio: "50000 ARS", productoImagen: "/assets/img/tienda/accesorios/tvaso.webp"},
    { titulo: "Aun no se", precio: "50000 ARS", productoImagen: "/assets/img/tienda/accesorios/tgorra4.webp"}

  ]

  const totalViniloPages = Math.ceil(Vinilos.length / itemsPerPage); 
  const totalRopaPages = Math.ceil(Ropa.length / itemsPerPage); 
  const totalAccesorioPages = Math.ceil(Accesorios.length / itemsPerPage);

  // Funciones de paginación para cada categoría
  const nextPage = (setPage: Dispatch<SetStateAction<number>>, totalPages: number) => { 
    setPage((prev) => (prev + 1) % totalPages); 
  };

  const prevPage = (setPage: Dispatch<SetStateAction<number>>, totalPages: number) => { 
    setPage((prev) => (prev - 1 + totalPages) % totalPages); 
  };

  // Función para obtener los ítems visibles
  const getVisibleItems = (page: number, items: any[]) => { 
    const startIndex = page * itemsPerPage; 
    return items.slice(startIndex, startIndex + itemsPerPage); 
  };


  return (
    <div className="min-h-screen bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(190,178,35,1)_100%)] ;">

      <div className="pt-20">
      <h1 className='text-white text-center items-center font-bebasneue text-[55px] '>VINILOS</h1>
      <div className="flex justify-center items-center gap-2 pt-10">
       
      <button onClick={() => prevPage(setViniloPage, totalViniloPages)} className="h-[50px]  rounded-full w-auto mb-10" ><p className=" h-full w-full text-[35px] text-white hover:text-yellow-400 hover:transition-transform duration-300  hover:scale-110"><FaArrowAltCircleLeft/></p></button>
      <AnimatePresence mode="wait"/>
      <motion.div key={viniloPage} className="flex gap-6" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 1 }}>
        
       {getVisibleItems(viniloPage, Vinilos).map((vinilo, index) => ( 

          < Vinilo
            key={index}
            titulo={vinilo.titulo}
            precio={vinilo.precio}
            productoImagen={vinilo.productoImagen}
          />
        ))}
        </motion.div>
        <AnimatePresence/>
        
      
        <button  onClick={() => nextPage(setViniloPage, totalViniloPages)}  className="h-[50px]  rounded-full w-auto mb-10 " ><p className=" h-full w-full text-[35px] text-white hover:text-yellow-400 hover:transition-transform duration-300  hover:scale-110"><FaArrowAltCircleRight/></p></button>
        
      </div>
     </div>
     
      <div className="mt-20 ">
      <h1 className='text-white text-center  items-center font-bebasneue text-[55px]'>ROPA</h1>
      <div className="flex justify-center gap-2 pt-10">
      <button onClick={() => prevPage(setRopaPage, totalRopaPages)}  className="h-[50px]  rounded-full w-auto mt-32" ><p className="h-full w-full text-[35px] text-white hover:text-yellow-400 hover:transition-transform duration-300  hover:scale-110"><FaArrowAltCircleLeft/></p></button>
      <AnimatePresence mode="wait"/>
      <motion.div key={ropaPage} className="flex gap-4" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 1 }}>
        
       {getVisibleItems(ropaPage, Ropa).map((ropa, index) => ( 

          < Ropita
            key={index}
            titulo={ropa.titulo}
            precio={ropa.precio}
            productoImagen={ropa.productoImagen}
            imagenReversa={ropa.imagenReversa}
          />
        ))}
        </motion.div>
        <AnimatePresence/>
         <button onClick={() => nextPage(setRopaPage, totalRopaPages)} className="h-[50px]  rounded-full w-auto mt-32" ><p className="h-full w-full text-[35px] text-white hover:text-yellow-400 hover:transition-transform duration-300  hover:scale-110"><FaArrowAltCircleRight/></p></button>
      </div>
      </div>
      
      <div className="mt-20 pb-40">
      <h1 className='text-white text-center items-center font-bebasneue text-[55px]'>ACCESORIOS</h1>
      <div className="flex justify-center gap-2 pt-10">
      <button onClick={() => prevPage(setAccesorioPage, totalAccesorioPages)} className="h-[50px] rounded-full w-auto mt-36 " ><p className="h-full w-full text-[35px] text-white hover:text-yellow-400 hover:transition-transform duration-300  hover:scale-110"><FaArrowAltCircleLeft/></p></button>
      <AnimatePresence mode="wait"/>
      <motion.div key={accesorioPage} className="flex gap-4" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 1 }}>
        
       {getVisibleItems(accesorioPage, Accesorios).map((accesorio, index) => ( 
          < Accesorio
            key={index}
            titulo={accesorio.titulo}
            precio={accesorio.precio}
            productoImagen={accesorio.productoImagen}
          />
        ))}
        </motion.div>
        <AnimatePresence/>
        <button onClick={() => nextPage(setAccesorioPage, totalAccesorioPages)} className="h-[50px] rounded-full w-auto mt-36" ><p className=" h-full w-full text-[35px] text-white hover:text-yellow-400 hover:transition-transform duration-300  hover:scale-110"><FaArrowAltCircleRight/></p></button>
      </div>
      </div>






    </div>
  )
}

export default Tienda