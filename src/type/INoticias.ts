export interface INoticias { // Es una pesima practica exportar las interfaces con el default porque despues las tenes que importar manualmente, no te da el atajo
    imagenNoticia: string;
    titulo: string;
    fecha: string;
    contenido: string;
}