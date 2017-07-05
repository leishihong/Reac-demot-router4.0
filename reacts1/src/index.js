import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {BrowserRouter as Router,Route, Link} from "react-router-dom"
import RouterList from "./router/router"
const AppWrap = () => (
	<div className="wrap">
		<div className="head">我是头部</div>
		<Router className="main">
			<div className="main">
			  <ul>
			  	<li><Link to="/">Home</Link></li>
			  	<li><Link to="/Page1/1">Page1</Link></li>
			  	<li><Link to="/Page2/9">Page2</Link></li>
			  	<li><Link to="/Page3/page4">Page3</Link></li>
			  </ul>
			  <Route exact path="/" component={Home}></Route>
			  <Route path="/Page1/:user" component={Page1}></Route>
			  <Route path="/Page2/:id" component={Page2}></Route>
			  <Route path="/Page3" component={Page3}></Route>
			   <Route path="/Page3/Page4" component={Page4}></Route>
		  	</div>
		</Router>
		<div className="foot">我是底部</div>
	</div>
)


class Home extends Component{
	render(){
		return (<div>我是主页</div>)
	}
}
class Page1 extends Component{
	render(){
		console.log(this.props.match.params.user)
		return (<div>我是page1</div>)
	}
}
// class Page2 extends Component{
// 	render(){
// 		return (<div>我是Page2</div>)
// 	}
// }
const Page2 = ({match}) => {
	 	console.log(match.params)
		return (<div>我是Page2</div>)
}
class Page3 extends Component{
	render(){
		 
		return (<div>我是page3</div>)
	}
}
class Page4 extends Component{
	render(){
		 
		return (<div>我是page4</div>)
	}
}


ReactDOM.render(<RouterList />, document.getElementById('root'));
registerServiceWorker();
