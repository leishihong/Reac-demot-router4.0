import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router,Route, Link} from "react-router-dom"
import AppWrap from "./Index/index.js"
import './css/reset.css'
import './css/common.css'
import './index.css';

ReactDOM.render(<AppWrap />, document.getElementById('root'));
registerServiceWorker();
