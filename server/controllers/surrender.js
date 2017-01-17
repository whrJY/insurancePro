 
let co = require("co");  
let request = require("co-request");   
 import actionUrl from '../../client/shared/actionUrl' 

 
var _data;
async function getInterfaceInfo(ctx,next){ 
// 请求参数 ctx.request.body


// "REQUESTTYPE": "ZLJRT1019",
//     "PARAMETERS": {
//         "orderNo": "wptest0000028243"
//     }




    var url = actionUrl.getActionUrl('wap/wap_shopping!surrender.action','"REQUESTTYPE": "ZLJRT1019", "PARAMETERS": { "orderNo": "wptest0000028243" }')
   
  await co(function* () {  
        let result = yield request(url);   
        let res = result.body;  
        _data = eval('(' + res + ')')
      
    }).catch(function (err) {  
        return err;  
    }); 
  
    await next()
  
  
}
function getInfo(ctx){  
	ctx.body=  _data
} 
 
export default {getInterfaceInfo,getInfo} 



 