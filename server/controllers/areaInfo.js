 
let co = require("co");  
let request = require("co-request");   
 import actionUrl from '../../client/shared/actionUrl' 

 
var _data;
async function getInterfaceInfo(ctx,next){ 
// 请求参数 ctx.request.body


// "PARAMETERS": { "ProdCode": "163601002", "CompanyID": "1636", "ParentKey": "" }

    var url = actionUrl.getActionUrl('wap/wap_common!getAreaInfo.action','"REQUESTTYPE": "ZLJRT0012","PARAMETERS": { "ProdCode": "163601002", "CompanyID": "1636", "ParentKey": "" }')
   
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



 