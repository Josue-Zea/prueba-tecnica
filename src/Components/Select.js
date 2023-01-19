import React from 'react';
const colores = [
    "Rojo",
    "Azul",
    "Amarillo",
    "Verde"
];

export const Select = ( props ) => {
    const { handleInputChange, type } = props.action;
    return (
        <select
            className="form-select selectColors"
            onClick={ handleInputChange }
            name={ type }
        >
            {
                colores.map( ( color, i )=> {
                    return (
                        <option
                            key={ i }
                            value={ color }
                            name={ type }
                        >
                            { color }
                        </option>
                    )
                })
            }
        </select>
    )
}
