const Contacto = () => {


  const enviarMail = async () => {
      const res = await fetch(
        "https://nodemailer-p.vercel.app/api/mail.js",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
              to: "patricioperezjudo@gmail.com",
              subject: "Email enviado",
              messaje: "asdhoashdoas",
          })
        }
      )
  }
  return (
    <>
    <div className='mt-24w-full h-72 mt-28 bg-yellow-400 flex flex-col justify-center gap-y-4' > 
    <h1 className='text-center font-bebasneue text-5xl tracking-widest'>¡SUSCRIBITE AL NEWSLETTER!</h1>
    <div className='text-center font-roboto flex flex-col tracking-widest'>
      <p>Tours, noticias y promociones, directo a tue email.</p>
      <p>Al suscribirte aceptas nuestras <a className='text-white hover:text-black' href="">politicas de privacidad</a> y <a className='text-white hover:text-black' href="">condiciones de uso</a>.</p> 
    </div>
    <div className='h-[20%] flex justify-center items-center gap-4'>
    <input className='w-[30%] h-[60%] placeholder:gray-500 pl-2 ' type="email" placeholder='Email*' />
    <button onClick={() => enviarMail()} className='w-32 border-b-4 border-b-white font-montserrat text-white font-semibold hover:text-black hover:border-black' type='submit'>SUSCRIBIRSE</button>
    </div>
   </div> 
  </>
  )
}

export default Contacto