import React, { Component } from "react";
import { belongingVector } from './Data.js';
import { subletDurationCategory, maxPriceCategory } from './SearchAnalytics.js';

class SmartProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { //object of an ad
            userId: this.props.userId,
            duration: "",
            durationBelonging: "",
            durationDeviationValue: "", // ערך הסטייה מעניין אותי אך ורק אם הוא חיובי כי אז אני יכול להגמיש תוצאולמעלה במחיר ובמשך
            price: "",
            priceBelonging: "",
            priceDeviationValue: "",
            absDeviation: "",
        };
    };

    // A function that receives the vector of the searcher's DURATION SUBLET and calculates relevant values
    CalculateDurationVector = ({ personDurationVector }) => {
        var sumOfTheVector = 0, meanResult, durationCategory, deviationValue = 0, absDeviation;

        for (let index = 0; index < personDurationVector.length; index++) {
            sumOfTheVector = sumOfTheVector + personDurationVector[index];
        }

        meanResult = sumOfTheVector / personDurationVector.length; // חישוב ממוצע לווקטור השיוך למשך חיפוש הסאבלט
        durationCategory = meanResult.toFixed(); // מעגל את התוצאה לשלם הקרוב ביותר
        absDeviation = Math.abs(meanResult - durationCategory); // הערך המוחלט של הסטייה 

        this.setState({ absDeviation: absDeviation });

        deviationValue = (meanResult - durationCategory) * subletDurationCategory[durationCategory]; // in order to know the number (money, duration...) of the deviation

        this.setState({ durationDeviationValue: deviationValue });

        return durationCategory;
    }

    // A function that receives the vector of the searcher's MAX PRICE SUBLET and calculates relevant values
    CalculateMaxPriceVector = ({ personPriceArray }) => {

        var sumOfTheVector = 0, meanResult, priceCategory, deviationValue = 0, absDeviation;

        for (let index = 0; index < personPriceArray.length; index++) {
            sumOfTheVector = sumOfTheVector + personPriceArray[index];
        }

        meanResult = sumOfTheVector / personPriceArray.length;
        priceCategory = meanResult.toFixed();
        absDeviation = Math.abs(meanResult - priceCategory);

        this.setState({ absDeviation: this.absDeviation });

        deviationValue = (meanResult - priceCategory) * maxPriceCategory[priceCategory]; // in order to know the number (money, duration...) of the deviation

        this.setState({ priceDeviationValue: this.deviationValue });

        return priceCategory;
    }

    Belonging = () => {
        let belonging;
        for (let i = 1; i <= belongingVector.length; i++) {
            if (this.state.absDeviation >= belongingVector[i].range[0] && this.state.absDeviation <= belongingVector[i].range[1]) {
                belonging = belongingVector[i].Percent;
                break;
            }
            return belonging;
        }
    }

    render() {

        this.setState({ duration: this.CalculateDurationVector( this.props.personDurationVector ) });
        this.setState({ durationBelonging: this.Belonging() });

        this.setState({ price: this.CalculateMaxPriceVector( this.props.personPriceArray ) });
        this.setState({ priceBelonging: this.Belonging() });


        return (
            <div>
                <p>benny</p>
                 < SmartCity {...this.props} />
                 < SmartCityArea {...this.props} />
            </div>
        );
    }
}

// A function that receives the vector of the searcher's MOST POPULAR CITY SUBLET and calculates relevant values
class SmartCity extends Component {
    constructor(props) {
        super(props);
        this.state = { //object of an ad
            userId: this.props.userId,
            WithoutPreferencePercent: "",
            HaifaPercent: "",
            JerusalemPercent: "",
            TlvPercent: "",
            EilatPercent: "",
        };
    };

    render() {

        var city = [];
        city["0"] = 0;
        city["4"] = 0;
        city["2"] = 0;
        city["3"] = 0;
        city["7"] = 0;

        var Percent00, Percent04, Percent02,Percent03,Percent07;

        for (let index = 0; index < this.props.personCityArray.length; index++) {
            this.city[this.props.personCityArray[index]]++;
        }

        Percent00 = city["0"] / this.props.personCityArray.length;
        Percent04 = city["4"] / this.props.personCityArray.length;
        Percent02 = city["2"] / this.props.personCityArray.length;
        Percent03 = city["3"] / this.props.personCityArray.length;
        Percent07 = city["7"] / this.props.personCityArray.length;
         
        this.setState({
            WithoutPreferencePercent: Percent00,
            HaifaPercent: Percent04 ,
            JerusalemPercent: Percent02,
            TlvPercent: Percent03,
            EilatPercent: Percent07,
        });
      
        return (
            <div>
                <p>benny</p>
                {/* < SmartProfile {...this.state} /> */}
            </div>
        );
    }
}

// A function that receives the vector of the searcher's MOST POPULAR CITYAREA SUBLET and calculates relevant values
class SmartCityArea extends Component {
    constructor(props) {
        super(props);
        this.state = { //object of an ad
            userId: this.props.userId,
            WithoutPreferencePresent: "",
            NorthPercent: "",
            CenterPercent: "",
            SouthPercent: "",
        };
    };

    render() {

        var cityArea = [];
        cityArea["Without-Preference"] = 0;
        cityArea["North"] = 0;
        cityArea["Center"] = 0;
        cityArea["South"] = 0;
     
        var calPercentAll, calPercentNorth, calPercentCenter, calPercentSouth;

        for (let index = 0; index < this.props.personCityAreaArray.length; index++) {
            this.cityArea[this.props.personCityAreaArray[index]]++;
        }

        calPercentAll = cityArea["Without-Preference"] / this.props.personCityAreaArray.length;
        calPercentNorth = cityArea["North"] / this.props.personCityAreaArray.length;
        calPercentCenter = cityArea["Center"] / this.props.personCityAreaArray.length;
        calPercentSouth = cityArea["South"] / this.props.personCityAreaArray.length;
         
        this.setState({
            WithoutPreferencePresent: calPercentAll,
            NorthPercent: calPercentNorth ,
            CenterPercent: calPercentCenter,
            SouthPercent: calPercentSouth,
        });
      
        return (
            <div>
                <p>benny</p>
                {/* < SmartProfile {...this.state} /> */}
            </div>
        );
    }
}

export default SmartProfile;


// [ {duration category, belonging}, {max price category, belonging}, { all vector city }, { all vector city area } ]
// 30% 30% 30% 10%




// Depending on the deviation from the selected category, we'll know the percentage of belonging to that category
// const belongingVector = [
//     {
//         range: [0, 0.1], // range of deviation
//         Percent: 0.9, // Percent of belonging
//         name: "clearly Belonging "  // It means
//     },
//     {
//         range: [0.11, 0.2],
//         Percent: 0.8,
//         name: "strong Belonging"
//     },
//     {
//         range: [0.21, 0.25],
//         Percent: 0.7,
//         name: "Likely Belonging"
//     },
//     {
//         range: [0.26, 0.3],
//         Percent: 0.6,
//         name: "medium Belonging"
//     },
//     {
//         range: [0.31, 0.49],
//         Percent: 0.4,
//         name: "weak Belonging"
//     },
// ]

// const vectorProfile = [
    //     {
    //         duration: 0,
    //         belonging: 0,
    //         deviationValue: 0,
    //     },
    //     {
    //         price: 0,
    //         belonging: 0,
    //         deviationValue: 0,
    //     },
    //     {
    //         all: 0,
    //         haifa: 0,
    //         tlv: 0,
    //         jerusalem: 0,
    //         eilat: 0,
    //     },
    //     {
    //         cityArea: 0,
    //         belonging: 0,
    //     },
    // ];

    // function CalculateMaxPriceVector({ personPriceArray }) {

//     var sum = 0, result, category, deviationValue = 0, absDeviation;

//     for (let index = 0; index < personPriceArray.length; index++) {
//         sum = sum + personPriceArray[index];
//     }

//     result = sum / personPriceArray.length;
//     category = result.toFixed();
//     absDeviation = Math.abs(result - category);

//     this.Belonging = ({ absDeviation }) => {
//         let belonging;
//         for (let i = 1; i <= belongingVector.length; i++) {
//             if ({ absDeviation } >= belongingVector[i].range[0] && { absDeviation } <= belongingVector[i].range[1]) {
//                 belonging = belongingVector[i].Percent;
//                 break;
//             }
//             return belonging;
//         }
//     }

//     if ((result - category) > 0) {
//         deviationValue = (result - category) * subletDurationCategory[category]; // in order to know the number (money, duration...) of the deviation
//     }

//     vectorProfile[1].price = category;
//     vectorProfile[1].belonging = this.Belonging(this.absDeviation);
//     vectorProfile[1].deviationValue = deviationValue;
// }

  // PriceBelonging = () => {
    //     let belonging;
    //     for (let i = 1; i <= belongingVector.length; i++) {
    //         if ( this.state.absDeviation  >= belongingVector[i].range[0] && this.state.absDeviation <= belongingVector[i].range[1]) {
    //             belonging = belongingVector[i].Percent;
    //             break;
    //         }
    //         return belonging;
    //     }
    // }



    // DurationBelonging = () => {
    //     let belonging;
    //     for (let i = 1; i <= belongingVector.length; i++) {
    //         if (this.state.absDeviation >= belongingVector[i].range[0] && this.state.absDeviation <= belongingVector[i].range[1]) {
    //             belonging = belongingVector[i].Percent;
    //             break;
    //         }
    //         return belonging;
    //     }
    // }

  // A function that receives the vector of the searcher's MOST POPULAR CITY SUBLET and calculates relevant values
// function CalculateCityVector({ personCityArray }) {
//     var Percent00, Percent04, Percent02, Percent03, Percent07;

//     for (let index = 0; index < personCityArray.length; index++) {
//         city[personCityArray[index]]++;
//     }

//     this.Percent00 = city["00"] / personCityArray.length;
//     this.Percent04 = city["04"] / personCityArray.length;
//     this.Percent02 = city["02"] / personCityArray.length;
//     this.Percent03 = city["03"] / personCityArray.length;
//     this.Percent07 = city["07"] / personCityArray.length;

//     cityArray[1].Percent = Percent00;
//     cityArray[2].Percent = Percent04;
//     cityArray[3].Percent = Percent02;
//     cityArray[4].Percent = Percent03;
//     cityArray[5].Percent = Percent07;

//     // if the Percent of the city is over than 0.65, she will show to the user (searcher) 
// }

// var city = [];
// city["0"] = 0;
// city["4"] = 0;
// city["2"] = 0;
// city["3"] = 0;
// city["7"] = 0;

// const cityArray = [
//     {
//         name: "Without-preference",
//         kod: "0",
//         count: 0,
//         Percent: 0,
//     },
//     {
//         name: "Haifa",
//         kod: "4",
//         count: 0,
//         Percent: 0
//     },
//     {
//         name: "Jerusalem",
//         kod: "2",
//         count: 0,
//         Percent: 0
//     },
//     {
//         name: "TLV",
//         kod: "3",
//         count: 0,
//         Percent: 0
//     },
//     {
//         name: "Eilat",
//         kod: "7",
//         count: 0,
//         Percent: 0
//     },
// ]