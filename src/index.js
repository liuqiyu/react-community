import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './container/App';
import store from './store/store';
import registerServiceWorker from './registerServiceWorker';
import './assets/style/reset.css';
import './assets/style/less/base.less';
console.log(store);

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <Component />
        </Provider>,
        document.getElementById('root')
    );
};

render(App);

registerServiceWorker();
