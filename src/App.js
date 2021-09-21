import React, {Component} from 'react';
import './App.css';
import Header from '../src/components/header/header';
import RandomPlanet from '../src/components/random-planet/random-planet';
import ItemList from '../src/components/item-list/item-list';
import PersonDetails from '../src/components/person-details/person-details';
import SwapiService from "./services/swapi-service";


export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };


    render() {

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;


        return (
            <div className="stardb-app">
                <Header/>
                { planet }

                <button
                    className="toggle-planet btn btn-warning btn-lg random-planet"
                    onClick={this.toggleRandomPlanet}>
                    Toggle Random Planet
                </button>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails/>
                    </div>
                </div>
            </div>
        );
    }
}
