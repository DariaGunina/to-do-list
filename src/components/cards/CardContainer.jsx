import React, { Component } from 'react';
import CardForm from './CardForm';
import Card from './Card';
import Modal from '../modal/Modal';

import './cards.sass';

export default class CardContainer extends Component {
    state = {
        input: '',
        cards: [
            {
                id: 1,
                name: 'Помыть полы',
            },
            {    
                id: 2,
                name: 'Приготовить обед',
            },
            {
                id: 3,
                name: 'Отдохнуть',
            }, 
        ],
    }

    handleInput = (e) => this.setState({ input: e.target.value });

    clickHandler = () => {
        const { cards, input } = this.state;
        const newCards = [...cards, { 
            name: input,
            id: input + Math.random(),
        }];
        this.setState({ 
            cards: newCards,
            input: '',
        });
    };

    deleteTodo = (id) => {
        const { cards } = this.state;
        const newList = cards.filter(card => card.id !== id);
        this.setState ({
            cards: newList,
        });
    }

    render() {
        const { input, cards } = this.state;

        return(
            <div className="cards">
                <CardForm 
                    value={input}
                    onInput={this.handleInput}
                    onClick={this.clickHandler}
                />
                <div className="cards__wrapper">
                    <ul className="cards__list">
                        {
                            cards.map((val, index) => (
                                <Card 
                                    name={val.name}
                                    key={index}
                                    id={val.id}
                                    onDelete={this.deleteTodo}
                                />
                            ))
                        }
                    </ul>
                </div>   
                <Modal>
                    Внимание!
                </Modal>
            </div>
        )  
    }
}
