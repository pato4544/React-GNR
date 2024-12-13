interface IListaImagen {
    imagen: string
}

export interface IVinilos {  // Es una pesima practica exportar las interfaces con el default porque despues las tenes que importar manualmente, no te da el atajo
    tipo?: string;
    productoImagen: string;
    titulo: string;
    precio: string;
    descripcion: string;
    detalles?: string;
    listaImagen: IListaImagen[]
}