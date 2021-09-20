import React from 'react';
import './App.css';
import Header from '../src/components/header/header';
import RandomPlanet from '../src/components/random-planet/random-planet';
import ItemList from '../src/components/item-list/item-list';
import PersonDetails from '../src/components/person-details/person-details';


const App = () => {
    return (
        <div>
            <Header />
            <RandomPlanet />

            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList />
                </div>
                <div className="col-md-6">
                    <PersonDetails />
                </div>
            </div>
        </div>
    );
};

export default App;
