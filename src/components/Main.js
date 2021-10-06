import React, { useEffect, useState } from 'react';
import { api } from '../utils/api';
import Card from './Card';
import Spinner from './Spinner';
import profileAvatar from '../images/profile/__avatar/profile__avatar-loading.gif';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
    const [userName, setUserName] = useState("...");
    const [userDescription, setUserDescription] = useState("...");
    const [userAvatar, setUserAvatar] = useState(profileAvatar);
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        Promise.all([api.getInitialInfo(), api.getInitialCards()])
            .then(([info, cardsArr]) => {
                setUserName(info.name);
                setUserDescription(info.about);
                setUserAvatar(info.avatar);
                setCards(cardsArr);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <main className="main">
            <section className="profile">
                <div className="profile__group">
                    <img className="profile__avatar" src={userAvatar} alt="Аватар" />
                    <div className="profile__avatar-edit" onClick={onEditAvatar}></div>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{userName}</h1>
                    <p className="profile__subtitle">{userDescription}</p>
                    <button onClick={onEditProfile} type="button" className="profile__edit-button" aria-label="Изменить профайл"></button>
                </div>
                <button onClick={onAddPlace} type="button" className="profile__add-button" aria-label="Добавить профайл"></button>
            </section>
            <section className="elements">
                {isLoading ? <Spinner /> :
                    <ul className="elements__list">
                        {cards.map((card) => <Card card={card} onCardClick={onCardClick} />)}
                    </ul>
                }
            </section>
        </main>
    );
}

export default Main;