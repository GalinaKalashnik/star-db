import React, { Component } from 'react';

import './item-details.css';
import Spinner from "../spinner/spinner";
import ErrorButton from "../error-button/error-button";

const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{ item[field] }</span>
        </li>
    )
}
export {Record}

export default class ItemDetails extends Component {

    state = {
        item: null,
        loading: false,
        image: null
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if(this.props.itemId !==  prevProps.itemId || this.props.getData !==  prevProps.getData) {
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
        const {name} = item;
        return (
            <div className="item-details card">
                {spinner}

                {!loading && (
                    <React.Fragment>
                        <img className="item-image" src={image} alt={image} />
                        <div className="card-body">
                            <h4>{name}</h4>
                            <ul className="list-group list-group-flush">
                                {
                                    React.Children.map(this.props.children, (child) => {
                                        return React.cloneElement( child, {item});
                                    })
                                }
                            </ul>
                            <ErrorButton />
                        </div>
                    </React.Fragment>
                )}
            </div>
        )
    }
}
