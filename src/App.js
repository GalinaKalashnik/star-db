import React, {Component} from 'react';
import './App.css';
import Header from '../src/components/header/header';
import RandomPlanet from '../src/components/random-planet/random-planet';
import SwapiService from "./services/swapi-service";
import ErrorButton from "./components/error-button/error-button";
import PeoplePage from "./components/people-page/people-page";
import ErrorIndicator from "./components/error-indicator/error-indicator";
import ItemList from "./components/item-list/item-list";
import ItemDetails, {Record} from "./components/item-details/item-details";
import Row from "./components/row";


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
            <ItemDetails
                itemId={11}
                getData = {this.swapiService.getPerson}
                getImageUrl = {this.swapiService.getPersonImage}>

                <Record field="gender" label="Gender" />
                <Record field="eye_color" label="Eye color" />

            </ItemDetails>
        )

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData = {this.swapiService.getStarship}
                getImageUrl = {this.swapiService.getStarshipImage}>
                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="cost_in_credits" label="Coast" />
            </ItemDetails>
        )

        const planetDetails = (
            <ItemDetails
                itemId={5}
                getData = {this.swapiService.getPlanet}
                getImageUrl = {this.swapiService.getPlanetImage}>
                <Record field="name" label="Name" />
                <Record field="diameter" label="Diameter" />
            </ItemDetails>
        )

        return (
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

                <ItemList
                    getData={this.swapiService.getAllPeople}
                    onItemSelected={() => {}}>

                    { ({name}) => <span>{name}</span> }
                </ItemList>

                <ItemList
                    getData={this.swapiService.getAllPlanets}
                    onItemSelected={() => {}}>

                    { ({name}) => <span>{name}</span> }
                </ItemList>

                <ItemList
                    getData={this.swapiService.getAllStarships}
                    onItemSelected={() => {}}>

                    { ({name}) => <span>{name}</span> }
                </ItemList>
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
        );
    }
}
