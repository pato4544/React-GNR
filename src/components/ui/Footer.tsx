import React from 'react'
import { CiInstagram, CiTwitter, CiFacebook} from "react-icons/ci";
import { PiSpotifyLogoLight } from "react-icons/pi";
import { PiYoutubeLogo } from "react-icons/pi";
import { SlSocialYoutube } from "react-icons/sl";
import { ImYoutube2 } from "react-icons/im";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { Link } from 'react-router';

const Footer = () => {
  return (
    <div>
        <footer className="flex flex-row w-full bg-black h-32 justify-between items-center">
         
          <img className="ml-16 p-2 size-28" src="/assets/img/logo-guns.png" alt="" />
          
          <div className='text-center flex flex-col text-white font-montserrat text-[14px] font-light pl-24'>
             <p className="hover:text-yellow-400">Copyright 2024 © Guns n Roses</p>
             <p className="hover:text-yellow-400">Politica de privacidad</p>
             <p className="hover:text-yellow-400">Condiciones de uso</p>
          </div>

          <div  className='flex text-3xl text-yellow-600 items-center gap-3 pr-14'>
            <Link to = {"https://www.facebook.com/gunsnroses/?locale=es_ES"}><CiFacebook className='hover:text-white'/></Link>
            <Link to = {"https://twitter.com/gunsnroses"}><CiTwitter className='hover:text-white'/></Link>
            <Link to = {"https://www.youtube.com/channel/UCIak6JLVOjqhStxrL1Lcytw"}><ImYoutube2 className='hover:text-white text-[40px]'/></Link>
            <Link to = {"https://www.instagram.com/gunsnroses/"}><CiInstagram className='hover:text-white'/></Link>
            <Link to = {"https://open.spotify.com/intl-es/artist/3qm84nBOXUEQ2vnTfUTTFC"}><PiSpotifyLogoLight className='hover:text-white'/></Link>
          </div>
          

        </footer>
    </div>
  )
}

export default Footer