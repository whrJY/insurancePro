 
let co = require("co");  
let request = require("co-request");   
 import actionUrl from '../../client/shared/actionUrl' 

  
var _data;
async function getInterfaceInfo(ctx,next){ 
// 请求参数 ctx.request.body


 // "REQUESTTYPE": "ZLJRT1015", 
 //    "PARAMETERS": {
 //        "ProdCode": "163601002",
 //        "CompanyID": "1636"
 //    }

  


    var url = actionUrl.getActionUrl('wap/wap_common!getBaseInfo.action','"REQUESTTYPE": "ZLJRT1015","PARAMETERS": { "ProdCode": "163601002", "CompanyID": "1636" }')
 
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




