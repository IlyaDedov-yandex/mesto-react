import React from 'react';
function PopupWithForm({ name, title, isOpen, onClose, children }) {
    return (
        <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button onClick={onClose} type="button" className="popup__close-btn" aria-label="Закрыть попап"></button>
                <form className="form" name={`${name}-form`} noValidate>
                    <h2 className="form__title">{title}</h2>
                    {children}
                    <button type="submit" className="form__save-btn">Сохранить</button>
                </form>
            </div>
        </div>
    );
}
export default PopupWithForm;