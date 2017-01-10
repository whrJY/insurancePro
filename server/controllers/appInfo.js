function getAppInfo(req,ctx){
 
	ctx.response.body = {
		res_code:0,
		res_data:{
			columCode:'A',
			columname:'健康保险',
			products:[
				{
					riskName:'安心住院医疗综合保障',
					riskCode:'16767676',
					initPrem:'3452',
					productProfiles:'住院医疗保障',
					name:req
				}
			]
		},
		res_message:'error'
	}
	 
}

export default {getAppInfo}