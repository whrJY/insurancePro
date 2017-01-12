//import utils from '../../client/shared/utils'
import request from 'superagent'
var _data;
function getAppInfo(ctx){
 
	request.post('http://192.168.1.23:7001/admin/wap/wap_product!getProductColumnInfo.action?GNAME=byx_wap&GPARSSWORD=byx20161215010101&jsonRequest={USER: "byx",REQUESTTYPE: "ZLJRT1013",PARAMETERS: {}}')
	.set('Content-Type','application/json')
	.end(function(err, data){

		var res = data.res.text
		_data = eval('(' + res + ')')
		 console.log(_data)

  	//   if(_data.success){

  	//   	ctx.response.body = {
			// 	res_code:1,
			// 	res_data:_data.data,
			// 	res_msg:''
			// } 

  	//   }else{
  	//   	 ctx.response.body = {
			// 	res_code:0,
			// 	res_data:'',
			// 	res_msg:_data.error
			// }
  	//   }


  	});

 	ctx.response.body = {
 		res_code:0,
		res_data:'',
		res_msg:_data
	}
  
}

export default {getAppInfo}