import { createStore, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';

const initialState = {
    counter: 0,
    counterReset: 0,
    tasks: []
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

export const addTask = task => dispatch => {
    return dispatch({
      type: "ADD_TASK",
      value: task
    });
  };

  
  export const removeTask = index => dispatch => {
    return dispatch({
      type: "REMOVE_TASK",
      value: index
    });
  };  

//reducer
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
        case "ADD_TASK":
            return Object.assign({}, state, {
                tasks: [...state.tasks, action.value]
            })
        case "REMOVE_TASK":
            const newTasks = state.tasks.filter(
                (item, index) => index !== action.value
            );
            return Object.assign({}, state, {
                tasks: newTasks
            });
        default:
            return state;
    }
};

export function initializeStore() { //el nombre de la funcion puede ser cualquiera. 
    return createStore(reducer, initialState, applyMiddleware(thunkMiddleWare));
}