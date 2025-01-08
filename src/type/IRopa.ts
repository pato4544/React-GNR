interface IListaImagen {
    imagen: string
}

export interface IRopa { // Es una pesima practica exportar las interfaces con el default porque despues las tenes que importar manualmente, no te da el atajo
    tipo?: string;
    id: number;
    productoImagen: string;
    imagenReversa: string;
    titulo: string;
    precio: string
    descripcion: string;
    detalles?: string;
    listaImagen: IListaImagen[]
}