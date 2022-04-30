import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPacientes}) => {


  return (
     <div className="md:w-1/2 lg:w-3/5 ">
       
       <div className="md:h-screen overflow-y-scroll">
          {pacientes && pacientes.length ? (
            
            <>
              <h2 className="font-blank text-3xl text-center">Listado Pacientes</h2>
              <p className="text-xl mt-5 mb-10 text-center">
                  Administra tus {' '}
                  <span className="text-indigo-600 font-bold">Pacientes y citas</span>
              </p>
            </>
          ) : (
            <>
              <h2 className="font-blank text-3xl text-center">No hay Pacientes</h2>
              <p className="text-xl mt-5 mb-10 text-center">
                  Comienza agregando {' '}
                  <span className="text-indigo-600 font-bold">Pacientes</span>
              </p>
            </>          
          )}




         {pacientes.map(  paciente => (
            <Paciente 
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPacientes={eliminarPacientes}
            />
         ))}
        
       </div>
     </div>
  )
}

export default ListadoPacientes