import React, {Component} from 'react';
import './App.css';
import Header from '../src/components/header/header';
import RandomPlanet from '../src/components/random-planet/random-planet';
import SwapiService from "./services/swapi-service";
import ErrorButton from "./components/error-button/error-button";

import ErrorIndicator from "./components/error-indicator/error-indicator";

import ItemDetails, {Record} from "./components/item-details/item-details";
import Row from "./components/row";
import {
    PersonList,
    PlanetList,
    StarshipList
} from "./components/sw-components/item-lists";

import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from "./components/sw-components/details";

import { SwapiServiceProvider } from "./components/swapi-service-context/swapi-service-context";


export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        selectedPerson: null,
        hasError: false
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        const personDetails = (
            <PersonDetails itemId={11} />
        )

        const starshipDetails = (
            <StarshipDetails itemId={5} />
        )

        const planetDetails = (
            <PlanetDetails itemId={5} />
        )

        return (
            <SwapiServiceProvider value={this.swapiService} >
                <div className="stardb-app">
                    <Header/>
                    {/*{ planet }*/}

                    {/*<div className="row mb2 button-row">*/}
                    {/*    <button*/}
                    {/*        className="toggle-planet btn btn-warning btn-lg random-planet"*/}
                    {/*        onClick={this.toggleRandomPlanet}>*/}
                    {/*        Toggle Random Planet*/}
                    {/*    </button>*/}

                    {/*    <ErrorButton />*/}
                    {/*</div>*/}


                    <Row
                        left={personDetails}
                        right={starshipDetails} />
                    <Row left={planetDetails} />

                    <PersonList/>

                    <PlanetList />

                    <StarshipList/>
                    {/*<PeoplePage />*/}
                    {/*<div className="row mb2">*/}
                    {/*    <div className="col-md-6">*/}
                    {/*        <ItemList*/}
                    {/*            onItemSelected={this.onPersonSelected}*/}
                    {/*            getData={this.swapiService.getAllPlanets}*/}
                    {/*            renderItem={({name, diameter}) => `${name} (${diameter})`}/>*/}
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
                    {/*            renderItem={({name, manufacturer}) => `${name} (${manufacturer})` }/>*/}
                    {/*    </div>*/}
                    {/*    <div className="col-md-6">*/}
                    {/*        <ItemDetails itemId={this.state.selectedPerson}/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </SwapiServiceProvider>
        );
    }
}
