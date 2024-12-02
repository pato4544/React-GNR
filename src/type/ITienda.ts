// interface IVinilo {
//     productoImagen: string;
//     titulo: string;
//     precio?: string;
// }

// interface IRopa {
//     productoImagen: string;
//     titulo: string;
//     precio?: string;
// }

// interface IOtros {
//     productoImagen: string;
//     titulo: string;
//     precio?: string;
// }

// interface ITienda {
//     vinilos: IVinilo[];
//     ropa?: IRopa[];
//     otros?: IOtros[];
// }

// export default ITienda;

export default interface ITienda {
    productoImagen: string;
    titulo: string;
    precio: string
}