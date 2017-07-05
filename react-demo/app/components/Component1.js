//Component1.jsx
import React from 'react';
/*方法一使用class类的方法改变的this指向问题，存储的变量特不同*/
class Component1 extends React.Component {
	constructor(props){
		super(props)
		this.state={
			name:"zhangsan"
		}
	}
    render() {
        return (
            <div>Hello World! {this.props.msg} {this.state.name}</div>
        )
    }
}

//导出组件
export default Component1;




/*方法二在生命周期里面只会执行一次*/
/*const hello=React.createClass({
	getInitialState(){
		return {
			name:"zhangsan"
		}
	},
	getDefaultProps(){
		return{
			age:"12"
		}
	},
	getString(){
		return "my react msg"
	},
	getId(id){
		alert(id)
	},
	render(){
		return (
			<div className="hello">
				<h3>hello react 组件  {this.props.age} {this.state.name} {this.getString()}</h3>
				<button onClick={()=>this.getId(1111)}>点击触发</button>
			</div>
		)
	}
})
export default hello;*/