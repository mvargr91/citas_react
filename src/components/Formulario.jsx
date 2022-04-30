import {useEffect, useState} from 'react'
import Error from './Error';

const formulario = ({pacientes , setPacientes, paciente, setPaciente }) => {

  const [nombre , setNombre] = useState('');
  const [propietario , setPropietario] = useState('');
  const [email , setEmail] = useState('');
  const [fecha , setFecha] = useState('');
  const [sintomas , setSintomas] = useState('');
  
  const [error , setError] = useState(false);
    
  useEffect (() => {
    if( Object.keys(paciente).length > 0 ){
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);


  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36).substring(2);
    return fecha + random;
  }

  const handleSubmit  = (e) => {
    e.preventDefault();

    // validacion del formulario 
    if([nombre, propietario, email,fecha, sintomas].includes('')){
      console.log('campos vacios')
      setError(true);
      return;
    }

    setError(false);

    // objeto paciente

    const objetoPaciente = {
      nombre,
      propietario, 
      email,
      fecha, 
      sintomas
    }

    if(paciente.id){
      // editando el registro 
      objetoPaciente.id = paciente.id;
      const pacienteActualizado = pacientes.map(pacienteState  => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);
      setPacientes(pacienteActualizado);
      setPaciente({});

    }else{
      // nuevo registro 
      objetoPaciente.id  = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }



    // Reiniciar el formulario
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');

  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">Añade Paciente y {''}
          <span className="text-indigo-600 font-bold ">Administralos</span>
        </p>

        <form 
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
            {error && <Error>
                        <h1>Tener en cuenta:</h1>
                        <p>Todos los campos son obligatorios</p>
                      </Error>}
            <div className="mb-5">
              <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                Nombre Mascota
              </label>
              <input 
                id="mascota"
                type="text" 
                placeholder='Nombre de la mascota'
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value = {nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="Propietario" className="block text-gray-700 uppercase font-bold">
                Nombre Propietario
              </label>
              <input 
                id="Propietario"
                type="text" 
                placeholder='Nombre del Propietario'
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value = {propietario}
                onChange={(e) => setPropietario(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                Correo Electronico
              </label>
              <input 
                id="email"
                type="email" 
                placeholder='Correo Electronico'
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                Correo Electronico
              </label>
              <input 
                id="alta"
                type="date" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value = {fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                Sintomas
              </label>
              <textarea 
                name="" 
                id="sintomas" 
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                placeholder='Describe los sintomas'
                value = {sintomas}
                onChange={(e) => setSintomas(e.target.value)}
              />
            </div>

            <input 
              type="submit" 
              className="bg-indigo-700 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
              value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} 
            />

        </form>






    </div>
  )
}

export default formulario