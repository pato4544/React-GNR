import { Link} from 'react-router'

const Navbar = () => {

// const navigate = useNavigate();

// const ejemplo = () => {
//     navigate('/')
// }

// <button onClick={() => ejemplo()}>Login</button>

    return (
        <div>
            <nav className="fixed w-full bg-black/70 flex justify-between items-center border-b border-b-yellow-600 z-50 pt-1">

                <div className="ml-8">
                    <Link to = {"/"}> <p className="text-white whitespace-nowrap font-playfairdisplay hover:text-yellow-400  text-[25px] font-medium pb-2">GUNS 'N ROSES</p></Link>
                </div>

                <div className="flex gap-7 text-[16px] text-white font-montserrat mr-[7.3%] ">
                <Link to = {"/noticias"}><p className="hover:text-yellow-400">NOTICIAS</p></Link>
                <Link to ={"/timeline"}><p className='hover:text-yellow-400'>TIMELINE</p> </Link>
                <Link to = {"/tienda"}><p className="hover:text-yellow-400">TIENDA</p></Link>    
                </div>

                <div className="flex mr-8">
                    <button className="hover:outline hover:outline-yellow-400 hover:outline-2 px-1 py-0 p"><p className="text-white text-[15px] font-montserrat">Contacto</p></button>
                </div>

            </nav>
        </div>
    )
}

export default Navbar