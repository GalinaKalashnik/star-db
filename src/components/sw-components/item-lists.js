import React from 'react';
import ItemList from "../item-list/item-list";
import withData from "../hoc-helpers/with-data";
import SwapiService from "../../services/swapi-service";
import withSwapiService from "../hoc-helpers/with-swapi-service";

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

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
};

const PersonList = withSwapiService(
                        withData(
                            withChildrenFunction(ItemList, renderName)
                        ),
                        mapPersonMethodsToProps);
const PlanetList = withSwapiService(
                        withData(
                            withChildrenFunction(ItemList, renderName)
                        ),
                        mapPlanetMethodsToProps);
const StarshipList = withSwapiService(
                        withData(
                            withChildrenFunction(ItemList, renderModelAndName)
                        ),
                        mapStarshipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
}
