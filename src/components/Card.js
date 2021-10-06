import React from "react";
function Card({ card, onCardClick }) {
    function handleClick() {
        onCardClick(card);
    }
    return (
        <li key={card._id} className="element">
            <img onClick={handleClick} className="element__image" src={card.link} alt={card.name} />
            <button type="button" className="element__delete-btn" aria-label="Удалить карточку"></button>
            <div className="element__caption-container">
                <h2 className="element__caption">{card.name}</h2>
                <div>
                    <button type="button" className="element__like-btn" aria-label="Поставить лайк"></button>
                    <p className="element__like-counter">{card.likes.length}</p>
                </div>
            </div>
        </li >
    );
}

export default Card;