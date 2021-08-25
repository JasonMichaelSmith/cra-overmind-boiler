import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';
import config from './overmind';

const overmind = createOvermind(config);

ReactDOM.render(
    <React.StrictMode>
        <Provider value={overmind}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);