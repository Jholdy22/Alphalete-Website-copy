import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store';




ReactDOM.render(
    <Provider store={store}>
    <HashRouter>
        <App />
    </HashRouter>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
