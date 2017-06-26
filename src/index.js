import React from 'react';
import 'babel-polyfill';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore({ rabbitReducer: {x: 400, y: 200}});

render (
    <Provider store={store}>
            <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
 
