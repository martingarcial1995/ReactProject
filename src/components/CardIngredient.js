import React from "react";
import "../styles/CardIngredient.css";

const CardIngredient = ({
  nameFruit,
  quantFruit,
  bgColor,
  fontColor,
  editCard,
  deleteCard
}) => (
  <div
    className="card"
    style={{ backgroundColor: `${bgColor}`, color: `${fontColor}` }}
  >
    <p className="fruit">{nameFruit}</p>
    <p className="quant">{quantFruit} gr</p>

    <button
      onClick={() => {
        editCard(this);
      }}
      className="btn_edit"
    >
      Editar
    </button>
    <button onClick={() => deleteCard(this.id)} className="btn_delete">
      Eliminar
    </button>
  </div>
);

export default CardIngredient;
