//Component1.jsx
import React from 'react';
// import "../../static/css/style.css"
class List extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			list:[1,2,3,4],
			activeIndex: -1
		}
	}
	activate(index){
		this.setState ({activeIndex:index})
	}
    render() {
        const {list,activeIndex} = this.state
        const lis = list.map((item,index)=>{
        	const cls = index === activeIndex ? "active" : ""
        	return (
        		<li 
        			key={index}
        			className={cls}
        			onClick={() => this.activate(index)}
        		>
        			{item}
        		</li>
        		)
        })
        return (
			<ul>{lis}</ul>
        )
    }
}
 
export default List;