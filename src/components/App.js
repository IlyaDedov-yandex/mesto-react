
import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <label className="form__field">
          <input type="text" name="profile-name" placeholder="Имя" className="form__input form__input_type_name"
            id="name-input" required minLength="2" maxLength="40" />
          <span className="form__input-error name-input-error"></span>
        </label>
        <label className="form__field">
          <input type="text" name="profile-about" placeholder="О себе"
            className="form__input form__input_type_about" id="about-input" required minLength="2"
            maxLength="200" />
          <span className="form__input-error about-input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm name="new-card" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <label className="form__field">
          <input type="text" name="card-name" placeholder="Название" className="form__input form__input_type_name"
            id="card-name-input" required minLength="2" maxLength="30" />
          <span className="form__input-error card-name-input-error"></span>
        </label>
        <label className="form__field">
          <input type="url" name="card-link" placeholder="Ссылка на картинку"
            className="form__input form__input_type_about" id="card-link-input" required />
          <span className="form__input-error card-link-input-error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm name="delete" title="Вы уверены" />
      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <label className="form__field">
          <input type="url" name="avatar-link" placeholder="ссылка на аватар"
            className="form__input form__input_type_link" id="avatar-link-input" required />
          <span className="form__input-error avatar-link-input-error"></span>
        </label>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
