import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './app'
import {appStore} from './app';
// Styles
import 'sanitize.css/sanitize.css';
import './assets/styles/styles.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();



ReactDOM.render(<App appStore={ appStore } />, document.querySelector('main'));





