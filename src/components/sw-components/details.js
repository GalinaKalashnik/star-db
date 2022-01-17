import React from 'react';
import ItemDetails, { Record } from "../item-details/item-details"
import {SwapiServiceConsumer} from "../swapi-service-context/swapi-service-context";

const PersonDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPerson, getPersonImage}) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData = {getPerson}
                            getImageUrl = {getPersonImage}>

                            <Record field="gender" label="Gender" />
                            <Record field="eye_color" label="Eye color" />
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>

    );
};

const PlanetDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPlanet, getPlanetImage}) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getPlanet}
                            getImageUrl={getPlanetImage}>

                            <Record field="name" label="Name"/>
                            <Record field="rotationPeriod" label="Rotation Period"/>
                            <Record field="diameter" label="Diameter"/>
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
    )
};

const StarshipDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getStarship, getStarshipImage}) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getStarship}
                            getImageUrl={getStarshipImage}>

                            <Record field="model" label="Model"/>
                            <Record field="length" label="Length"/>
                            <Record field="cost_in_credits" label="Coast"/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    );
};
export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}
