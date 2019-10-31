import React, { Component } from 'react';
import CardContainer from './cards/CardContainer';


export default class App extends Component {
    state = {
        isModalOpen: false
    };
    toggelModal = () => {
        this.setState(state => ({ isModalOpen: !state.isModalOpen}));
    }
    render() {
        return(
            <>
                <CardContainer />
                <div id="portal"></div>
            </>
        )
    }
}