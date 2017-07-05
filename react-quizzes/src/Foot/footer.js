import React,{Component} from "react"
import ReactDOM from "react-dom"

const Footer = () => {
	return (
		<div className="Footer">
			<p className="left"><img src={require("../images/monery_31.png")}/></p>
			<div className="monery"><span>我的鱼丸</span> : <b>100000</b></div>
			<p className="right"><img src={require("../images/song_31.png")}/></p>
		</div>
	)
}


export default Footer