interface IListaImagen {
    imagen: string
}

export interface IAccesorios { // Es una pesima practica exportar las interfaces con el default porque despues las tenes que importar manualmente, no te da el atajo
    productoImagen: string;
    titulo: string;
    precio: string;
    listaImagen: IListaImagen[]
}
