import React, {Component} from 'react';
import './App.css';
import Header from '../src/components/header/header';
import RandomPlanet from '../src/components/random-planet/random-planet';
import SwapiService from "./services/swapi-service";
import ErrorButton from "./components/error-button/error-button";
import PeoplePage from "./components/people-page/people-page";
import ErrorIndicator from "./components/error-indicator/error-indicator";


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
        
        return (
            <div className="stardb-app">
                <Header/>
                { planet }

                <div className="row mb2 button-row">
                    <button
                        className="toggle-planet btn btn-warning btn-lg random-planet"
                        onClick={this.toggleRandomPlanet}>
                        Toggle Random Planet
                    </button>

                    <ErrorButton />
                </div>

                <PeoplePage />
                <PeoplePage />
                <PeoplePage />
            </div>
        );
    }
}
