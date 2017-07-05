//main.js
import React from 'react';
import ReactDom from 'react-dom';
//import Component1 from './components/Component1.js';
// import Component2 from "./components/Component2.js";
import List from "./components/List.js"
//创建一个div元素追加到body里面
var app =document.createElement("div")
document.body.appendChild(app)

ReactDom.render(
    //<Component1 msg="leishihong"/>,
    // <Component2/>,
    <List/>,
    app
);