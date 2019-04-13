import React from "react";
import { Route } from 'react-router-dom';
// import React, { Component } from 'react';
import { TypesOfApartments, CountryAreaCategory, CityAreaCategory } from './Data.js';
import Filter from "./Filter";
import SearchAnalytics from "./SearchAnalytics";
// import RouteButton from "./RouteButton";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const RouteButton = (props) => {
    return (

        <Route render={({ history }) => (
            <button onClick={() => {
                history.push({
                    pathname: props.pathname,
                    data: props.data
                });
            }}>
                {props.value}
            </button>
        )}
        />
    )
}

export default RouteButton; 