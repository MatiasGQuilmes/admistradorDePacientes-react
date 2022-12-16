import React, { Fragment , useState } from 'react';
import shortid from 'shortid';



const Formulario = () => {

    // Crear State de Citas
    const [cita, actualizarCita] = useState({
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
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    // Agregar turno
    const submitTurno = e => {
        e.preventDefault();

        // Validar datos
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === 
        ''  ) {
            actualizarError(true);
            return; //si hay un problema no sigue ejecutando el codigo
        }

        // Eliminar el mensaje previo
        actualizarError(false);

        // generando y asignando id
        cita.id = shortid.generate(); //asigna automaticamente un id con la libreria shortid, no use uuid
        console.log(cita);
       
        // Creando la cita

        
        // Reiniciar el form
    }


    return ( 
        <Fragment>
            <h2>Crear Cita</h2>
            
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
                >Agregar Cita</button>
            </form>

        </Fragment>
     );
}
 
export default Formulario;