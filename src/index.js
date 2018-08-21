import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './container/App';
import store from './store/store';
import registerServiceWorker from './registerServiceWorker';
import './assets/style/reset.css';
import './assets/style/less/base.less';

// 使用Provider类将React应用程序包装在Redux容器中
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

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
