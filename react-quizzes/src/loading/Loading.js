import React,{Component} from "react"
import "./loading.css"
class Loading extends Component{
	render () {
		return (
			<div className="loader">
		        <div className="loader-inner ball-spin-fade-loader">
		          <div></div>
		          <div></div>
		          <div></div>
		          <div></div>
		          <div></div>
		          <div></div>
		          <div></div>
		          <div></div>
		        </div>
		      </div>
			)
	}
}

export default Loading