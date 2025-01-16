import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Newsletter = () => {

const [email, setEmail] = useState("");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const emailValido = (email: string) => emailRegex.test(email);
const [disabled, setDisabled] = useState<boolean>(true); 
const [aviso, setAviso] = useState<string>("");


const navigate = useNavigate();
const irTerminos = () => {
  navigate('/terminos');
  window.scroll(0,0);
}

const handlePointer = () => {
  if (!(emailValido(email)) && (email !== (""))) {
    setAviso("Por favor, ingresa un email valido.")
    setTimeout(() => {
      setAviso("")
    }, 2000)
  } 
}

useEffect(() => {
  if (emailValido(email)) {
  setDisabled(false);
} else {
  setDisabled(true);
}
}, [email])


  const enviarMail = async () => {

    const res = await fetch("https://serverless-sigma-jade.vercel.app/api/send-email"
      , // El Nodemailer (corriendo en server.ts) recibe la solicitud POST, lee el contenido del body y usa esa info para enviar un correo
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Aclaramos que los datos del body estan en formato JSON
        },
        body: JSON.stringify({  // Con body se definen los datos que queremos enviar en la solicitud (el JSON.stringify convierte el objeto de abajo en un string JSON, que es lo que puede leer body)
          to: email,  // A quien va dirigido el correo (aca en realidad pondrias el valor del input, que es donde el user pone el email)
          subject: "Email enviado",  // Asunto del correo
          html:  // Lo que va en el cuerpo del email
          ` 

            <div style="background-color: #fbbf24; display: flex">

              <div style="width: 60%; border: 2px solid white; padding-top: 12px; padding-bottom: 12px; padding-right: 24px; padding-left:24px;">
                <h2 class="titulo-texto" style="text-align: center; font-family: Poppins, sans-serif; color: white; font-weight: bold; font-size: 26px;">
                  ¡Gracias por sumarte a nuestra comunidad!
                </h2>
                <p style="text-align: center; color: white; font-family: Poppins, sans-serif; font-size: 18px;">
                  A partir de ahora, vas a estar al tanto de las últimas novedades, ofertas exclusivas y todo lo que tenemos para vos. No te perdas nuestras próximas actualizaciones, ¡te estamos esperando con grandes sorpresas!
                </p>
              </div>

              <div style="background-color: black; width: 40%;">
                <p></p>
              </div>

            </div>
          `, 
        })
      })

    
    if (res.ok) {
      console.log("Correo enviado con exito")
    } else {
      console.error("Error al enviar el correo:", await res.text());  // Para destacar un error es preferible usar .error en lugar de .log. El res.text() contiene data sobre el error que ocurrio
    }
  }

  return (
    <section className='w-full h-72 bg-yellow-400 flex flex-col justify-center gap-y-4'>
   
    <h2 className='text-center font-bebasneue text-5xl tracking-widest'>¡SUSCRIBITE AL NEWSLETTER!</h2>
    <div className='text-center font-roboto flex flex-col tracking-widest'>
      <p>Tours, noticias y promociones, directo a tue email.</p>
      <p>Al suscribirte aceptas nuestros <a onClick={irTerminos} className='text-white cursor-pointer font-bold hover:text-black'>terminos y condiciones</a>.</p> 
    </div>
    <div className='h-[20%] flex justify-center items-center gap-4'>
    <div className="w-[30%] h-[60%]">
    <input onChange={(e) => setEmail(e.target.value)} className='focus:outline-none w-full h-full placeholder:gray-500 pl-2 ' type="email" placeholder='Email*' /> {/* Lo que se ponga en este input no pinta nada con la funcion de arriba*/}
    <p  className="text-red-600 font-semibold text-[14px] pt-2 ">{aviso}</p>
    </div>
    <button disabled={disabled} onPointerEnter={handlePointer} onClick={() => enviarMail()}  className={`w-32 border-b-4  font-montserrat font-semibold transition duration-500 ${disabled ? "cursor-not-allowed text-black border-black" : "border-b-white  text-white hover:text-red-600 hover:border-red-600"} ' type='submit`}>SUSCRIBIRSE</button>
    
    </div>
  </section>
  )
}

export default Newsletter