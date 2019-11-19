import React from 'react';
import { render } from 'react-dom'; //1er cambio 
import './index.css';
import { initializeStore } from './store'; //2do cambio - agrego la funcion para inicializar el store
import { Provider } from 'react-redux'; // 3er cambio - pasar el store a absolutamente toda nuestra app
import App from './App';

let store = initializeStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root')
)