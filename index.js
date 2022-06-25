/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import { name as appName } from './app.json';
import configureStore from './src/redux/store';

// Shows requests in browser, network tab
const GLOBAL = window;
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;

const Application = () => (
    <Provider store={configureStore}>
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => Application);
