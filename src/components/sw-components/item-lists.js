import React from 'react';
import ItemList from "../item-list/item-list";
import withData from "../hoc-helpers/with-data";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService;

const withChildrenFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}

const renderName = ({name}) => <span>{name}</span>
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>

const PersonList = withData(
                        withChildrenFunction(ItemList, renderName),
                        getAllPeople);
const PlanetList = withData(
                        withChildrenFunction(ItemList, renderName),
                        getAllPlanets);
const StarshipList = withData(
                        withChildrenFunction(ItemList, renderModelAndName),
                        getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
}
