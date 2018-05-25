// APP入口将store注入到provider

import React,{Compent} from 'react';
import { Provider } from 'react-redux';
import App from './compents/App';
import store from './store/store';

export default class Root extends Compent{

    render(){
        return(
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}