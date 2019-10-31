import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const Card = ({name, id, onDelete}) => (
    <li className="cards__element"> 
        {name}
        <button className="cards__knob" onClick={() => onDelete(id)}> 
            <FontAwesomeIcon icon={faTimes} />
        </button>
    </li>
);

export default Card;