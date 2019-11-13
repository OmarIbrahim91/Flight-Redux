import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";

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
    fn: "",
    des: "",
    dep: "",
    date: ""
};

//create reducer
function reducer(state = fl, action) {
    switch (action.type) {
    case "REGISTER_FLIGHT":
        return (state = {
        flight: {
            fn: action.flightInfo.fn,
            des: action.flightInfo.des,
            dep: action.flightInfo.dep,
            date: action.flightInfo.date
        }
        });

    default:
        return state;
    }
}

//create store
const store = createStore(reducer);

//method for sending to component for dispatching action register_flight
const dispatchRegisterFlight = flit => {
    store.dispatch(registerFlight(flit));
    console.log(store.getState());
};

const Root = document.getElementById("root");
const render = () => {
    ReactDOM.render(
    <App dispatchRegisterFlight={dispatchRegisterFlight} />,
    Root
    );
};

render();
//subscribe render method with store container
store.subscribe(render);
