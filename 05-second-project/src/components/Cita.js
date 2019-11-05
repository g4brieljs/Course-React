import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => (
    <div className="media mt-3">
        <div className="media-body">
            <h3 className="mt-0">{cita.mascota}</h3>
            <p className="card-text"><span>Nombre Dueño: </span>{cita.propietario}</p>
            <p className="card-text"><span>Fecha: </span>{cita.fecha}</p>
            <p className="card-text"><span>Hora: </span>{cita.hora}</p>
            <p className="card-text"><span>Sintomas: </span>{cita.sintomas}</p>
            
            {/* Con un arrow function podemos esperar a que se ejecute el evento */}
            <button className="btn btn-danger" onClick={() => eliminarCita(cita.id)}>
                Eliminar
            </button>
        </div>
    </div>
);


Cita.propTypes = {
    cita : PropTypes.object.isRequired, 
    eliminarCita : PropTypes.func.isRequired,
}

export default Cita;