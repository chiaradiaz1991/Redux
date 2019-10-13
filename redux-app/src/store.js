import { createStore, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';

const initialState = {
    counter: 0,
    counterReset: 0
};

//ACTIONS
export const addCounter = () => dispatch => {
    return dispatch({
        type: 'ADD_COUNTER'
    })
}

export const counterReset = () => dispatch => {
    return dispatch({
        type: 'RESET'
    })
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_COUNTER":
            return Object.assign({}, state, {
                counter: state.counter + 1
            })
        case "RESET":
            return Object.assign({}, state, {
                counterReset: state.counter = 0
            })
        default:
            return state;
    }
};

export function initializeStore() { //el nombre de la funcion puede ser cualquiera. 
    return createStore(reducer, initialState, applyMiddleware(thunkMiddleWare));
}