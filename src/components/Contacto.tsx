import { useNavigate } from "react-router";
import Select from "./Select";
import { useEffect, useState } from "react";



const Contacto: React.FC = () => {
  const [nombre, setNombre] = useState<string>("");
  const [apellido, setApellido] = useState<string>("");

  const [email, setEmail] = useState<string>("");  // El regex es un formato de validacion, la funcion de abajo verifica si el parametro email coincide con el regex, y en caso de ser asi devuelve true 
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const emailValido = (email: string) => emailRegex.test(email);

  const [mensaje, setMensaje] = useState<string>("");

  const [disabled, setDisabled] = useState<boolean>(true);  // Con esto vamos a ir seteando si el boton esta o no desactivado dependiendo de ciertas condiciones


  const [msjbutton, setMsjbutton] = useState<string>("Enviar")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  useEffect(() => {  // Si cumple las condiciones, el boton se habilita, si no sigue deshabilitado (las dependencias son los valores de los inputs obligatorios)
    if (nombre !== "" && apellido !== "" && emailValido(email) && mensaje !== "") {
      console.log(mensaje);
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [nombre, apellido, email, mensaje]);
  

  const navigate = useNavigate();
  // Creo un array de strings (que van  a ser las options) para pasarselas a la componente Select como parametro
  const options = ["Sugerencias para la banda sobre futuras canciones o discos", "Reclamaciones sobre la calidad del merchandise adquirido", "Contratación de Guns N' Roses para festivales o conciertos", "Solicitud de derechos de uso de música o contenido", "Problemas con pedidos de entradas para los conciertos"];
  return (
    <>
      <div className='min-h-screen flex justify-center h-auto w-full bg-black pt-20 pb-10'>
        <form onSubmit={handleSubmit} className='flex flex-col items-center text-white gap-12 w-[50%] place-self-center '>
          <div className='w-[80%]'>
            {/* <h2 className='text-gray-300 text-[12px] font-semibold peer-focus:text-yellow-400'>Asunto</h2> */}
            <Select options={options} />  {/* Le pasamos el array de arriba como parametro */}
          </div>

          <div className='flex gap-5 w-[80%]'>
            <div className="relative w-[50%] ">
              <input id="Nombre" onChange={(e) => setNombre(e.target.value)} className="w-full bg-transparent border-b border-b-gray focus:border-b-yellow-500 focus:outline-none peer transition duration-500" type="text" name="Nombre" placeholder="" />
              <label htmlFor="Nombre" className="text-gray-300 w-full absolute -top-1 left-0 text-center text-[16px] transform transition-all duration-500 peer-focus:text-yellow-500 peer-focus:font-semibold peer-focus:scale-75 peer-focus:-translate-x-[42%] peer-focus:translate-y-[-75%] peer-[:not(:placeholder-shown)]:-translate-x-[42%] peer-[:not(:placeholder-shown)]:translate-y-[-75%] peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold">Nombre</label>
            </div>
            <div className="relative w-[50%] ">
              <input id="Apellido" onChange={(e) => setApellido(e.target.value)} className="w-full bg-transparent border-b border-b-gray focus:border-b-yellow-500 focus:outline-none peer transition duration-500" type="text" name="Apellido" placeholder="" />
              <label htmlFor="Apellido" className="text-gray-300 w-full absolute -top-1 left-0 text-center text-[16px] transform transition-all duration-500 peer-focus:text-yellow-500 peer-focus:font-semibold peer-focus:scale-75 peer-focus:-translate-x-[42%] peer-focus:translate-y-[-75%] peer-[:not(:placeholder-shown)]:-translate-x-[42%] peer-[:not(:placeholder-shown)]:translate-y-[-75%] peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold">Apellido</label>
            </div>
          </div>

          <div className="relative w-[80%] ">
            <input id="Email" onChange={(e) => setEmail(e.target.value)} className="w-full bg-transparent border-b border-b-gray focus:border-b-yellow-500 focus:outline-none peer transition duration-500" type="text" name="Email" placeholder="" onFocus={(e) => { setTimeout(() => { e.target.placeholder = 'Ingresa tu dirección de correo electrónico (ej: usuario@dominio.com).'; }, 150); }} onBlur={(e) => { setTimeout(() => { e.target.placeholder = ""; }, 100); }} />
            <label htmlFor="Email" className="text-gray-300 w-[100%] absolute -top-1 left-0 text-center text-[16px] transform transition-all duration-500 peer-focus:text-yellow-500 peer-focus:font-semibold peer-focus:scale-75 peer-focus:-translate-x-[40.8%] peer-focus:translate-y-[-75%] peer-[:not(:placeholder-shown)]:-translate-x-[40.8%] peer-[:not(:placeholder-shown)]:translate-y-[-75%] peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold">Correo Electronico</label>
          </div>

          <div className="relative w-[80%] ">
            <input id="Telefono" className="w-full bg-transparent border-b border-b-gray focus:border-b-yellow-500 focus:outline-none peer transition duration-500" type="text" name="Telefono" placeholder="" onFocus={(e) => { setTimeout(() => { e.target.placeholder = "Ingresa tu teléfono con el código de área (ej: +54 9 11 2345 6789)."; }, 150); }} onBlur={(e) => { setTimeout(() => { e.target.placeholder = ""; }, 100); }} />
            <label htmlFor="Telefono" className="text-gray-300 w-full absolute -top-1 left-0 text-center text-[16px] transform transition-all duration-500 peer-focus:text-yellow-500 peer-focus:font-semibold peer-focus:scale-75 peer-focus:-translate-x-[40.5%] peer-focus:translate-y-[-75%] peer-[:not(:placeholder-shown)]:-translate-x-[40.5%] peer-[:not(:placeholder-shown)]:translate-y-[-75%] peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold">Telefono (opcional)</label>
          </div>

          <div className="relative w-[80%] flex justify-center mt-4">
            <textarea spellCheck="false" id="Mensaje" onChange={(e) => setMensaje(e.target.value)} className="w-[50%]  bg-transparent focus:border-b focus:border-t focus:border-b-yellow-500 focus:border-t-yellow-500 focus:outline-none peer transition duration-500" name="Mensaje" placeholder="" onFocus={(e) => { setTimeout(() => { e.target.placeholder = "Escribí tu mensaje aca (máximo 200 caracteres)"; }, 150); }} onBlur={(e) => { setTimeout(() => { e.target.placeholder = ""; }, 100); }} />
            <label htmlFor="Mensaje" className="text-gray-300 w-full absolute  text-center top-2  text-[16px] transform transition-all duration-500 peer-focus:text-yellow-500 peer-focus:font-semibold peer-focus:scale-90 peer-focus:translate-y-[-150%] peer-[:not(:placeholder-shown)]:translate-y-[-150%] peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:font-semibold">Mensaje</label>
          </div>
        
          <button disabled={disabled} onPointerEnter={() => {if (disabled) {setMsjbutton("Campos obligatorios faltantes")}}} onPointerLeave={() => {if (disabled) {setMsjbutton("Enviar")}}} className={` ${disabled ? "hover:bg-[#3b3b3b]" : "hover:bg-yellow-500"} pointer-events-auto  border-2 h-8 disabled:border-gray-400 disabled:text-gray-400 text-white font-bold transition duration-300 rounded-full w-[75%]`} onClick={() => navigate("/contacto/enviado")}><p>{msjbutton}</p></button>
            {/* El evento Pointer te permite disparar eventos aunque el boton este disabled, los eventos Mouse no.*/}
        </form>
      </div>


    </>
  )
}

export default Contacto