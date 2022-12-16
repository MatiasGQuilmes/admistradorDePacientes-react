import React, { Fragment , useState } from 'react';
import shortid from 'shortid';



const Formulario = ({crearTurno}) => {

    // Crear State de turnos
    const [turno, actualizarturno] = useState({
        id: '',
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, actualizarError] = useState(false);

    //Funcion que se ejecuta cuando el usuario escribe en un input
    const actualizarState = e => {
        actualizarturno({
            ...turno,
            [e.target.name]: e.target.value
        })
    }

    // Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = turno;

    // Agregar turno
    const submitTurno = e => {
        e.preventDefault();

        // Validando datos
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === 
        ''  ) {
            actualizarError(true);
            return; //si hay un problema no sigue ejecutando el codigo
        }

        // Eliminar el mensaje de error
        actualizarError(false);

        // generando y asignando id
        turno.id = shortid.generate(); //asigna automaticamente un id con la libreria shortid, no use uuid
        
       
        // Creando el turno
        crearTurno(turno);
        
        // Reiniciar los campos del form
        actualizarturno({
            id: '',
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }


    return ( 
        <Fragment>
            <h2>Crear turno</h2>
            
            {error ?   <p className='alerta-error'>Todos los campos son obligatorios!</p>  : null}

            <form
                onSubmit={submitTurno}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className='u-full-width'
                    placeholder='Nombre Mascota' 
                    onChange={actualizarState}
                    value={mascota}
                 />

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className='u-full-width'
                    placeholder='Nombre Dueño de la mascota' 
                    onChange={actualizarState}
                    value={propietario}
                 />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className='u-full-width'  
                    onChange={actualizarState} 
                    value={fecha}             
                 />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className='u-full-width'
                    onChange={actualizarState}
                    value={hora}
                 />

                <label>Sintomas</label>
                <textarea
                    className='u-full-width'
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button 
                    type="submit"
                    className='u-full-width button-primary'
                >Agregar turno</button>
            </form>

        </Fragment>
     );
}
 
export default Formulario;