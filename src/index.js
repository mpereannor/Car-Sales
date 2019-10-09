import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App, {store} from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const rootElement = document.getElementById('root');
ReactDOM.render(
    //Inject Redux Store in the App using a //a provider ( 6 winterfell)
    <>
        <Provider store={store}>
            <App />
        </Provider>
    </>, rootElement);
