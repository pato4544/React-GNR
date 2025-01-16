import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'


interface Options {
  options: string[]; // Creamos el tipo del parametro que va a recibir la componente Select, que seria el array de options
  selectedValue: string | null;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Select:React.FC<Options> = ({options, selectedValue, onChange, placeholder = "?"}) => {
  // const lected, setSelected = <string>('¿Cual el motivo de tu mensaje?')  // El valor inicial seria el placeholder del "select". Con este hook vamos a ir seteando los valores de los options en el select

  return (
    <div>
      <label htmlFor='select' className='text-gray-300 text-[12px] font-semibold'>Asunto</label>
      <div className="relative mt-1">
        <Listbox value={selectedValue} onChange={onChange}>  {/* Al notar un cambio (de valor) al seleccionar una de las options se setea el hook */}
          <div className="relative">

            <ListboxButton className={` ${!selectedValue ? "text-black" :"text-white"} w-full text-[16px] text-left border-b border-b-gray`}>
              <span>{selectedValue || placeholder}</span> {/* Mostramos el valor seteado de la ListBox*/}         
            </ListboxButton>
            
            {/* Abajo en vez de utilizar pb y pt como un boludo pones py no mas, un trucazo */}
            <ListboxOptions className="absolute w-full bg-[#3b3b3b] z-50 ">
              {options?.map((option) => (  // Es 40 veces mejor pasar las options como parametros a la componente al llamarla que el mamarracho de repetir 5 veces una option, mas dinamico y reduce el codigo
                              <ListboxOption value={option} className="cursor-pointer hover:bg-black/90 border-b border-b-gray text-[15px] relative py-1 pl-2 text-white"> 
                              {({ selected }) => ( // Propiedad de ListBox. Es un booleano que devuelve true si la opcion esta seleccionada y false si no
                                <> {/* Mas abajo utilizamos el booleano de arriba provisto por ListBox para jugar con los estilos de la option*/}
                                  <span className={`${selected ? 'text-yellow-400 font-semibold' : 'text-white'}`}>{option}</span> {/* Si esta seleccionado al mostrarmelo de vuelta como option va a ser amaillo y con otra fuente, si no va a seguir gray */}
                                  {selected && (
                                      <span className={`absolute inset-y-0 right-0 flex items-center pr-4 text-yellow-500`}>✓</span> // La tilde pedorra en caso de que selected sea true
                                  )}
                                </>
                              )}
                            </ListboxOption>
              ) )}
            </ListboxOptions>
          </div>
        </Listbox>
      </div>
    </div>
  )
}

export default Select;

