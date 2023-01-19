import React from 'react';
import { Card } from "react-bootstrap";

export const CardF = ( props ) => {
    const { card } = props;
    const { nombre, telefono, correo, colorFondo, colorTexto } = card;
    const colorBack = colorFondo === "Rojo" ? "red" : colorFondo === "Azul" ? "blue" : colorFondo === "Amarillo" ? "yellow": "green";
    const colorText = colorTexto === "Rojo" ? "red" : colorTexto === "Azul" ? "blue" : colorTexto === "Amarillo" ? "yellow": "green";
    return (
        <Card>
            <Card.Body style={{ backgroundColor: colorBack}}>
                <Card.Title style={ {color: colorText} } >Nombre: { nombre }</Card.Title>
                <Card.Text style={ {color: colorText} }>
                    <p>Tel&eacute;fono:{ telefono}</p>
                    <p>Correo:{ correo }</p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
