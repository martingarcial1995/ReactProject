import React, { useState, useEffect } from "react";
import "../styles/FormEdit.css";

const FormEdit = props => {
  const [card, setCard] = useState(props.currentCard);

  useEffect(() => {
    setCard(props.currentCard);
  }, [props]);
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCard({ ...card, [name]: value });
  };

  return (
    <div className="container__formEdit">
      <div className="form__edit">
        <h1 className="title__edit">Editar</h1>
        <form
          onSubmit={event => {
            event.preventDefault();
            props.updateCard(card.id, card);
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
          <div className="sect_buttons">
            <button className="btn save">Guardar cambios</button>
            <button
              className="btn cancel"
              onClick={() => props.setEditing(false)}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormEdit;
