import React from 'react';


const Turno = ({turno}) => ( 

    <div className='cita'>
        <p>Mascota: <span>{turno.mascota}</span></p>
        <p>Dieño: <span>{turno.propietario}</span></p>
        <p>Fecha: <span>{turno.fecha}</span></p>
        <p>Hora: <span>{turno.hora}</span></p>
        <p>Sintomas: <span>{turno.sintomas}</span></p>
    </div>

);

 
export default Turno;