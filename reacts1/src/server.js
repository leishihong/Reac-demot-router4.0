var content = reuqire("connect")
var app = content()
var fs = require("fs")
const PORT = 8081

app.use("/getData",function(req,res,next){
	var resData={
		code: 0
	}
})	

app.listen(PORT,function(){
	console.lgo("this is " + PORT)
})