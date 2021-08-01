import React, { Component } from 'react';
import ItemList from '../item-list/item-list';
import SwapiService from '../../services/swapi-service';
import ItemDetails from "../item-details/item-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import Row from "../row/row";

class ErrorBoundry extends Component {
    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({ hasError: true } )
    }

    render() {
        if(this.state.hasError) {
            return <ErrorIndicator />
        }
        return this.props.children;
    }
}

export default class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 11
    };


    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson });
    };

    render() {
        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
                renderItem={({name, gender, height}) => `${name} (${gender}, ${height})`}
            />
        );
        const personDetails = (
            <ErrorBoundry>
                <ItemDetails personId={this.state.selectedPerson}/>
            </ErrorBoundry>
        )

        return (
            <Row left={itemList} right={personDetails}/>
        );
    }
}
