 
let co = require("co");  
let request = require("co-request");   

import actionUrl from '../../client/shared/actionUrl' 

 
var _data;
async function getInterfaceInfo(ctx,next){ 
// 请求参数 ctx.request.body



// "REQUESTTYPE": "ZLJRT0022",
//     "PARAMETERS": {
//         "PolicyInfo": {
//             "ProdCode": "236401001",
//             "CompanyID": "2364",
//             "OrderSource": "HTML5",
//             "PolicyDateFrom": "2017-01-14 00:00:00",
//             "Premium": 1000,
//             "PrePremium": 1000,
//             "BuyCopies": 1,
//             "Insuredelements": {
//                 "Period": "5Y",
//                 "TextAge": "18Y-75Y",
//                 "Plan": "130705"
//             }
//         },
//         "CPSInfo": {
//             "CPSUserSource": "",
//             "ChanneCode": "",
//             "CPSUserID": ""
//         },
//         "OrderInfo": {
//             "OrderNumber": "",
//             "OpenId": "",
//             "MemberId": "03204ea9b21541559d2a0a3a2a2ac78e"
//         },
//         "HolderInfo": {
//             "AppntEName": "",
//             "AppnttGender": "男",
//             "AppntPayperStartDate": "",
//             "AppntMobile": "13010101010",
//             "AppntPayperNumber": "340827198811081317",
//             "AppntOccupation1Code": "",
//             "AppnttGenderCode": "0",
//             "AppntPayperType": "身份证",
//             "AppntPostCode": "",
//             "AppntPayperTypeCode": "0",
//             "AppntBirthday": "1988-11-08",
//             "AppntOccupation3Code": "",
//             "AppntName": "张三"
//         },
//         "InsuredInfos": [
//             {
//                 "RecognizeeTravelDestinationInput": "",
//                 "RecognizeeWeight": "",
//                 "RecognizeePayperStartDate": "",
//                 "RecognizeeStudyAbroadCompany": "",
//                 "RecognizeeBirthday": "1989-11-08",
//                 "IsHolderSelf": "Y",
//                 "RecognizeeArea1Code": "",
//                 "RecognizeePayperTypeCode": "0",
//                 "RecognizeePayperNumber": "340827198811081317",
//                 "RecognizeeAddress": "",
//                 "RecognizeeGenderCode": "1",
//                 "RecognizeeHasBuyLifeCov": "",
//                 "RecognizeeHeight": "",
//                 "RecognizeePayperValidDate": "",
//                 "RecognizeeArea2Code": "",
//                 "RecognizeeMobile": "13010101010",
//                 "RecognizeePayperEndDate": "",
//                 "RecognizeeOccupation2Code": "",
//                 "RecognizeeDrivingSchoolName": "",
//                 "RecognizeeTravelDestinationSel": "",
//                 "RecognizeeGenderName": "女",
//                 "RecognizeeRelationShip": "本人",
//                 "RecognizeeOccupation1Code": "",
//                 "RecognizeePayperType": "身份证",
//                 "RecognizeeOccupation3Code": "",
//                 "RecognizeePostCode": "",
//                 "FlightNumber": "",
//                 "RecognizeeOverseasOccupation": "",
//                 "RecognizeeRelationShipCode": "0",
//                 "RecognizeeName": "李四",
//                 "RecognizeeHasBuyLifeCovAmount": "",
//                 "BuyCopies": "1"
//             }
//         ],
//         "BeneficiarytInfo": {
//             "BeneficiaryName": "法定受益人",
//             "BeneficiaryIdentityType": "2",
//             "BeneficiaryIdentityId": "130181198912164240"
//         }
//     },


var url = actionUrl.getActionUrl('wap/wap_shopping!saveOrderInfo.action',' "REQUESTTYPE": "ZLJRT0022", "PARAMETERS": {"CPSInfo": { "CPSUserSource": "", "ChanneCode": "", "CPSUserID": "" }}')
 

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




