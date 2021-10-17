import React from 'react';
import ItemDetails, { Record } from "../item-details/item-details"
import withData from "../hoc-helpers/with-data";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const {
    getPerson,
    getPersonImage,
    getPlanet,
    getPlanetImage,
    getStarship,
    getStarshipImage
} = swapiService;

const PersonDetails = ({itemId}) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData = {getPerson}
            getImageUrl = {getPersonImage}>

            <Record field="gender" label="Gender" />
            <Record field="eye_color" label="Eye color" />
        </ItemDetails>
    );
};

const PlanetDetails = ({itemId}) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData = {getPlanet}
            getImageUrl = {getPlanetImage}>

            <Record field="name" label="Name" />
            <Record field="diameter" label="Diameter" />
        </ItemDetails>
    );
};

const StarshipDetails = ({itemId}) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData = {getStarship}
            getImageUrl = {getStarshipImage}>

            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="cost_in_credits" label="Coast" />
        </ItemDetails>
    );
};
export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}
