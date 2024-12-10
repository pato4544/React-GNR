import ITimeline from "../../type/ITimeline"
import TimelineContent from "../TimelineContent"

const Timelines = () => {

  const listaTimeline: ITimeline[] = [

    { id: 1, titulo: "(1985) Se forma la banda", contenido: "En 1985, Guns N' Roses comenzó a forjar su historia en Los Ángeles, cuando Axl Rose se unió al guitarrista Slash, y más tarde se sumaron Izzy Stradlin (guitarra rítmica), Duff McKagan (bajo), Steven Adler (batería), siendo el mítico Axl la voz de la banda. Este primer lineup fue clave para el sonido único de la banda, que rápidamente fusionó el hard rock con el espíritu rebelde del punk. Estaban listos para ser mucho más que una banda local, la maquinaria de un ícono global estaba comenzando a rodar.", imagen: "/assets/img/timeline/t1985.webp" },
    { id: 2, titulo: "(1987) Llega Appetite for Destruction", contenido: "En 1987, Guns N' Roses lanzó su álbum debut, Appetite for Destruction, que cambiaría el curso del rock. Canciones como Sweet Child o’ Mine, Welcome to the Jungle y Paradise City marcaron a toda una generación. Este disco capturó la esencia cruda de la banda y la catapultó al estrellato mundial. Con su energía inigualable, Appetite se convirtió en uno de los álbumes debut más vendidos de la historia.", imagen: "/assets/img/timeline/tappetite2.webp" },
    { id: 3, titulo: "(1991) Tour Use Your Illusion", contenido: "En 1991, Guns N' Roses lanzó los esperados Use Your Illusion I y Use Your Illusion II, dos discos épicos que mostraron una banda en su mejor momento. Con temas como November Rain y Don’t Cry, los álbumes combinaban baladas épicas y canciones cargadas de energía. La banda se embarcó en un tour mundial que se extendió por dos años, demostrando que estaban en la cima del mundo del rock.", imagen: "/assets/img/timeline/live9.webp" },
    { id: 4, titulo: "(1992) Guns N’ Roses llega a Argentina", contenido: "En diciembre de 1992, Guns N' Roses pisó por primera vez suelo argentino como parte de su gira mundial Use Your Illusion Tour. Los conciertos en el Estadio de River Plate fueron históricos, con miles de fans vibrando al ritmo de clásicos como Welcome to the Jungle y Sweet Child o’ Mine. La energía de la banda y la pasión del público crearon una conexión única, consolidando a Argentina como un punto clave en la historia de Guns N' Roses.", imagen: "/assets/img/timeline/ARG1.webp" },
    { id: 5, titulo: "(1993) The Spaghetti Incident?", contenido: "En 1993, Guns N' Roses sorprendió con The Spaghetti Incident?, un disco de covers que rendía homenaje a las influencias punk y rock clásico que formaron a la banda. Aunque recibió críticas mixtas, el álbum mostró su versatilidad y la capacidad de mantener su esencia incluso interpretando canciones de otros artistas. Este trabajo marcó el fin de una etapa antes de los grandes cambios en la banda.", imagen: "/assets/img/timeline/tspha.webp" },
    { id: 6, titulo: "(1994)  La salida de Slash", contenido: "A mediados de los años 90, Slash decidió dejar Guns N' Roses tras tensiones creativas con Axl Rose. Este momento marcó el fin de la era dorada de la banda. Con alineaciones cambiantes, Axl quedó como el único miembro original. La partida de Slash dejó una profunda huella, y aunque el grupo siguió adelante, quedó claro que algo esencial había cambiado para siempre.", imagen: "/assets/img/timeline/slash.webp" },
    { id: 7, titulo: "(1998) Guns N’ Roses en pausa", contenido: "En 1998, la banda enfrentó un período de incertidumbre. Con constantes cambios en la alineación y pocas señales de nueva música, los fans comenzaron a perder la esperanza de ver a Guns N' Roses regresar a lo más alto. Axl Rose continuó trabajando en el estudio, prometiendo un álbum revolucionario, mientras la ausencia de los miembros originales dejaba un vacío en la escena del rock.", imagen: "/assets/img/timeline/t19982.webp" },
    { id: 8, titulo: "(2002) El regreso al escenario", contenido: "Después de años de silencio, Guns N' Roses volvió a los escenarios en 2002 con una nueva formación liderada por Axl Rose. Aunque la gira fue recibida con entusiasmo por los fans, muchos notaron la ausencia de los miembros clásicos. Sin embargo, este regreso marcó el inicio de una nueva etapa para la banda, con la promesa de que algo grande estaba en camino.", imagen: "/assets/img/timeline/vuelta.webp" },
    { id: 9, titulo: "(2008) Chinese Democracy", contenido: "Tras más de una década de producción, en 2008 Guns N' Roses lanzó Chinese Democracy. El disco marcó un nuevo capítulo, aunque la ausencia de los miembros originales fue tema de debate entre los fans. Pese a las críticas, el álbum dejó canciones memorables como Better y There Was a Time. Axl Rose demostró que, aunque la banda había cambiado, el espíritu de innovación seguía vivo.", imagen: "/assets/img/timeline/tchinese.webp" },
    { id: 10, titulo: "(2016) Gira Not in This Lifetime", contenido: "En 2016, tras más de dos décadas de separación, Axl, Slash y Duff McKagan se reunieron para la gira Not in This Lifetime. Este tour fue un éxito rotundo, llenando estadios en todo el mundo y consolidando su legado como una de las bandas más grandes de la historia. La química y la energía del grupo demostraron que, a pesar de los años, Guns N' Roses seguía siendo una fuerza imparable.", imagen: "/assets/img/timeline/notinthis.webp" },
    { id: 11, titulo: "(2022) Guns N’ Roses en Argentina", contenido: "En 2022, Guns N' Roses volvió a pisar suelo argentino como parte de su gira mundial. El público vibró con clásicos como Sweet Child o’ Mine y November Rain, mientras la banda demostró que su conexión con los fans sigue intacta. Axl, Slash y Duff se lucieron en una noche inolvidable, reafirmando su lugar en el corazón de los rockeros argentinos.", imagen: "/assets/img/timeline/arg2vuelta.webp" }


  ]

  return (
    <div className="bg-black min-h-screen w-full pt-12">

      

        <div className='flex flex-col text-white pr-32 pl-32 text-center h-[600px] bg-gradient-to-tr from-black via-yellow-600 to-black'>
          <h1 className='font-bebasneue text-white text-center pb-10  pt-12 text-[55px] space-x-6'>Timeline</h1>
          <div className="flex flex-col gap-y-8 pb-20">
            <h2 className='font-rowdies text-[18px] pl-4'>Guns N’ Roses no solo cambió la música, también dejó una marca imborrable en la cultura popular. Desde sus primeros pasos en los bares de Los Ángeles hasta llenar estadios en cada rincón del mundo, esta banda se ganó su lugar como una de las más influyentes de la historia. Sus canciones, cargadas de rebeldía y pasión, traspasaron fronteras, llegando a lo más profundo de millones de corazones.</h2>
            <h2 className='font-rowdies text-[18px] pl-4'>Pero GN’R no se quedó solo en la música: su estilo, su actitud desafiante y su manera de vivir el rock los convirtieron en íconos de toda una generación. Sus shows en vivo, repletos de energía arrolladora y momentos inolvidables, quedaron grabados para siempre en la memoria de quienes tuvieron la suerte de estar ahí.</h2>
            <h2 className='font-rowdies text-[18px] pl-4'>Con un legado que sigue tan vigente como el primer día, Guns N’ Roses definió una era y marcó el camino del rock para siempre. En esta línea de tiempo, te invitamos a revivir los momentos que transformaron a GN'R en leyendas vivas. Explorá con nosotros cómo esta banda trascendió la música para convertirse en eternos protagonistas del rock. ¡Acompañanos y sentí la magia de GN'R!</h2>
          </div>
        </div>

        <div className="">
          <div>

          </div>
          <div>

         
          {listaTimeline.map((time: ITimeline) =>
            <TimelineContent
              id={time.id}
              contenido={time.contenido}
              imagen={time.imagen}
              titulo={time.titulo}
            />


          )}
           </div>
        </div>
      </div>

    
  )
}

export default Timelines
