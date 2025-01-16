
const Terminos = () => {
  return (
    <div className='min-h-screen items-center bg-black h-auto w-full flex flex-col pt-20 pb-12'>
        <div className='w-[50%] flex flex-col text-left'>
            <h1 className='text-white border-b-2 font-lato font-bold text-[35px]'>Terminos y Condiciones</h1>
            <p className='pt-4 text-white text-[17px]'>Hola, gracias por visitar mi página no oficial dedicada a Guns N' Roses. Te invito a leer estos Términos y Condiciones que rigen el uso del sitio. Al navegar o interactuar con esta página, aceptás los siguientes términos. Si no estás de acuerdo con ellos, te pido que te abstengas de utilizarla.</p>
        </div>

        <div className='mt-16 gap-y-16 flex flex-col w-[50%] text-left'>  {/* El gap es depndiente del flex*/}
          <div>
            <h2 className='text-white font-bold text-[25px] border-b'>1. Proposito del Sitio</h2>
            <p className='text-white pt-4 text-[17px]'>Este sitio es una página de fans y no tiene ninguna afiliación oficial con Guns N' Roses, sus integrantes o sus representantes legales. Mi objetivo es compartir contenido decorativo y de entretenimiento relacionado con la banda. </p> 
            <p className='text-white text-[17px] pt-4'>La sección de la tienda tiene un propósito exclusivamente decorativo y no está destinada a realizar compras, ventas o transacciones de ningún tipo. No vendo productos ni ofrezco servicios comerciales en este sitio.</p> 
          </div>

          <div>
            <h2 className='text-white font-bold text-[25px] border-b'>2. Uso del Contenido</h2>
            <p className='text-white pt-4 text-[17px]'>Todo el contenido de esta página (imágenes, textos, gráficos, etc.) está destinado exclusivamente a uso personal y no comercial. Está prohibido reproducir, distribuir o usar este contenido sin el consentimiento de los titulares de los derechos correspondientes.</p>
          </div>

          <div>
            <h2 className='text-white font-bold text-[25px] border-b'>3. Política de Privacidad</h2>
            <h3 className='text-white font-semibold pt-4 text-[18px]'>3.1 Formulario de Contacto</h3>
            <p className='text-white pt-2 text-[17px]'>Los formularios de contacto son de carácter exclusivamente <b>decorativo</b>. Aunque incluyan asuntos como "Tours", "Contrataciones" o "Tienda", no se envía ninguna información desde estos formularios ni se almacenan tus datos personales.</p>
            <h3 className='text-white font-semibold pt-4 text-[18px]'>3.2 Newsletter</h3>
            <p className='text-white pt-2 text-[17px]'>La suscripción al newsletter también es decorativa y no genera envíos de información ni recopila datos personales. Cualquier dato que ingreses no será procesado ni almacenado.</p>
          </div>

          <div>
            <h2 className='text-white font-bold text-[25px] border-b'>4. Exclusión de Responsabilidad</h2>
            <p className='text-white pt-4 text-[17px]'>El contenido de esta página se ofrece "tal cual" y sin garantías de ningún tipo, ya sea expresas o implícitas. No me hago responsable por errores, omisiones o cualquier inconveniente que pueda surgir del uso de este sitio.</p>
          </div>

          <div>
            <h2 className='text-white font-bold text-[25px] border-b'>5. Propiedad Intelectual</h2>
            <p className='text-white pt-4 text-[17px]'>Reconozco y respeto los derechos de propiedad intelectual de Guns N' Roses y sus titulares legales. Cualquier marca registrada, imagen o contenido protegido que se use en esta página tiene fines de homenaje y respeto hacia la banda.</p>
            <p className='text-white pt-4 text-[17px]'>Si sos el propietario de derechos y considerás que algún contenido debe ser retirado, por favor escribime a <a className='font-bold hover:text-yellow-300 transition duration-500' href="mailto:patricioperezjudo@gmail.com">patricioperezjudo@gmail.com</a>.</p>
          </div>

          <div>
            <h2 className='text-white font-bold text-[25px] border-b'>6. Modificaciones a los Términos</h2>
            <p className='text-white pt-4 text-[17px]'>Me reservo el derecho de modificar estos Términos y Condiciones en cualquier momento y sin previo aviso. Te recomiendo revisarlos periódicamente para estar al tanto de posibles cambios.</p>
          </div>

          <div>
            <h2 className='text-white font-bold text-[25px] border-b'>7. Contacto</h2>
            <p className='text-white pt-4 text-[17px]'>Si tenés alguna consulta sobre estos términos, el sitio o cualquier problema, podés escribirme directamente a: <a className='font-bold hover:text-yellow-300 transition duration-500' href="mailto:patricioperezjudo@gmail.com">patricioperezjudo@gmail.com</a>.</p>
          </div>
        </div>

        <h2>Gracias por visitar mi página no oficial de Guns N' Roses. ¡Espero que disfrutes la experiencia!</h2>
    




    </div>
  )
}

export default Terminos