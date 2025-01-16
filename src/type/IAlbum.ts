export interface ICancion {
    id: number;
    letra?: string;
    nombre: string;
    duracion: string
    spotySong: string;


  }
 
 export interface IAlbum { // Es una pesima practica exportar las interfaces con el default porque despues las tenes que importar manualmente, no te da el atajo
    id: number;
    nombre: string;
    año: number;
    coverImagen: string;
    linkSpotify: string;
    duracion?: string;
    sello?: string;
    canciones: ICancion[];
    

}
