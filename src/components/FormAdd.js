import React, { useState } from "react";

const FormAdd = props => {
  const initialFormState = {
    id: null,
    nameFruit: "",
    quantFruit: "",
    bgColor: "",
    fontColor: ""
  };
  const [card, setCard] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setCard({ ...card, [name]: value });
  };

  return (
    <React.Fragment>
      <h1>Agregar</h1>
      <form
        onSubmit={event => {
          event.preventDefault();
          if (
            !card.nameFruit ||
            !card.quantFruit ||
            !card.bgColor ||
            !card.fontColor
          )
          return;
          props.addCard(card);
          setCard(initialFormState);
        }}
      >
        <label>Agregar Ingrediente</label>
        <input
          className="campo"
          name="nameFruit"
          type="text"
          placeholder="Ingrediente..."
          value={card.nameFruit}
          onChange={handleInputChange}
        />
        <label>Agregar Cantidad</label>
        <input
          className="campo"
          name="quantFruit"
          type="text"
          placeholder="Cantidad..."
          value={card.quantFruit}
          onChange={handleInputChange}
        />
        <label>Agregar Color de Fondo</label>
        <input
          className="campo"
          type="text"
          name="bgColor"
          placeholder="Color de fondo..."
          value={card.bgColor}
          onChange={handleInputChange}
        />
        <label>Agregar Color de Texto</label>
        <input
          className="campo"
          type="text"
          name="fontColor"
          placeholder="Color de texto..."
          value={card.fontColor}
          onChange={handleInputChange}
        />
        <button className="btn__send">Agregar Ingrediente</button>
      </form>
    </React.Fragment>
  );
};

export default FormAdd;
