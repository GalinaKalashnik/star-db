import React, {Component} from "react";
import Row from "../row";
import StarshipDetails from "../sw-components/starship-details";
import { StarshipList } from "../sw-components/item-lists";

export default class StarshipPage extends Component {

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
                left={ <StarshipList onItemSelected={this.onItemSelected}/> }
                right={ <StarshipDetails itemId={selectedItem} /> }
            />
        )
    }
}
