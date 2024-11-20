import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="fixed w-full bg-transparent flex justify-between items-center border-b border-b-yellow-600 z-50 mt-1">

                <div className="ml-8">
                    <button><p className="text-white whitespace-nowrap font-playfairdisplay hover:text-yellow-400  text-[25px] font-medium pb-2">GUNS 'N ROSES</p></button>
                </div>

                <div className="flex gap-7 text-[16px] text-white font-montserrat mr-[7.3%] ">
                <button><p className="hover:text-yellow-400">NOTICIAS</p></button>
                <button><p className="hover:text-yellow-400">TIENDA</p></button>
                <button><p className="hover:text-yellow-400">GALERIA</p></button>
                <button><p className="hover:text-yellow-400">REDES</p></button>
                </div>

                <div className="flex mr-8">
                    <button className="hover:outline hover:outline-yellow-400 hover:outline-2 px-1 py-0 p"><p className="text-white text-[15px] font-montserrat">Contacto</p></button>
                </div>

            </nav>
        </div>
    )
}

export default Navbar