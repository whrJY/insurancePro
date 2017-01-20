 
let co = require("co");  
let request = require("co-request");  
import actionUrl from '../../client/shared/actionUrl'  
import searchAppUser from '../../client/shared/searchAppUser'
 
var _data;
async function getAppInfo(ctx,next){
    searchAppUser.getConnect()
// 请求参数 ctx.request.body
	//console.log(ctx.request.type) 

    




    var url = actionUrl.getActionUrl('wap/wap_product!getProductInfo.action','"REQUESTTYPE": "ZLJRT0109","PARAMETERS": {}')
   
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
 
export default {getAppInfo,getInfo} 




