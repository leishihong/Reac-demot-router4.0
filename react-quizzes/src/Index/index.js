import React from "react"
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import Header from "../Head/header.js"
import Footer from "../Foot/footer.js"
import NavTab from "../navTab/navTab.js"
import RouterList from "../Router/router"
import "./index.css"
import '../Head/header.css'
import '../Foot/footer.css'

const AppWrap =  () => (
	<div className="wrap">
	 	<Header/>
		<RouterList/>
		<Footer/>
	</div>
)

export default AppWrap