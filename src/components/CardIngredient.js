import React from "react";
import "../styles/CardIngredient.css";
import Swal from "sweetalert2";

const CardIngredient = props => (
  <div className="listCard">
    <h1>Ingredientes</h1>

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
          onClick={
            () =>
              Swal.fire({
                title: "¿Quieres eliminar este ingrediente?",
                text: "Estas a punto de eliminar este ingrediente",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Eliminar"
              }).then(result => {
                if (result.value) {
                  props.deleteCard(card.id);
                  Swal.fire(
                    "¡Eliminado!",
                    "Se elimino este ingrediente.",
                    "success"
                  );
                }
              })
            // props.deleteCard(card.id)
          }
          className="btn_delete"
        >
          Eliminar
        </button>
      </div>
    ))}
  </div>
);

export default CardIngredient;
