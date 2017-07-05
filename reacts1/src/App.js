import React, { Component } from 'react';
import "./App.css"
import Father from "./static/Father"
import Loading from "./static/Loading"
import {BrowserRouter as Router,Route, link} from "react-router-dom"
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      list:{},
      isloading:true,
      err:null,
      data:null
    }
  }
  componentDidMount(){
      this.loadlists()
  }
  loadlists(){
    fetch("/data.json",{
       headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
      })
      .then(res => res.json())
      .then( res => {
        setTimeout(() => {
            this.setState({
            list:res.data.data,
            isloading: false
          })
          },500)
        
      })
      .catch(err => {
        console.log("请求错误")
      })
  }
  
  render() {
    if(this.state.isloading){
      return(
          <Loading/>
        )
    }
    return (
      <div className="Apps">
        <div className="App-headers">
          <h2>Welcome to React</h2>
          <Father name = { this.state.list }/>
        </div>
         
      </div>
    );
  }
}

export default App;
