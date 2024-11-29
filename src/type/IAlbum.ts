interface ICancion {
    id: number;
    nombre: string;
    duracion: string
    spotySong: string;


  }
 
 interface IAlbum {
    nombre: string;
    año: number;
    coverImagen: string;
    linkSpotify: string;
    duracion?: string;
    sello?: string;
    canciones?: ICancion[];
    

}

export default IAlbum