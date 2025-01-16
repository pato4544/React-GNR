
import { useNavigate } from 'react-router'

// En lugar de nav la componente pasa a ser header y dentro de si esta la nav, para que sea mas correcto semanticamente

const Header = () => {

    const navigate = useNavigate();

    // Aca en lugar de hacer una funcion para cada ruta, cree una sola que recibe como parametro la ruta, para no ser redundante y ahorrar codigo

    const irSeccion = (ruta: string) => {
        navigate(ruta);
        window.scroll(0, 0);
    }


    return (
        <header className="fixed w-full bg-black/70 flex md:justify-between items-center border-b border-b-yellow-600 z-50 pt-1">

            <div className="ml-8">
                <div onClick={() => irSeccion("/")}><p className="text-white whitespace-nowrap font-playfairdisplay cursor-pointer hover:text-yellow-400  text-[25px] font-medium pb-2">GUNS 'N ROSES</p></div>
            </div>

            <nav className="md:flex hidden md:gap-7 text-[16px] text-white font-montserrat md:mr-[7.3%] ">
                <div onClick={() => irSeccion("/noticias")}><p className="hover:text-yellow-400 cursor-pointer">NOTICIAS</p></div>
                <div onClick={() => irSeccion("/timeline")}><p className='hover:text-yellow-400 cursor-pointer'>TIMELINE</p></div>
                <div onClick={() => irSeccion("/tienda")}><p className="hover:text-yellow-400 cursor-pointer">TIENDA</p></div>
            </nav>

            <div className="hidden md:flex md:mr-8">
                <button onClick={() => irSeccion("/contacto")} className="hover:outline hover:outline-yellow-400 hover:outline-2 px-1 py-0 p"><p className="text-white text-[15px] font-montserrat">Contacto</p></button>
            </div>

        </header>
    )
}

export default Header