import React, {Component} from "react";
import Row from "../row";
import PersonDetails from "../sw-components/person-details";
import { PersonList } from "../sw-components/item-lists";

export default class PeoplePage extends Component {

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
                left={ <PersonList onItemSelected={this.onItemSelected}/> }
                right={ <PersonDetails itemId={selectedItem} /> }
            />
        )
    }
}
