import React from"react"
const components2 = React.createClass({
	getInitialState(){
		return {
			name:"zahngsan"
		}
	},
	getDefaultProps(){
		return{
			age:"12"
		}
	},
	render(){
		return (
			<div className="hello">
				<h3>我是组件createState  {this.props.name} {this.state.age}</h3>
			</div>
		)
	}
})
export default components2