import React, { Fragment, useState, useEffect } from'react';
import Formulario from './components/Formulario';
import Turno from './components/Turno';


function App() {

  // turnos en el local storage
  let turnosIniciales = JSON.parse(localStorage.getItem('turnos'));
  if (!turnosIniciales){
    turnosIniciales = [];
  }

  // Array de turnos
  const [turnos, guardarTurnos] = useState(turnosIniciales);

  // Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
      if(turnosIniciales){
        localStorage.setItem('turnos', JSON.stringify(turnos));
      }else{
        localStorage.setItem('turnos', JSON.stringify([]));
      }
  }, [turnos])


  // Toma los turnos actuales y agrega el nuevo
  const crearTurno = turno => {
      guardarTurnos([
        ...turnos,
        turno
      ])
  }

  //elimina turno por su id
  const eliminarTurno = id => {
      const nuevosTurnos = turnos.filter(turno => turno.id !== id);
      guardarTurnos(nuevosTurnos);
  }


  // mensaje condicional
  const titulo = turnos.length === 0 ? 'No hay turnos ' : 'Administra tus turnos'; 


  return (
    <Fragment>
      
      <h1>Administrador de Pacientes</h1>

      <div className='container'>
          <div className='row'>
              <div className='one-half column'>
                  <Formulario 
                    crearTurno={crearTurno}
                  />
              </div>
              <div className='one-half column'>
                    <h2>{titulo}</h2>
                    {turnos.map(turno => (
                      <Turno
                        key={turno.id}
                        turno={turno}
                        eliminarTurno={eliminarTurno}
                      />
                    ))}
              </div>
          </div>
      </div>

    </Fragment>
  );
}

export default App;
