import React,{Component} from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router,Route,Link} from "react-router-dom"

const List = React.createClass({
	getInitialState: function(){
		return{
			list:[]
		}
	},
  render () {
    const { name } = this.props
    let that = this
    return (
        <div>
            {
              name.map( (item,index) => 
                <div key={ index } className="datas">
                  <h3><span></span>{ item.title}</h3>
                  <div className="list">
                    <div className="_left">
                      <span>{ item.days }</span>
                      <b>{ item.time}</b>
                    </div>
                    <div className="_right"> {
                     name[index].recomend.map( (item,index) => 
                        <dl key={ index }>
                          <dt><img src={ "item.url" }/></dt>
                          <dd>{ item.info}</dd>
                        </dl>
                        )
                    }
                    
                    </div>
                    <span className="jing">竞猜</span>
                  </div>
                </div>
                )
              
            }
        </div>
      )
  }
})

export default List