import React, { Component } from 'react';

import Header from './components/header/header';
import RandomPlanet from './components/random-planet/random-planet';

import './App.css';
import ErrorButton from "./components/error-button/error-button";
import ErrorIndicator from "./components/error-indicator/error-indicator";
import PeoplePage from "./components/people-page/people-page";
import ItemList from "./components/item-list/item-list";
import ItemDetails, {Record} from "./components/item-details/item-details";
import SwapiService from "./services/swapi-service";
import Row from "./components/row/row";


class App extends Component {
    swapiService = new SwapiService();

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState({ hasError: true} )
    }

    render ()
    {
        if(this.state.hasError) {
            return <ErrorIndicator />
        }

        const {
            getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage
        } = this.swapiService;

        const personDetails = (
            <ItemDetails
                itemId={5}
                getData={getPerson}
                getImageUrl={getPersonImage}>

                <Record field="gender" label="Gender" />
                <Record field="birth_year" label="Birth Year" />
                <Record field="eye_color" label="Eye Color" />
            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarshipImage}>

                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="passengers" label="Passengers" />

            </ItemDetails>
        );

        return (
            <div className="stardb-api">
                <Header/>
                {/*<RandomPlanet/>*/}
                {/*<ErrorButton />*/}

                {/*<PeoplePage />*/}
                <Row left={personDetails} right={starshipDetails}/>

                {/*<div className="row mb2">*/}
                {/*    <div className="col-md-6">*/}
                {/*        <ItemList*/}
                {/*            onItemSelected={this.onPersonSelected}*/}
                {/*            getData={this.swapiService.getAllPlanets}*/}
                {/*            renderItem={({name, diameter}) => `${name} (${diameter})`}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <div className="col-md-6">*/}
                {/*        <ItemDetails personId={this.state.selectedPerson}/>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="row mb2">*/}
                {/*    <div className="col-md-6">*/}
                {/*        <ItemList*/}
                {/*            onItemSelected={this.onPersonSelected}*/}
                {/*            getData={this.swapiService.getAllStarships}*/}
                {/*            renderItem={({name, model, manufacturer}) => `${name} (${model}, ${manufacturer})`}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <div className="col-md-6">*/}
                {/*        <ItemDetails personId={this.state.selectedPerson}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        )
    }
};

export default App;
