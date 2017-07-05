import React from "react"
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
const NavTab = () => {
	return (<nav className="navTab">
		<Link to="/">
			<dl>
				<dt><img src={require("../images/list_03.png")} /></dt>
				<dd>今日</dd>
			</dl>
		</Link>
		<Link to="/list1">
			<dl>
				<dt><img src={require("../images/list_05.png")} /></dt>
				<dd>足球</dd>
			</dl>
		</Link>
		<Link to="/list2">
			<dl>
				<dt><img src={require("../images/list_07.png")} /></dt>
				<dd>篮球</dd>
			</dl>
		</Link>
		<Link to="/list3">
			<dl>
				<dt><img src={require("../images/list_09.png")}/></dt>
				<dd>奥运会</dd>
			</dl>
		</Link>
		<Link to="/list4">
			<dl>
				<dt><img src={require("../images/list_11.png")}/></dt>
				<dd>LOL</dd>
			</dl>
		</Link>
	</nav>
	)
}

export default NavTab