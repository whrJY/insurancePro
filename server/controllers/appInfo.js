import request from 'superagent'

var _data = 1;

function getAppInfo(ctx,fn){
 
	request.post('http://192.168.1.23:7001/admin/wap/wap_product!getProductColumnInfo.action?GNAME=byx_wap&GPARSSWORD=byx20161215010101&jsonRequest={USER: "byx",REQUESTTYPE: "ZLJRT1013",PARAMETERS: {}}')
	.set('Content-Type','application/json')
	.end(function(err, data){

		var res = data.res.text
		_data = eval('(' + res + ')')
		fn(_data)

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

  //   ctx.response.body = {
		// 	res_code:1,
		// 	res_data:{
		// 		columCode:'A',
		// 		columname:'健康保险',
		// 		products:[
		// 			{
		// 				riskName:'安心住院医疗综合保障',
		// 				riskCode:'16767676',
		// 				initPrem:'3452',
		// 				productProfiles:'住院医疗保障',
		// 				name:ctx.request.body.name
		// 			}
		// 		]
		// 	},
		// 	res_msg:'error'
		// }
  	
	 
}

export default {getAppInfo}