import React from"react"
const Father = React.createClass({

  getInitialState:function() {
{/*初始话属性*/}
    return {currentIndex: 0,more:"更多",hide:"隐藏",show: false,isShow:"none"}
  },
  getTitleItemCssClasses: function(index){
{/*添加类改变样式*/}
    return index === this.state.currentIndex ? "tab-title-item active" : "tab-title-item";
  },

  navClick: function(e){
{/*点击每一个li，判断当前点击的是否与currentIndex相同，改变样式*/}
    this.setState({currentIndex:e})
    let that = this
    that.setState({isShow: "none"})
    if(e === 7 || e === 8 || e === 9){
  		that.setState({isShow: "none"})
    }
  },
  getMore: function(){
{/*点击隐藏让对赢得内容消失*/}
  	let that = this
  	that.setState({isShow: "block"})
  },
  getHide: function(){
{/*点击隐藏让对赢得内容消失*/}
  	let that = this
  	that.setState({isShow: "none"})
  },

  getList: function(){
{/*单独的把渲染的数据追加到一个空数组里面，返回去调用*/}
  	let that = this
    const {name} = this.props
    let result = []
    Object.values(name).map((item,index) => 
		result.push(
			index <= 7 &&
			<li
               key = { index } 
               className={that.getTitleItemCssClasses(index)} 
               onClick={ () => {this.navClick(index)} }
              >
               { item.name }
            </li>
			)
	)
	return result
  },
  render(){
  	let that = this
    const {name} = this.props
     return (
     		 <ul className = "lis">
     		 {/*渲染list*/}
     		 	{
     		 		Object.values(name).map((item,index) => 
						index <= 6 &&
							<li
				               key = { index } 
				               className={that.getTitleItemCssClasses(index)} 
				               onClick={ () => { this.navClick(index) } }
				              >
				               { item.name }
				            </li>
						)
     		 	}
     		 {/*添加一个更多选项*/}
				<li 
					className={that.getTitleItemCssClasses(7)} 
					onClick={ () => { this.getMore() } }
					>
					{ this.state.more }
				</li>
			{/*渲染list*/}
				{
     		 		Object.values(name).map((item,index) => 
						index > 6 &&
							<li
				               key = { index } 
				               className={that.getTitleItemCssClasses(index)} 
				               onClick={ () => {this.navClick(index)} }
				               style={{display:this.state.isShow}}
				              >
				               { item.name }
				            </li>
					)
     		 	}
     		 {/*添加一个隐藏选项*/}
     		 	<li 
	     		 	style={{display:this.state.isShow}} 
	     		 	className={that.getTitleItemCssClasses(11)} 
	     		 	onClick={ () => { this.getHide() } } 
	     		 	>
					{ this.state.hide }
	     		</li>
            </ul>
            )

    }
})
export default Father