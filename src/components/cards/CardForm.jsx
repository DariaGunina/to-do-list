import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const CardForm = ({ value, onInput, onClick }) => (
    <div className="cards__form">
        <input 
            className="cards__input" 
            type="text" 
            name="search" 
            placeholder="Что у вас нового?"
            value={value}
            onChange={onInput}
        />
        <button
            className="cards__button"
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faCoffee} />
        </button>  
    </div>

    
);

export default CardForm;