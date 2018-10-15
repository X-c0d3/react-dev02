import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

import appStore from './app-store';

ReactDOM.render(<Provider store={appStore}><App /></Provider>, document.getElementById('root')
);
