 
let co = require("co");  
let request = require("co-request");  
 
var _data;
async function getAppInfo(ctx,next){
// 请求参数 ctx.request.body
	 
  await co(function* () {  
        let result = yield request('https://www.biyouxin.com/user/getUserChannel.html');   
        let res = result.body;  
        _data = eval('(' + res + ')')
      
    }).catch(function (err) {  
        console.err(err);  
    }); 
  
    await next()
     
 

//  'http://192.168.1.23:7001/admin/wap/wap_product!getProductColumnInfo.action?GNAME=byx_wap&GPARSSWORD=byx20161215010101&jsonRequest={USER: "byx",REQUESTTYPE: "ZLJRT1013",PARAMETERS: {}}' 
 
  
}
function getInfo(ctx){ 
 
	ctx.body=  _data
} 
 
export default {getAppInfo,getInfo} 




