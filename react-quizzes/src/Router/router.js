import React,{Component} from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import List from "../List/list.js"
import Loading from "../loading/Loading.js"
import NavTab from "../navTab/navTab"
class Home extends Component  {
	constructor(props){
		super(props)
		this.state={
		  list:[],
		  isloading:true
		}
	}
	componentDidMount(){
	  this.loadlists()
	}
	loadlists(){
		fetch("/mock/mock.json")
		.then(res => res.json())
		.then(res => {
			setTimeout( () => {
			this.setState({
				list : res.data,
				isloading: false,
			})
			},2000)
		})
		.catch(err => {
		  console.log("请求报错")
		})
	}
	handleClick(e) {
		console.log(e.target)
	}
	render () {
		if(this.state.isloading){
			return (
				<Loading/>
				)
		}
		return (
			<div>
				<div className="list1">
					<div className="info">
						<p><b>推荐赛事</b></p>
						<span>></span>
					</div>
				</div>
				<List name={ this.state.list }/>
			</div>
		)
	}
}
const List1 = () => {
	return (<div className="list1 info">私人空间给客人就赶快</div>)
}
const List2 = () => {
	return (<div className="list1 info">私人空间给客人就赶快</div>)
}
const List3 = () => {
	return (<div className="list1 info">私人空间给客人就赶快</div>)
}
const List4 = () => {
	return (<div className="list1 info"> 私人空间给客人就赶快</div>)
}

const RouterList = () => (
	<Router className="main">
		<div className="main">
			<NavTab/>
		
			
			<Route exact path="/" component={Home}></Route>
			<Route path="/list1" component={List1}></Route>
			<Route path="/list2" component={List2}></Route>
			<Route path="/list3" component={List3}></Route>
			<Route path="/list4" component={List4}></Route>
		</div>
	</Router>
)

export default RouterList