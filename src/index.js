import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';
import './assets/style/reset.css';
import './assets/style/less/base.less';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
