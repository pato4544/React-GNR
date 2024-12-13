import {useNavigate} from 'react-router'

const Navbar = () => {

    const navigate = useNavigate();
    const irNoticias = () => {
      navigate("/noticias")
      window.scrollTo(65, 0); 
    }

   
    const irTimeline = () => {
      navigate("/timeline")
      window.scrollTo(65, 0); 
    }

    
    const irTienda = () => {
      navigate("/tienda")
      window.scrollTo(65, 0); 
    }

    const irHome = () => {
        navigate("/")
        window.scrollTo(65, 0);
    }

    return (
        <div>
            <nav className="fixed w-full bg-black/70 flex justify-between items-center border-b border-b-yellow-600 z-50 pt-1">

                <div className="ml-8">
                <div onClick={() => irHome()}><p className="text-white whitespace-nowrap font-playfairdisplay cursor-pointer hover:text-yellow-400  text-[25px] font-medium pb-2">GUNS 'N ROSES</p></div>
                </div>

                <div className="flex gap-7 text-[16px] text-white font-montserrat mr-[7.3%] ">
                <div onClick={() => irNoticias()}><p className="hover:text-yellow-400 cursor-pointer">NOTICIAS</p></div>
                <div onClick={() => irTimeline()}><p className='hover:text-yellow-400 cursor-pointer'>TIMELINE</p></div>
                <div onClick={() => irTienda()}><p className="hover:text-yellow-400 cursor-pointer">TIENDA</p></div>
                </div>
                <div className="flex mr-8">
                    <button className="hover:outline hover:outline-yellow-400 hover:outline-2 px-1 py-0 p"><p className="text-white text-[15px] font-montserrat">Contacto</p></button>
                </div>

            </nav>
        </div>
    )
}

export default Navbar