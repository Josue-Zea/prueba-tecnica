import React, { useEffect, useState } from 'react'
import { Select } from '../Components/Select';
import { useForm } from '../Hooks/useForm';
import Swal from 'sweetalert2';
import "./css/form.css";

export const FormPage = () => {
  const [cards, setCards] = useState([]);
  const [message, setMessage] = useState(false);

  useEffect( () => {
    setCards( JSON.parse(localStorage.getItem("cards") || [] ));
    setMessage( JSON.parse(localStorage.getItem("message") || false ));
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("cards", JSON.stringify( cards ));
  // }, [cards]);

  // useEffect(() => {
  //   localStorage.setItem("message", JSON.stringify( message ));
  // }, [message]);

  const [formValues, handleInputChange, reset] = useForm({
    nombre: "",
    telefono: "",
    correo: "",
    colorFondo: "Rojo",
    colorTexto: "Rojo"
  });

  const { nombre, telefono, correo, colorFondo, colorTexto } = formValues;

  const ingresarCarta = () => {
    const newCard = {
      nombre,
      telefono,
      correo,
      colorFondo,
      colorTexto
    }
    setCards([
      ...cards,
      newCard
    ]);
    setMessage(!message);
    localStorage.setItem("cards", JSON.stringify( [
      ...cards,
      newCard
    ] ));
    localStorage.setItem("message", JSON.stringify( !message ));
    showAlert();
  }; 

  const showAlert = () => {
    Swal.fire({
      title: 'Se ha guardado la tarjeta',
      text: "Para ingresar otro dato presione el botón siguiente",
      icon: 'warning',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Ingresar otro dato',
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
        setMessage(!message);
        localStorage.setItem("message", JSON.stringify( !message ));
        reset();
      }
    })
  }

  if (message  === true ) showAlert(); //20230119 Josue David Zea Herrera

  return (
    <div className="loginDiv">
      <div className="animate__animated animate__bounceInLeft" id="loginform">
        <h2 id="headerTitle">Ingresar tarjeta</h2>
        <div>
          <div className="row">
            <label>Nombre</label>
            <input
              name="nombre"
              type="text"
              placeholder="Pepito"
              maxLength={20}
              value={nombre}
              onChange={handleInputChange}
            />
          </div>
          <div className="row">
            <label>Telefono</label>
            <input
              name="telefono"
              type="text"
              placeholder="000000"
              maxLength={8}
              value={telefono}
              onChange={handleInputChange}
            />
          </div>
          <div className="row">
            <label>Correo</label>
            <input
              name="correo"
              type="text"
              placeholder="asd@hotmail.com"
              value={correo}
              onChange={handleInputChange}
            />
          </div>
          <div className="row">
            <label>Color de fondo</label>
            <Select action={{ handleInputChange, type: "colorFondo", color: colorFondo }} />
          </div>
          <div className="row">
            <label>Color de texto</label>
            <Select action={{ handleInputChange, type: "colorTexto", color: colorTexto }} />
          </div>
          <div id="button" className="row">
            <button
              onClick={() => ingresarCarta()}
            >Ingresar carta</button>
          </div>
        </div>
      </div>
    </div>
  )
}