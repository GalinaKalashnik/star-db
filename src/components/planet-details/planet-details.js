// import React, { Component } from 'react';
//
// import './person-details.css';
// import SwapiService from "../../services/swapi-service";
// import Spinner from "../spinner/spinner";
//
// export default class PersonDetails extends Component {
//
//     swapiService = new SwapiService();
//
//     state = {
//         person: null,
//         loading: true,
//     }
//
//     updatePerson() {
//         const { personId, onPersonLoaded } = this.props;
//         if(!personId) {
//             return;
//         }
//
//         this.swapiService
//             .getPerson(personId)
//             .then((person) => {
//                 this.setState({person, loading: false})
//             })
//     }
//
//     componentDidMount() {
//         this.updatePerson();
//         this.setState({loading: false})
//     }
//
//     componentDidUpdate(prevProps) {
//         if(this.props.personId !== prevProps.personId) {
//             this.updatePerson();
//             this.setState({loading: true})
//         }
//     }
//
//     render() {
//
//         const {
//             person,
//             loading
//         } = this.state;
//
//         if(!this.state.person) {
//             return <span>Select a person from a list</span>
//         }
//
//         console.log(loading);
//         const spinner = loading ? <Spinner /> : null;
//         const content = !loading ? <PersonView person={person}/> : null;
//         return (
//             <div className="person-details card">
//                 {spinner}
//                 {content}
//             </div>
//         )
//     }
// }
//
// const PersonView = ({person}) => {
//     const {
//         id,
//         name,
//         gender,
//         birth_year,
//         eyeColor
//     } = person;
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
//                         <span>{eyeColor}</span>
//                     </li>
//                 </ul>
//             </div>
//         </React.Fragment>
//     )
// }
