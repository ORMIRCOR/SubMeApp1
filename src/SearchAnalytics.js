import React, { Component } from "react";
import SmartProfile from "./SmartProfile";
/// import { belongingVector } from './Data.js';

export const subletDurationCategory = [3, 5, 10, 14, 21, 30, 90]; //The duration of sublet ads that the user (searcher) marked as a like

export const maxPriceCategory = [1500, 3000, 4500, 6000, 7500, 9000, 10500, 12000]; //The maximum price a user searched for a sublet ad

export const commonCountryAreaCategory = [0, 4, 2, 3, 7]; //In order to find the user's most common area search at israel (haifa, jerusalem,tlv, eilat)

export const commonCityAreaCategory = ["Without preference", "North", "Center", "South"]; //In order to find the user's most common area search at the city

class SearchAnalytics extends Component {
    constructor(props) {
        super(props);
        this.state = { //object of an ad
            userId: this.props.userId,
            city: this.props.city,
            cityArea: this.props.cityArea,
            checkIn: this.props.checkIn,
            checkOut: this.props.checkOut,
            propType: this.props.propType,
            maxPrice: this.props.maxPrice,
            personPriceCategory: "",
            personCityCategory: "",
            personCityAreaCategory: "",
            personDurationCategory: "",
        };
    };
   
    categoryNumbersIndex = ({ userSelection }, { arrCategory }) => {
        debugger;
        let rightIndex;
        for (let i = 1; i <= arrCategory.length; i++) {
            if ({ userSelection } <= arrCategory[i]) {
                rightIndex = i;
                break;
            }
            return rightIndex;
        }
    }

    categoryCountryIndex = ({ userSelection }, { arrCategory }) => {
        debugger;
        let rightIndex;
        for (let i = 0; i < arrCategory.length; i++) {
            if ({ userSelection } === arrCategory[i]) {
                rightIndex = i;
                break;
            }
            return rightIndex;
        }
    }

    render() {
        alert (" benny search analitics ");
        debugger;
        let duration = this.props.checkOut - this.props.checkIn;

        this.setState({
                 personDurationCategory: this.categoryNumbersIndex(duration, this.subletDurationCategory),
                 personPriceCategory: this.categoryNumbersIndex(this.props.maxPrice, this.maxPriceCategory), 
                 personCityCategory: this.categoryCountryIndex(this.props.city, this.commonCountryAreaCategory), 
                 personCityAreaCategory: this.categoryCountryIndex(this.cityArea, this.commonCityAreaCategory) 
        });

        return (
            <div>
                <p>benny</p>
                < SmartProfile {...this.state} />
            </div>
        );
    }
}

export default SearchAnalytics;


//     durationIndex = () => {
//         let d;
//         for (let i = 1; i <= subletDurationCategory.length; i++) {
//             if ({ durationprop } <= subletDurationCategory[i] ) {
//                 d = i;
//                 break;
//             }
//             return d;
//         }
//     }

//     maxPriceIndex = () => {
//         let p;
//         for (let i = 1; i <= maxPriceCategory.length; i++) {
//             if ({ maxpriceprop } <= maxPriceCategory[i]) {
//                 p = i;
//                 break;
//             }
//             return p;
//         }
//     }

//     countryAreaIndex = () => {
//     let area;
//     for (let i = 0; i < commonCountryAreaCategory.length; i++) {
//         if (commonCountryAreaCategory[i] == { cityprop }) {
//             area = i;
//             break;
//         }
//         return d;
//     }
// }

// cityAreaIndex = () => {
//     let areacity;
//     for (let i = 0; i < commonCityAreaCategory.length; i++) {
//         if (commonCityAreaCategory[i] == { areacityprop }) {
//             areacity= i;
//             break;
//         }
//         return d;
//     }
// }


// var array = [];

// let shoppingCart = [
//     {id: 35, item: 'jumper', color: 'red', size: 'medium', price: 20},
//     {id: 42, item: 'shirt', color: 'blue', size: 'medium', price: 15},
//     {id: 71, item: 'socks', color: 'black', size: 'all', price: 5},
//     ]

// export class Card {
//     constructor(rank, suit) {
//       this.rank = rank;
//       this.suit = suit;
//     }
//   }

//   for(let i = 0; i < props.items.length; i++) {
//     array.push(
//       <Item key={i} item={props.items[i]} />
//     );
//   }

// let  personDurationArray = [];
// let  personPriceArray = [];
// let  personCityArray = [];
// let  personCityAreaArray = [];
