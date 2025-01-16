export interface ITimeline { // Es una pesima practica exportar las interfaces con el default porque despues las tenes que importar manualmente, no te da el atajo
    id: number;
    titulo: string;
    contenido: string;
    imagen: string;
}