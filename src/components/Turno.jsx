import React from 'react';
import PropTypes from 'prop-types'


const Turno = ({turno, eliminarTurno}) => ( 

    <div className='cita'>
        <p>Mascota: <span>{turno.mascota}</span></p>
        <p>Dieño: <span>{turno.propietario}</span></p>
        <p>Fecha: <span>{turno.fecha}</span></p>
        <p>Hora: <span>{turno.hora}</span></p>
        <p>Sintomas: <span>{turno.sintomas}</span></p>

        <button
            className='button eliminar u-full-width'
            onClick={() => eliminarTurno(turno.id)}          
        >Eliminar &times;</button>
    </div>

);

 
Turno.propTypes = {
    turno: PropTypes.object.isRequired,
    eliminarTurno: PropTypes.func.isRequired
}

export default Turno;