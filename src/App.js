import React, {Fragment, useState} from'react';
import Formulario from './components/Formulario';
import Turno from './components/Turno';


function App() {

  // Array de turnos
  const [turnos, guardarTurnos] = useState([]);


  // Toma los turnos actuales y agrega el nuevo
  const crearTurno = turno => {
      guardarTurnos([
        ...turnos,
        turno
      ])
  }

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
                    <h2>Administra tus turnos</h2>
                    {turnos.map(turno => (
                      <Turno
                        key={turno.id}
                        turno={turno}
                      />
                    ))}
              </div>
          </div>
      </div>

    </Fragment>
  );
}

export default App;
