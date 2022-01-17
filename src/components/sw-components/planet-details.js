import React from 'react';
import ItemDetails, { Record } from "../item-details/item-details"
import withSwapiService from "../hoc-helpers/with-swapi-service";

const PlanetDetails = ({itemId, swapiService}) => {
    const {getPlanet, getPlanetImage} = swapiService;
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
};

export default withSwapiService(PlanetDetails);
