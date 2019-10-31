import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointer } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './modal.sass';

export default class Modal extends React.Component {
    state = {
        isOpen: false
    };

    toggleModal = () => {
        this.setState(state => ({ isOpen: !state.isOpen}));
    }

    renderPortal = () => {
        const { children } = this.props;

        return ReactDOM.createPortal(
            <div className="modal">
                <div className="modal__overlay">
                    <div className="modal__form">
                        <button 
                            className="modal__close" 
                            onClick={this.toggleModal}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        { children }
                    </div> 
                </div>
            </div>,
                document.getElementById('portal')
            
            
        )
    }

    render() {
        const { isOpen } = this.state;
        return (
          <>
            <button className="modal__open" onClick={this.toggleModal}>
                <FontAwesomeIcon icon={ faHandPointer } />
            </button>
            {isOpen && this.renderPortal()}
          </>   
        );
    }
}