 
let co = require("co");  
let request = require("co-request");  

 import actionUrl from '../../client/shared/actionUrl' 

 
var _data;
async function getInterfaceInfo(ctx,next){ 
// 请求参数 ctx.request.body


// "REQUESTTYPE": "ZLJRT0050", 
//     "PARAMETERS": {
//         "memberId": "03204ea9b21541559d2a0a3a2a2ac78e",
//         "orderStatus": "",
//         "PagNum": "Last",
//         "PagCount": "5"
// }






var url = actionUrl.getActionUrl('wap/wap_order!getApplicationInfo.action','"REQUESTTYPE": "ZLJRT0050", "PARAMETERS": { "memberId": "03204ea9b21541559d2a0a3a2a2ac78e", "orderStatus": "", "PagNum": "Last", "PagCount": "5" }')
 

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




 