import React, { Component } from 'react';
import { TypesOfApartments, CountryAreaCategory, CityAreaCategory } from './Data.js';
import Filter from "./Filter";
import SearchAnalytics from "./SearchAnalytics";
import RouteButton from "./RouteButton";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class SearchPage extends Component {

    clear() {
        this.setState({
            city: "3",
            cityArea: "North",
            dateCheckIn: "2019-03-20",
            flexibleCheckIn: "1",
            dateCheckOut: "2019-03-25",
            flexibleCheckOut: "1",
            minPrice: "0",
            maxPrice: "480",
            flexiblePrice: "1",
            propType: "Studio",
        });
    }

    handleSubmit() {
        alert("benny handleSubmit !");
        debugger;
        return (
            <div>

                <RouteButton value="Filter" pathname="/Filter" data={this.state} />
                <RouteButton value="DetailsSearchAnalytics" pathname="/SearchAnalytics" data={this.state} />

           < Filter {...this.props} />
           < SearchAnalytics {...this.props} />    

            </div>);
        //    <div>
        //      <Route path="/Filter" component={Filter} />
        //      <Route path="/SearchAnalytics" component={SearchAnalytics} />
        //    </div>
    }

    state = {
        city: "",
        cityArea: "",
        dateCheckIn: "",
        flexibleCheckIn: "0",
        dateCheckOut: "",
        flexibleCheckOut: "0",
        minPrice: "",
        maxPrice: "",
        flexiblePrice: "0",
        propType: "",
    };

    change = e => {
     //  debugger;
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {

        const NamesCities = CountryAreaCategory.map((City, i) => { return (<option name="city" key={i} value={City.kod} > {City.name} </option>) })

        const NamesList = TypesOfApartments.map((Type, i) => { return (<option name="propType" key={i} value={Type.TypeName} > {Type.TypeName} </option>) })

        const NameCityArea = CityAreaCategory.map((Area, i) => { return (<option name="cityArea" key={i} value={Area.kod} > {Area.name} </option>) })

        return (
            <div>
                <h1> welcome SEARCHER ! in order to find a sublet add, please enter to following details </h1>
                <form onSubmit={this.handleSubmit}  >
                    <h3>City</h3>
                    <select name="city" onChange={e => this.change(e)} >
                        {NamesCities}
                    </select>

                    <h3>Preferred area in the city</h3>
                    <select name="cityArea" onChange={e => this.change(e)} >
                        {NameCityArea}
                    </select>

                    <h3>Avalible at</h3>
                    CheckIn: <input type="date" name="dateCheckIn"
                        onChange={e => this.change(e)} /> <br />
                    Flexible?: <br />
                    Yes <input type="radio" name="flexibleCheckIn" value="1"
                        onChange={e => this.change(e)} />  <br />
                    No  <input type="radio" name="flexibleCheckIn" value="0" />  <br />
                    <br />
                    CheckOut: <input type="date" name="dateCheckOut"
                        onChange={e => this.change(e)} /> <br />
                    Flexible?: <br />
                    Yes <input type="radio" name="flexibleCheckOut" value="1"
                        onChange={e => this.change(e)} />  <br />
                    No  <input type="radio" name="flexibleCheckOut" value="0" />  <br />

                    <h3>Property Type</h3>
                    <select name="propType" onChange={e => this.change(e)} >
                        <option>choose</option>
                        {NamesList}
                    </select >

                    <h3>Sublet price per night</h3>

                    Min Price: <input type="text" name="minPrice"
                        onChange={e => this.change(e)} /> <br />
                    Max Price: <input type="text" name="maxPrice"
                        onChange={e => this.change(e)} /> <br />
                    Flexible?: <br />
                    Yes <input type="radio" name="flexiblePrice" value="1"
                        onChange={e => this.change(e)} />  <br />
                    No  <input type="radio" name="flexiblePrice" value="0" />  <br />

                    {/* 
                    <input type="button" value="Click me" onclick= { < Filter {...this.props} /> }/>
                    <input type="button" value="Click me" onclick= { < SearchAnalytics {...this.props} /> }/> */}
               
             
           < Filter {...this.props} />
           < SearchAnalytics {...this.props} />    

                    <input type="submit" value="SEARCH" />  <br />

                    <br />
                    <br />
                </form>
            </div>
        );
    }
}

export default SearchPage;

        // this.setState({
        //     durationSublet : new durationSublet('0', '0', '0', '0','0'),
        //     subletPrice : new subletPrice('0', '0', '0', '0'),
        //     subletPlace : new subletPlace('0','0'),
        //     propType: "0",
        //     city: "abba",
        // });


        // class durationSublet {
//     constructor(checkIn, checkOut, flexIn, flexOut) {
//         this.checkIn = checkIn;
//         this.checkOut = checkOut;
//         this.flexIn = flexIn;
//         this.flexOut = flexOut;
//     }
//     show = () => {
//         return `checkIN= ${this.checkIn}...`;
//     }
// }

// class subletPrice {
//     constructor(minPrice, maxPrice, flexPrice) {
//         this.minPrice = minPrice;
//         this.maxPrice = maxPrice;
//         this.flexPrice = flexPrice;
//     }
// }

// class subletPlace {
//     constructor(city, cityArea) {
//         this.city = city;
//         this.cityArea = cityArea;
//     }
// }

    // constructor(props) {
    //     super(props);
    //     this.state = { //object of an ad
    //         durationSublet: new durationSublet('0', '0', '0', '0','0'),
    //         subletPrice : new subletPrice('0', '0', '0', '0'),
    //         subletPlace : new subletPlace('0','0'),
    //         propType: "0",
    //         city: "",
    //     };
    //   };

