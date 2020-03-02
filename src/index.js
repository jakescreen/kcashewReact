import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from "react-router-dom";
import Novels from './Components/Novels';
import Twitch from './Components/Twitch';

ReactDOM.render(
    <div className="main">
        <App />
        <BrowserRouter>
            <Route path="/novels" component={Novels}>
            </Route>

            <Route path="/twitch" component={Twitch}>
            </Route>
        </BrowserRouter>
    </div>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
