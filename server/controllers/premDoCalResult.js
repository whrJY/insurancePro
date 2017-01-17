 
let co = require("co");  
let request = require("co-request");   
import actionUrl from '../../client/shared/actionUrl' 
 
var _data;
async function getInterfaceInfo(ctx,next){ 
// 请求参数 ctx.request.body



// "REQUESTTYPE": "ZLJRT0104",
//     "PARAMETERS": {
//         "riskCode": "135201001",
//         "productFactors": {
//             "Period": "365D",
//             "TextAge": "1Y-2Y",
//             "Plan": "plan1"
//         }
//     }




var url = actionUrl.getActionUrl('wap/wap_product!getPremDoCalResult.action','"REQUESTTYPE": "ZLJRT0104",  "PARAMETERS": { "riskCode": "135201001",  "productFactors": {  "Period": "365D", "TextAge": "1Y-2Y", "Plan": "plan1" } }')
  

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




