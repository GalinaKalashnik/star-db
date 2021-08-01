import React, { Component } from 'react';

import './item-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import ErrorButton from "../error-button/error-button";

export default class ItemDetails extends Component {

    state = {
        item: null,
        loading: true,
        image: null
    }

    componentDidMount() {
        this.updateItem();
        this.setState({loading: false})
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId ||
            this.props.getData !== prevProps.getData ||
            this.props.getImageUrl !== prevProps.getImageUrl) {
            this.updateItem();
            this.setState({loading: true})
        }
    }


    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item)
                });
            });
    }

    render() {

        const {
            item,
            loading,
            image
        } = this.state;

        if(!item) {
            return <span>Select a person from a list</span>
        }

        const {
            name,
            gender,
            birth_year,
            eye_color
        } = item;

        const spinner = loading ? <Spinner /> : null;
        // const content = !loading ? <PersonView person={item}/> : null;
        return (
            <div className="person-details card">
                {spinner}
                <img className="person-image"
                     src={image} />

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birth_year}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eye_color}</span>
                        </li>
                    </ul>
                    <ErrorButton />
                </div>
            </div>
        )
    }
}

// const PersonView = ({item}) => {
//     const {
//         id,
//         name,
//         gender,
//         birth_year,
//         eye_color
//     } = item;
//
//     return (
//         <React.Fragment>
//             <img className="person-image"
//                  src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
//
//             <div className="card-body">
//                 <h4>{name}</h4>
//                 <ul className="list-group list-group-flush">
//                     <li className="list-group-item">
//                         <span className="term">Gender</span>
//                         <span>{gender}</span>
//                     </li>
//                     <li className="list-group-item">
//                         <span className="term">Birth Year</span>
//                         <span>{birth_year}</span>
//                     </li>
//                     <li className="list-group-item">
//                         <span className="term">Eye Color</span>
//                         <span>{eye_color}</span>
//                     </li>
//                 </ul>
//                 <ErrorButton />
//             </div>
//         </React.Fragment>
//     )
// }
