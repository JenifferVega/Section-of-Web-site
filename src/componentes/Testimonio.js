import React from 'react';
import '../hojas-de-estilo/Testimonio.css'

function Testimonio(props) {
    return (
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio'
            src={require(`../Imagenes/imagen-${props.imagen}.jpg`)}
            alt='Foto Musk' />
            <div className='contenedor-text-testimonio'>
                <p className='nombre-testimonio'>
            <strong>{props.nombre} {props.pais} </strong></p>
                <p className='cargo-testimonio'>
                    <strong>{props.cargo} </strong>  {props.empresa}</p>
                <p className='texto-testimonio'>
                    {props.testimonio}</p>
            </div>
        </div>
    );
} 

export default Testimonio;