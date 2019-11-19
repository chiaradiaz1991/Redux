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

  
  export const completeTask = index => dispatch => {
    return dispatch({
      type: "COMPLETE_TASK",
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
                tasks: [...state.tasks, {value: action.value, isComplete: false}]
            })
        case "COMPLETE_TASK":
            const updatedTasks = state.tasks.map((item, key)=>{
                if (key == action.value) {
                    item.isComplete= true
                }
                return item
            })
            console.log(4, updatedTasks)
            return Object.assign({}, state, {
                tasks: updatedTasks
            })
        default:
            return state;
    }
};

export function initializeStore() { //el nombre de la funcion puede ser cualquiera. 
    return createStore(reducer, initialState, applyMiddleware(thunkMiddleWare));
}