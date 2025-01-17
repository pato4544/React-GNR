import { IAccesorios } from "../../type/IAccesorios"
import { IRopa } from "../../type/IRopa"
import { IVinilos } from "../../type/IVinilos"  // Ahora deja importar bien porque no exporte la interfaz con el default
import Ropita from "../Ropita"
import Vinilo from "../Vinilo"
import Accesorio from "../Accesorio"
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Dispatch, SetStateAction, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Tienda = () => {
  
  const itemsPerPage = 3;

  const [viniloPage, setViniloPage] = useState<number>(0); 
  const [ropaPage, setRopaPage] = useState<number>(0); 
  const [accesorioPage, setAccesorioPage] = useState<number>(0);

  const Vinilos: IVinilos[] = [
    { id: 1, titulo: "GNR Lies Dorado Firmado", tipo: "vinilos", precio: "$99999 ARS", descripcion:"Realzá tu colección con este cuadro que incluye el disco de oro firmado de GNR Lies de los Guns N' Roses. Un homenaje perfecto al legado de la banda.", detalles:"Dimensiones 50 x 70 cm. Material: Marco de madera con vidrio protector. Incluye sistema de montaje.", productoImagen: "/assets/img/tienda/vinilos/lies-vinilo.png", listaImagen: [
      {imagen:"/assets/img/tienda/vinilos/lies-vinilo.png"},
    ] },
    { id: 2, titulo: "Use Your Ilussion I Dorado", tipo: "vinilos", precio: "$109999 ARS", descripcion:"Realzá tu colección con este cuadro que incluye el disco de oro de Use Your Illusion I de los Guns N' Roses. Un homenaje perfecto al legado de la banda.", detalles:"Dimensiones 50 x 70 cm. Material: Marco de madera con vidrio protector. Incluye sistema de montaje.", productoImagen: "/assets/img/tienda/vinilos/uyi1posta.webp", listaImagen: [
      {imagen:"/assets/img/tienda/vinilos/uyi1posta.webp"},
    ] },
    { id: 3, titulo: "Use Your Ilussion II Dorado", tipo: "vinilos", precio: "$109999 ARS", descripcion:"Realzá tu colección con este cuadro que incluye el disco de oro de Use Your Illusion II de los Guns N' Roses. Un homenaje perfecto al legado de la banda.", detalles:"Dimensiones 50 x 70 cm. Material: Marco de madera con vidrio protector. Incluye sistema de montaje.", productoImagen: "/assets/img/tienda/vinilos/uyi2-vinilo.png", listaImagen: [
      {imagen:"/assets/img/tienda/vinilos/uyi2-vinilo.png"},
    ] },
    { id: 4, titulo: "Apettite For Destruction Dorado", tipo: "vinilos", precio: "$119999 ARS", descripcion:"Realzá tu colección con este cuadro que incluye el disco de oro de Apettite For Destruction de los Guns N' Roses. Un homenaje perfecto al legado de la banda.", detalles:"Dimensiones 50 x 70 cm. Material: Marco de madera con vidrio protector. Incluye sistema de montaje.", productoImagen: "/assets/img/tienda/vinilos/appetite-vinilo.png", listaImagen: [
      {imagen:"/assets/img/tienda/vinilos/appetite-vinilo.png"},
    ] }
  ]

  const Ropa: IRopa[] = [
    { id: 1, titulo: "Campera oversize verde militar", tipo: "ropa", precio: "$125000 ARS", descripcion: "La campera verde militar de GN'R es de sarga de algodón, con gráficos estampados y parches tejidos.", productoImagen: "/assets/img/tienda/ropa/armygreen.webp", imagenReversa: "assets/img/tienda/ropa/armygreenreverse.webp", listaImagen: [
      {imagen:"/assets/img/tienda/ropa/armygreen.webp"},
      {imagen:"/assets/img/tienda/ropa/armygreenreverse.webp"},
    ] },
    { id: 2, titulo: "Camiseta de gira 1991 Skull negra", tipo: "ropa", precio: "$30000 ARS", descripcion: "Camiseta negra de manga corta teñida con pigmento, con arte de Guns N' Roses impreso en el frente. En la espalda, tiene el arte icónico de la banda y las fechas de la gira por EE. UU. de 1991.", detalles: "100% algodón, teñida con pigmento para un acabado vintage.",productoImagen: "/assets/img/tienda/ropa/tskull.webp", imagenReversa: "assets/img/tienda/ropa/tskullreverse.webp", listaImagen: [
      {imagen:"/assets/img/tienda/ropa/tskull.webp"},
      {imagen:"/assets/img/tienda/ropa/tskullreverse.webp"},
    ] },
    { id: 3, titulo: "Camiseta Use Your Illusion", tipo: "ropa", precio: "$40000 ARS", descripcion: "Camiseta de gira Use Your Illusion '91-'92 con teñido en espiral, con un lado amarillo y el otro azul. La camiseta tiene el arte icónico del álbum de la gira.", productoImagen: "/assets/img/tienda/ropa/tuyi.webp", imagenReversa: "assets/img/tienda/ropa/tuyireverse.webp", listaImagen: [
      {imagen:"/assets/img/tienda/ropa/tuyi.webp"},
      {imagen:"/assets/img/tienda/ropa/tuyireverse.webp"},
    ] },
    { id: 4, titulo: "Campera acolchonada GN'R", tipo: "ropa", precio: "$150000 ARS", descripcion: "Campera acolchonada negra con botones, con el icónico logo de cruz al frente y el emblema de Guns N' Roses en la espalda. El forro interior tiene un estampado repetido del logo en rojo.", productoImagen: "/assets/img/tienda/ropa/tjacket.webp", imagenReversa: "/assets/img/tienda/ropa/tjacketreverse.webp", listaImagen: [
      {imagen:"/assets/img/tienda/ropa/tjacket.webp"},
      {imagen:"/assets/img/tienda/ropa/tjacketreverse.webp"},
    ] },
    { id: 5, titulo: "Camiseta Appetite For Destruction", tipo: "ropa", precio: "$35000 ARS", descripcion: "Camiseta gris lavada de manga corta con la imagen icónica de la cruz y la cadena, junto al texto [Guns N' Roses] y cadenas pintadas en relieve en el frente. En la espalda, tiene el texto [Appetite for Destruction] y [tour 1988] en azul, también en pintura en relieve.", productoImagen: "/assets/img/tienda/ropa/tapettite.webp", imagenReversa: "/assets/img/tienda/ropa/tapettitereverse.webp", listaImagen: [
      {imagen:"/assets/img/tienda/ropa/tapettite.webp"},
      {imagen:"/assets/img/tienda/ropa/tapettitereverse.webp"},
    ] },
    { id: 6, titulo: "Camiseta All Over Print", tipo: "ropa", precio: "$40000 ARS", descripcion: "Camiseta negra de manga corta con estampado total de calaveras y tibias cruzadas rojas y blancas alternadas, y el clásico logo de Guns N' Roses en el frente. En la espalda, tiene el texto GN'R!.", productoImagen: "/assets/img/tienda/ropa/ts2.webp", imagenReversa: "/assets/img/tienda/ropa/ts2r.webp", listaImagen: [
      {imagen:"/assets/img/tienda/ropa/ts2.webp"},
      {imagen:"/assets/img/tienda/ropa/ts2r.webp"},
    ] },
    { id: 7, titulo: "Camiseta negra Ritz Theatre", tipo: "ropa", precio: "$30000 ARS", descripcion: "Camiseta negra de manga corta con un diseño que resalta el infame show sorpresa Live in New York, que dio inicio a su gira más larga de todas.", detalles: "100% algodón", productoImagen: "/assets/img/tienda/ropa/ts3.webp", imagenReversa: "/assets/img/tienda/ropa/ts3r.webp", listaImagen: [
      {imagen:"/assets/img/tienda/ropa/ts3.webp"},
      {imagen:"/assets/img/tienda/ropa/ts3r.webp"},
    ] },
    { id: 8, titulo: "Camiseta Perhaps", tipo: "ropa", precio: "$30000 ARS", descripcion: "Camiseta negra de manga corta con el arte del single Perhaps impreso en el frente. En la espalda, tiene el icónico logo de Guns N' Roses.", productoImagen: "/assets/img/tienda/ropa/ts4.webp", imagenReversa: "/assets/img/tienda/ropa/ts4r.webp", listaImagen: [
      {imagen:"/assets/img/tienda/ropa/ts4.webp"},
      {imagen:"/assets/img/tienda/ropa/ts4r.webp"},
    ] },
    { id: 9, titulo: "Camiseta blanca Ritz Theatre", tipo: "ropa", precio: "$30000 ARS", descripcion: "Camiseta blanca de manga corta con un diseño que resalta el infame show sorpresa Live in New York, que dio inicio a su gira más larga. Los elementos del diseño se revelan al exponerse a la luz solar. ", productoImagen: "/assets/img/tienda/ropa/ts5.webp", imagenReversa: "/assets/img/tienda/ropa/ts5r.webp", listaImagen: [
      {imagen:"/assets/img/tienda/ropa/ts5.webp"},
      {imagen:"/assets/img/tienda/ropa/ts5r.webp"},
    ] },
    { id: 10, titulo: "Jersey Bullet", tipo: "ropa", precio: "$75000 ARS", descripcion: "Jersey de manga corta con el gráfico del logo de Guns N' Roses. Presenta parches cosidos a mano con el número 85 en el frente y la espalda.", productoImagen: "/assets/img/tienda/ropa/ts6.webp", imagenReversa: "/assets/img/tienda/ropa/ts6r.webp", listaImagen: [
      {imagen:"/assets/img/tienda/ropa/ts6.webp"},
      {imagen:"/assets/img/tienda/ropa/ts6r.webp"},
    ] },
    { id: 11, titulo: "Camiseta Aniversario UYI", tipo: "ropa", precio: "$30000 ARS", descripcion: "En honor al 30º aniversario de Use Your Illusion, el icónico arte del álbum está impreso en el frente de esta camiseta blanca súper suave. En la espalda, aparece Use Your Illusion en rojo.", productoImagen: "/assets/img/tienda/ropa/ts7.webp", imagenReversa: "/assets/img/tienda/ropa/ts7r.webp", listaImagen: [
      {imagen:"/assets/img/tienda/ropa/ts7.webp"},
      {imagen:"/assets/img/tienda/ropa/ts7r.webp"},
    ] },
    { id: 12, titulo: "Camiseta Appetite For Destruction", tipo: "ropa", precio: "$30000 ARS", descripcion: "Camiseta negra con el arte original y controvertido de la portada del álbum Appetite for Destruction impresa en el frente. El texto Guns N' Roses aparece también en el frente.", productoImagen: "/assets/img/tienda/ropa/ts8.webp", imagenReversa: "/assets/img/tienda/ropa/ts8r.webp", listaImagen: [
      {imagen:"/assets/img/tienda/ropa/ts8.webp"},
      {imagen:"/assets/img/tienda/ropa/ts8r.webp"},
    ] },
    

  ]

  const Accesorios: IAccesorios[] = [
    { id: 1, titulo: "Funko Rocks: Axl Rose (1992)", tipo: "accesorios", precio: "$12000 ARS", descripcion: "¡Subí el volumen en tu colección con el Funko de Axl Rose, el legendario cantante y compositor de Guns N' Roses! ¿Con quién se unirá este ícono en tu set de Funko Rocks?", detalles: "4.5 L x 3.5 W x 6.3 H", productoImagen: "/assets/img/tienda/accesorios/taxl.webp", listaImagen: [
      {imagen:"/assets/img/tienda/accesorios/taxl.webp"},
      {imagen:"/assets/img/tienda/accesorios/taxl2.webp"},
      {imagen:"/assets/img/tienda/accesorios/taxl3.webp"}
    ] },
    { id: 2, titulo: "Funko Rocks: Slash (1990s)", tipo: "accesorios", precio: "$12000 ARS", descripcion: "¡Subí el volumen en tu colección con el Funko de Slash, el legendario guitarrista de Guns N' Roses! ¿Con quién se unirá este ícono en tu set de Funko Rocks?", detalles: "4.16 L x 3.16 W x 6.8 H", productoImagen: "/assets/img/tienda/accesorios/tslash.webp", listaImagen: [
      {imagen:"/assets/img/tienda/accesorios/tslash.webp"},
      {imagen:"/assets/img/tienda/accesorios/tslash3.webp"},
      {imagen:"/assets/img/tienda/accesorios/tslash2.webp"}
    ] },
    { id: 3, titulo: "Funko Rocks: Duff McKagan (1980s)", tipo: "accesorios", precio: "$12000 ARS", descripcion: "¡Subí el volumen en tu colección con el Funko de Duff McKagan, el legendario bajista de Guns N' Roses! ¿Con quién se unirá este ícono en tu set de Funko Rocks?", detalles: "4.16 L x 3.16 W x 6.8 H", productoImagen: "/assets/img/tienda/accesorios/tduff.webp", listaImagen: [
      {imagen:"/assets/img/tienda/accesorios/tduff.webp"},
      {imagen:"/assets/img/tienda/accesorios/tduff2.webp"},
      {imagen:"/assets/img/tienda/accesorios/tduff3.webp"}
    ] },
    { id: 4, titulo: "Encendedor Zippo Skeleton Cross", tipo: "accesorios", precio: "$40000 ARS", descripcion: "Encendedor Zippo negro con el logo de la cruz de Appetite For Destruction.", detalles:"Encendedor Zippo a prueba de viento con construcción totalmente metálica y diseño windproof. Refillable para toda una vida de uso, se recomienda utilizar el combustible, pedernal y mechas originales Zippo para un rendimiento óptimo.", productoImagen: "/assets/img/tienda/accesorios/tzipo.webp", listaImagen: [
      {imagen:"/assets/img/tienda/accesorios/tzipo.webp"},
    ] },
    { id: 5, titulo: "Rose Dad Hat", tipo: "accesorios", precio: "$30000 ARS", descripcion: "Gorra tipo dad hat negra con el logo bordado.", productoImagen: "/assets/img/tienda/accesorios/tgorra.webp", listaImagen: [
      {imagen:"/assets/img/tienda/accesorios/tgorra.webp"},
    ] },
    { id: 6, titulo: "Appetite For Destruction Dad Hat", tipo: "accesorios", precio: "$30000 ARS", descripcion: "Gorra clásica tipo dad con el logo de Appetite For Destruction bordado en el frente.", productoImagen: "/assets/img/tienda/accesorios/tgorra2.webp", listaImagen: [
      {imagen:"/assets/img/tienda/accesorios/tgorra2.webp"},
    ] },
    { id: 7, titulo: "Gorro verde militar", tipo: "accesorios", precio: "$35000 ARS", descripcion: "Gorro verde militar con logo bordado de bala.", productoImagen: "/assets/img/tienda/accesorios/tgorra3.webp", listaImagen: [
      {imagen:"/assets/img/tienda/accesorios/tgorra3.webp"},
    ] },
    { id: 8, titulo: "Sombrero Bucket Black Logo", tipo: "accesorios", precio: "$35000 ARS", descripcion: "Sombrero tipo bucket negro con el logo de Guns N' Roses bordado en el frente.", productoImagen: "/assets/img/tienda/accesorios/tgorra4.webp", listaImagen: [
      {imagen:"/assets/img/tienda/accesorios/tgorra4.webp"},
    ] },
    { id: 9, titulo: "Tabla de Cortar GNR", tipo: "accesorios", precio: "$40000 ARS", descripcion: "Corta tus verduras y carnes o úsala como bandeja para servir. Esta tabla de cortar de Guns N' Roses está hecha de madera y presenta el icónico logo de la bala, ¡con cuchillos en lugar de armas esta vez!", productoImagen: "/assets/img/tienda/accesorios/ttabla.webp", listaImagen: [
      {imagen:"/assets/img/tienda/accesorios/ttabla.webp"},
    ] },
    { id: 10, titulo: "Almohada Corazón Sweet Child O' Mine", tipo: "accesorios", precio: "$25000 ARS", descripcion: "Almohada roja en forma de corazón con la letra de la canción Sweet Child O' Mine impresa en blanco.", detalles:"Mide 18 pulgadas y está hecha 100% de poliéster.", productoImagen: "/assets/img/tienda/accesorios/talmohada.webp", listaImagen: [
      {imagen:"/assets/img/tienda/accesorios/talmohada.webp"},
      {imagen:"/assets/img/tienda/accesorios/talmohada2.webp"}
    ] },
    { id: 11, titulo: "Vaso de Whisky Cards", tipo: "accesorios", precio: "$25000 ARS", descripcion: "Vaso de whisky de vidrio con el cráneo con sombrero de copa de Guns N' Roses y cartas de juego en el frente.", detalles:"Tamaño: 11 oz. Se recomienda lavar a mano.",  productoImagen: "/assets/img/tienda/accesorios/tvaso.webp", listaImagen: [
      {imagen:"/assets/img/tienda/accesorios/tvaso.webp"},
    ] },
    { id: 12, titulo: "Medias blancas GN'R x Perri's", tipo: "accesorios", precio: "$13000 ARS", descripcion: "Par de calcetines suaves de algodón peinado mezclado con poliéster que absorbe la humedad, fabricados con botellas de plástico recicladas. Spandex añadido para mayor elasticidad y comodidad.  Empaquetado en caja de cartón con el infame logo de Guns N' Roses y el característico gancho P de Perris.", detalles:"51% poliéster de botellas de plástico recicladas, 36% algodón, 11% nailon, 2% spandex", productoImagen: "/assets/img/tienda/accesorios/tmedias-1.webp", listaImagen: [
      {imagen:"/assets/img/tienda/accesorios/tmedias.webp"},
      {imagen:"/assets/img/tienda/accesorios/tmedias-1.webp"}
    ] },

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
    <main className="pt-20 min-h-screen bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(190,178,35,1)_100%)] ;">

      <section>
      <h2 className='text-white text-center items-center font-bebasneue text-[55px] '>VINILOS</h2>
      <div className="flex justify-center items-center gap-6 pt-10">
       
      <button onClick={() => prevPage(setViniloPage, totalViniloPages)} className="h-[50px]  rounded-full w-auto mb-10" ><p className=" h-full w-full text-[35px] text-white hover:text-yellow-400 hover:transition-transform duration-300  hover:scale-110"><FaArrowAltCircleLeft/></p></button>
      <AnimatePresence mode="wait"/>
      <motion.div key={viniloPage} className="flex gap-10" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 1 }}>
        
       {getVisibleItems(viniloPage, Vinilos).map((vinilo, id) => ( 

          < Vinilo   // Le tiro el pase a la componente Vinilos, con la nueva listaImagen que definimos en la interfaz IVinilos
            key={id}
            id={vinilo.id}
            tipo={vinilo.tipo}
            titulo={vinilo.titulo}
            precio={vinilo.precio}
            productoImagen={vinilo.productoImagen}
            listaImagen={vinilo.listaImagen}
            descripcion={vinilo.descripcion}
            detalles={vinilo.detalles}
          />
        ))}
        </motion.div>
        <AnimatePresence/>
        
      
        <button  onClick={() => nextPage(setViniloPage, totalViniloPages)}  className="h-[50px]  rounded-full w-auto mb-10 " ><p className=" h-full w-full text-[35px] text-white hover:text-yellow-400 hover:transition-transform duration-300  hover:scale-110"><FaArrowAltCircleRight/></p></button>
        
      </div>
     </section>
     
      <section className="mt-20 ">
      <h2 className='text-white text-center  items-center font-bebasneue text-[55px]'>ROPA</h2>
      <div className="flex justify-center gap-6 pt-10">
      <button onClick={() => prevPage(setRopaPage, totalRopaPages)}  className="h-[50px]  rounded-full w-auto mt-32" ><p className="h-full w-full text-[35px] text-white hover:text-yellow-400 hover:transition-transform duration-300  hover:scale-110"><FaArrowAltCircleLeft/></p></button>
      <AnimatePresence mode="wait"/>
      <motion.div key={ropaPage} className="flex gap-10" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 1 }}>
        
       {getVisibleItems(ropaPage, Ropa).map((ropa, id) => ( 

          < Ropita
            key={id}
            id={ropa.id}
            tipo={ropa.tipo}
            titulo={ropa.titulo}
            precio={ropa.precio}
            productoImagen={ropa.productoImagen}
            imagenReversa={ropa.imagenReversa}
            listaImagen={ropa.listaImagen}
            descripcion={ropa.descripcion}
            detalles={ropa.detalles}
          />
        ))}
        </motion.div>
        <AnimatePresence/>
         <button onClick={() => nextPage(setRopaPage, totalRopaPages)} className="h-[50px]  rounded-full w-auto mt-32" ><p className="h-full w-full text-[35px] text-white hover:text-yellow-400 hover:transition-transform duration-300  hover:scale-110"><FaArrowAltCircleRight/></p></button>
      </div>
      </section>
      
      <section className="mt-20 pb-20">
      <h2 className='text-white text-center items-center font-bebasneue text-[55px]'>ACCESORIOS</h2>
      <div className="flex justify-center gap-6 pt-10">
      <button onClick={() => prevPage(setAccesorioPage, totalAccesorioPages)} className="h-[50px] rounded-full w-auto mt-36 " ><p className="h-full w-full text-[35px] text-white hover:text-yellow-400 hover:transition-transform duration-300  hover:scale-110"><FaArrowAltCircleLeft/></p></button>
      <AnimatePresence mode="wait"/>
      <motion.div key={accesorioPage} className="flex gap-10" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 1 }}>
        
       {getVisibleItems(accesorioPage, Accesorios).map((accesorio, id) => ( 
          < Accesorio
            key={id}
            id={accesorio.id}
            tipo={accesorio.tipo}
            titulo={accesorio.titulo}
            precio={accesorio.precio}
            productoImagen={accesorio.productoImagen}
            listaImagen={accesorio.listaImagen}
            descripcion={accesorio.descripcion}
            detalles={accesorio.detalles}
          />
        ))}
        </motion.div>
        <AnimatePresence/>
        <button onClick={() => nextPage(setAccesorioPage, totalAccesorioPages)} className="h-[50px] rounded-full w-auto mt-36" ><p className=" h-full w-full text-[35px] text-white hover:text-yellow-400 hover:transition-transform duration-300  hover:scale-110"><FaArrowAltCircleRight/></p></button>
      </div>
      </section>






    </main>
  )
}

export default Tienda