import React from "react";
import "../styles/CardIngredient.css";

const CardIngredient = props => (
  <div className="listCard">
    {props.cards.map(card => (
      <div
        className="card"
        key={card.id}
        style={{
          backgroundColor: `${card.bgColor}`,
          color: `${card.fontColor}`
        }}
      >
        <p className="fruit">{card.nameFruit}</p>
        <p className="quant">{card.quantFruit} gr</p>

        <button
          onClick={() => {
            props.editCard(card);
          }}
          className="btn_edit"
        >
          Editar
        </button>
        <button
          onClick={() => props.deleteCard(card.id)}
          className="btn_delete"
        >
          Eliminar
        </button>
      </div>
    ))}
  </div>
);

export default CardIngredient;
