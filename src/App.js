import React, {Component} from 'react';
import './App.css';
import PropTypes from "prop-types";
import Header from '../src/components/header/header';
import RandomPlanet from '../src/components/random-planet/random-planet';
import SwapiService from "./services/swapi-service";

import ErrorIndicator from "./components/error-indicator/error-indicator";

import PeoplePage from './components/pages/people-page';
import PlanetPage from "./components/pages/planet-page";
import StarshipPage from "./components/pages/starship-page";

import { SwapiServiceProvider } from "./components/swapi-service-context/swapi-service-context";
import DummySwapiService from './services/dummy-swapi-service';



export default class App extends Component {

    state = {
        showRandomPlanet: true,
        selectedPerson: null,
        hasError: false,
        swapiService: new SwapiService()
    };

    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
            return {
                swapiService: new Service()
            }
        })
    }

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
            <RandomPlanet updateInterval={3000}/> :
            null;

        return (
            <SwapiServiceProvider value={this.state.swapiService} >
                <div className="stardb-app">
                    <Header onServiceChange={this.onServiceChange}/>
                    { planet }

                    {/*<div className="row mb2 button-row">*/}
                    {/*    <button*/}
                    {/*        className="toggle-planet btn btn-warning btn-lg random-planet"*/}
                    {/*        onClick={this.toggleRandomPlanet}>*/}
                    {/*        Toggle Random Planet*/}
                    {/*    </button>*/}

                    {/*    <ErrorButton />*/}
                    {/*</div>*/}

                    <PeoplePage />
                    <PlanetPage />
                    <StarshipPage />
                </div>
            </SwapiServiceProvider>
        );
    }
}
