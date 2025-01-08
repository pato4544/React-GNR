const Newsletter = () => {


  const enviarMail = async () => {
        /* const res = */ await fetch(
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
    <section className='w-full h-72 bg-yellow-400 flex flex-col justify-center gap-y-4'>
   
    <h2 className='text-center font-bebasneue text-5xl tracking-widest'>¡SUSCRIBITE AL NEWSLETTER!</h2>
    <div className='text-center font-roboto flex flex-col tracking-widest'>
      <p>Tours, noticias y promociones, directo a tue email.</p>
      <p>Al suscribirte aceptas nuestros <a className='text-white font-bold hover:text-black' href="/terminos">terminos y condiciones</a>.</p> 
    </div>
    <div className='h-[20%] flex justify-center items-center gap-4'>
    <input className='focus:outline-none w-[30%] h-[60%] placeholder:gray-500 pl-2 ' type="email" placeholder='Email*' />
    <button onClick={() => enviarMail()} className='w-32 border-b-4 border-b-white font-montserrat text-white font-semibold hover:text-black hover:border-black' type='submit'>SUSCRIBIRSE</button>
    </div>
  </section>
  )
}

export default Newsletter