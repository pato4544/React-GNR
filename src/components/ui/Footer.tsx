import { CiInstagram, CiTwitter, CiFacebook} from "react-icons/ci";
import { PiSpotifyLogoLight } from "react-icons/pi";
import { ImYoutube2 } from "react-icons/im";
import { Link, useNavigate } from 'react-router';

const Footer = () => {

  const navigate = useNavigate();
  const irTerminos = () => {
    navigate("/terminos");
    window.scroll(0, 0);
  }
  

  return (
        <footer className="flex flex-row w-full bg-black h-32 justify-between items-center">
         
          <img className="ml-16 p-2 size-28" src="/assets/img/logo/logo-guns.png" alt="Logo Guns" />
          
          <div className='text-center flex flex-col gap-y-1 text-white font-montserrat text-[14px] font-light pl-24'>
             <p>© 2024 Patricio Pérez</p>
             <p>Sitio no oficial de Guns N' Roses</p>
             <p onClick={() => irTerminos()} className="cursor-pointer hover:text-yellow-400">Terminos y condiciones</p>
          </div>

          <div  className='flex text-3xl text-yellow-600 items-center gap-3 pr-14'>
            <Link to = {"https://www.facebook.com/gunsnroses/?locale=es_ES"}><CiFacebook className='hover:text-white'/></Link>
            <Link to = {"https://twitter.com/gunsnroses"}><CiTwitter className='hover:text-white'/></Link>
            <Link to = {"https://www.youtube.com/channel/UCIak6JLVOjqhStxrL1Lcytw"}><ImYoutube2 className='hover:text-white text-[40px]'/></Link>
            <Link to = {"https://www.instagram.com/gunsnroses/"}><CiInstagram className='hover:text-white'/></Link>
            <Link to = {"https://open.spotify.com/intl-es/artist/3qm84nBOXUEQ2vnTfUTTFC"}><PiSpotifyLogoLight className='hover:text-white'/></Link>
          </div>
          

        </footer>
  )
}

export default Footer