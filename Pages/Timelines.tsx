import ITimeline from "../../type/ITimeline"
import TimelineContent from "../TimelineContent"

const Timelines = () => {

 const listaTimeline: ITimeline[] = [
    // {titulo:"(1985) Se forma la banda", contenido:"Que capos son los guns", imagen:"/assets/img/live5.webp"},
    // {titulo:"Guns 1998", contenido:"Que grandes", imagen:"/assets/img/live3.webp"},
    // {titulo:"Guns 2001", contenido:"Que capos", imagen:"/assets/c1.webp"},
    // {titulo:"Guns 2002", contenido:"que grandes tio", imagen:"/assets/c2.webp"},
    // {titulo:"Guns 2003", contenido:"no me lo creo", imagen:"/assets/c3.webp"},
    // {titulo:"Guns 2004", contenido:"vaya padreada", imagen:"/assets/c4.webp"},
    // {titulo:"Guns 2005", contenido:"como molan", imagen:"/assets/c5.webp"},
    // {titulo:"Guns 2006", contenido:"sufa", imagen:"/assets/c6.webp"},
    // {titulo:"Guns 2007", contenido:"sfa", imagen:"/assets/c7.webp"},


    {titulo:"(1985) Se forma la banda", contenido:"En 1985, Guns N' Roses comenzó a forjar su historia en Los Ángeles, cuando Axl Rose se unió al guitarrista Slash, y más tarde se sumaron Izzy Stradlin (guitarra rítmica), Duff McKagan (bajo), Steven Adler (batería), siendo el mítico Axl la voz de la banda. Este primer lineup fue clave para el sonido único de la banda, que rápidamente fusionó el hard rock con el espíritu rebelde del punk. Estaban listos para ser mucho más que una banda local, la maquinaria de un ícono global estaba comenzando a rodar.", imagen:"/assets/c4.webp"},
    {titulo:"(1987) Llega Appetite for Destruction", contenido:"El disco debut arrasa con Sweet Child o Mine y otras canciones que nunca dejaron de sonar.", imagen:"/assets/img/live3.webp"},
    {titulo:"(1991) Tour Use Your Illusion", contenido:"La banda se lanza a conquistar el mundo, marcando una época con su rock imparable.", imagen:"/assets/c1.webp"},
    {titulo:"(1993) The Spaghetti Incident?", contenido:"El disco de covers, con una nueva onda, pero con la misma actitud.", imagen:"/assets/c12.webp"},
    {titulo:"(1994)  La salida de Slash", contenido:"A mediados de los años 90, uno de los momentos más significativos de la historia de la banda ocurrió: Slash dejó Guns N' Roses. Este fue el fin de una era dorada para el grupo, que comenzó a tener una alineación cambiante con Axl Rose a la cabeza. Aunque Guns N' Roses siguió existiendo, la partida de Slash y la fractura en la química entre los miembros dejó claro que algo había cambiado de manera irreversible.", imagen:"/assets/c12.webp"},
    {titulo:"(2008) Chinese Democracy", contenido:"Después de más de una década de rumores, promesas incumplidas y grabaciones interminables, en 2008 Guns N' Roses finalmente lanzó Chinese Democracy. Aunque la espera había sido larga, el álbum no alcanzó el éxito esperado, aunque algunos temas lograron captar la atención de los fans. Chinese Democracy mostró a una banda diferente, con Axl como único miembro original, lo que llevó a algunos a cuestionar si aún era Guns N' Roses.", imagen:"/assets/c9.webp"},
    {titulo:"(2016) Gira Not in This Lifetime", contenido:"Tras más de 20 años de distanciamiento, en 2016 Axl, Slash y Duff McKagan se reunieron para la histórica gira Not in This Lifetime. Los fans de todo el mundo celebraron el regreso de la formación clásica. La banda recorrió el planeta con su característico sonido y energía, haciendo sentir su presencia como nunca. Esta gira demostró que, pese a los años, Guns N' Roses sigue siendo uno de los grupos más grandes del rock mundial.", imagen:"/assets/c4.webp"},



 ]

  return (
    <div className="bg-black min-h-screen w-full border border-red-700 pt-20">

      {listaTimeline.map((time : ITimeline) => 
      <TimelineContent 
      contenido={time.contenido}
      imagen={time.imagen}
      titulo={time.titulo}
      />
      
      
      )}



    </div>
  )
}

export default Timelines
