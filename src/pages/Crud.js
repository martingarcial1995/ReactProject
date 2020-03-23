import React, { useState } from "react";
import "../styles/Crud.css";
import CardIngredient from "../components/CardIngredient";
import Navbar from "../components/Navbar";
import FormAdd from "../components/FormAdd";
import FormEdit from "../components/FormEdit";

const Crud = () => {
  const cardData = [
    {
      id: 1,
      nameFruit: "Platano",
      quantFruit: "200",
      bgColor: "#333",
      fontColor: "#fff"
    },
    {
      id: 2,
      nameFruit: "Fresa",
      quantFruit: "100",
      bgColor: "#FF0000",
      fontColor: "#fff"
    }
  ];

  const formState = {
    id: null,
    nameFruit: "",
    quantFruit: "",
    bgColor: "",
    fontColor: ""
  };

  const [cards, setCards] = useState(cardData);
  const [currentCard, setCurrentCard] = useState(formState);
  const [editing, setEditing] = useState(false);

  const addCard = card => {
    card.id = cards.length + 1;
    setCards([...cards, card]);
  };

  const deleteCard = id => {
    setEditing(false);
    setCards(cards.filter(card => card.id !== id));
  };

  const updateCard = (id, updatedCard) => {
    setEditing(false);
    setCards(cards.map(card => (card.id === id ? updatedCard : card)));
  };

  const editCard = card => {
    setEditing(true);
    setCurrentCard({
      id: card.id,
      nameFruit: card.nameFruit,
      quantFruit: card.quantFruit,
      bgColor: card.bgColor,
      fontColor: card.fontColor
    });
  };

  return (
    <div>
      <Navbar />
      <div className="crud__container">
        <div className="section form">
          {editing ? (
            <FormEdit
              editing={editing}
              setEditing={setEditing}
              currentCard={currentCard}
              updateCard={updateCard}
            />
          ) : (
            <FormAdd addCard={addCard} />
          )}
        </div>
        <div className="section list">
          <CardIngredient
            editCard={editCard}
            deleteCard={deleteCard}
            cards={cards}
          />
        </div>
      </div>
    </div>
  );
};

export default Crud;
