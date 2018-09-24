import 'bootstrap/dist/css/bootstrap.min.css';
import * as $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faClipboardList, faCodeBranch, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function escapeLinter(arr) {
  // return nothing
  return;
};

// Prevents linter warnings about unused packages
escapeLinter($, Popper, FontAwesomeIcon);


library.add(faHandshake, faClipboardList, faCodeBranch, faEnvelope);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
