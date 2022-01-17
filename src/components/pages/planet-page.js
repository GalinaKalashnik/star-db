import React, {Component} from "react";
import Row from "../row";
import PlanetDetails from "../sw-components/planet-details";
import { PlanetList } from "../sw-components/item-lists";

export default class PlanetPage extends Component {

    state = {
        selectedItem: null,
        hasError: false
    };

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    };

    render() {

        const { selectedItem } = this.state;

        return (
            <Row
                left={ <PlanetList onItemSelected={this.onItemSelected}/> }
                right={ <PlanetDetails itemId={selectedItem} /> }
            />
        )
    }
}
