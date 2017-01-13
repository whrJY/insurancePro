 
let co = require("co");  
let request = require("co-request");  



//import request from 'superagent'
var _data;
async function getAppInfo(ctx,next){
 
	co(function* () {  
	  // You can also pass options object, see http://github.com/mikeal/request docs   
	    let result = yield request('http://192.168.1.23:7001/admin/wap/wap_product!getProductColumnInfo.action?GNAME=byx_wap&GPARSSWORD=byx20161215010101&jsonRequest={USER: "byx",REQUESTTYPE: "ZLJRT1013",PARAMETERS: {}}');   
	    let response = result;  
	    _data =  result.body;  
	   
  		ctx.body = _data
	    
	}).catch(function (err) {  
	    console.err(err);  
	});  

 await next(); 
 
// 请求参数 ctx.request.body
// request.post('http://192.168.1.23:7001/admin/wap/wap_product!getProductColumnInfo.action?GNAME=byx_wap&GPARSSWORD=byx20161215010101&jsonRequest={USER: "byx",REQUESTTYPE: "ZLJRT1013",PARAMETERS: {}}')
// 	.set('Content-Type','application/json')
// 	.end(function(err, data){

// 		var res = data.res.text
// 		_data = eval('(' + res + ')')
 

//   	});
//   ctx.body = {
//  		res_code:0,
// 		res_data:'',
// 		res_msg:_data
// 	}
 
  
}
function getInfo(ctx){
	console.log(ctx.body); 
	ctx.body= {data:_data}
} 
 
export default {getAppInfo,getInfo} 




