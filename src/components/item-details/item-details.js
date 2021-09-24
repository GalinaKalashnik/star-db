import React, { Component } from 'react';

import './item-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import ErrorButton from "../error-button/error-button";

const Record = ({field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{field}</span>
            <span>{label}</span>
        </li>
    )
}
export {Record}

export default class ItemDetails extends Component {

    swapiService = new SwapiService();

    state = {
        item: null,
        loading: false,
        image: null
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if(this.props.itemId !==  prevProps.itemId) {
            this.setState({
                loading: true
            })
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;

        if(!itemId) {
            return
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item: item,
                    loading: false,
                    image: getImageUrl(item)
                })
            })
    }

    render() {
        if(!this.state.item) {
            return (
                <div className="item-details card">
                    Please select from the list
                </div>
            )
        }
        const {item, loading, image} = this.state;
        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <ItemView  item={item} image={image} props={this.props} /> : null;
        // const {id, name, gender, birth_year, eye_color } = item;
        return (
            <div className="item-details card">
                {spinner}
                {content}
                {/*<img className="item-image"*/}
                {/*     src={image}/>*/}

                {/*<div className="card-body">*/}
                {/*    <h4>{name}</h4>*/}
                {/*    <ul className="list-group list-group-flush">*/}
                {/*        {this.props.children}*/}
                {/*    </ul>*/}
                {/*    <ErrorButton />*/}
                {/*</div>*/}
            </div>
        )
    }
}


const ItemView = (item) => {
    console.log(item);
    const {id, name, gender, birth_year, eye_color } = item.item;
    const image = item.image;
    const props = item.props;

    console.log(props);
    return (
        <React.Fragment>
            <img className="item-image"
                 src={image}/>

            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(props.children, (child) => {
                            return child;
                        })
                    }
                </ul>
                <ErrorButton />
            </div>
        </React.Fragment>
    );
};

