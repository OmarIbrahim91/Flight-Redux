import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore} from "redux";
import { applyMiddleware} from "redux";

import {createLogger} from 'redux-logger';

const logger = createLogger();

const Actions = {
    register: "REGISTER_FLIGHT"
    
};

//create Action
function registerFlight(flight) {
    return {
    type: Actions.register,
    flightInfo: {
        /* fn: flight.fn,
        des: flight.des,
        dep: flight.dep,
        date: flight.date */
        ...flight
    }
    };
}

const fl = {
    flight:[]
};

//create reducer
function reducer(state = fl, action) {
    switch (action.type) {
    case "REGISTER_FLIGHT":
        return (state = {
        flight: [...state.flight,{
            fn: action.flightInfo.fn,
            des: action.flightInfo.des,
            dep: action.flightInfo.dep,
            date: action.flightInfo.date
        }]
        });

    default:
        return state;
    }
}

//create store
const store = createStore(reducer,applyMiddleware(logger));

//method for sending to component for dispatching action register_flight
const dispatchRegisterFlight = flit => {
    store.dispatch(registerFlight(flit));
    console.log(store.getState());
};

const Root = document.getElementById("root");
const render = () => {
    var flights = store.getState().flight
    ReactDOM.render(
    <App dispatchRegisterFlight={dispatchRegisterFlight} flights={flights}/>,
    Root
    );
};

render();
//subscribe render method with store container
store.subscribe(render);
