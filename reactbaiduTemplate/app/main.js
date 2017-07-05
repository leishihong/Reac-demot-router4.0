//main.js
import React from 'react';
import ReactDom from 'react-dom';
import List from './components/List.js';
//创建一个div元素追加到body里面
var app =document.createElement("div")
document.body.appendChild(app)

ReactDom.render(
    <List/>,
    app
);