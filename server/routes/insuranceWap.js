import Router from 'koa-router' 
import insurance from '../controllers/insurance'
import appInfo from '../controllers/appInfo'

import productInfo from '../controllers/productInfo'
import premDoCalResult from '../controllers/premDoCalResult'
import productColumnInfo from '../controllers/productColumnInfo'
import applicationTempMap from '../controllers/applicationTempMap'
import saveOrderInfo from '../controllers/saveOrderInfo'
import affirmApplication from '../controllers/affirmApplication' 
import applicationDetails from '../controllers/applicationDetails'
import applicationInfo from '../controllers/applicationInfo'
import zcarticle from '../controllers/zcarticle'
import baseInfo from '../controllers/baseInfo'
import occupationInfo from '../controllers/occupationInfo'
import areaInfo from '../controllers/areaInfo'
import payConfInfo from '../controllers/payConfInfo'
import surrender from '../controllers/surrender'


const router = new Router({prefix: '/insuranceApp'})

 router.post('/getInfo',  appInfo.getAppInfo,appInfo.getInfo );
 

//app、wap、pc 请求响应保险接口

//产品详情  getProductInfo
 router.post('/getProductInfo',  productInfo.getInterfaceInfo,productInfo.getInfo );

 //产品保费查询接口	getPremDoCalResult
 router.post('/getPremDoCalResult',  premDoCalResult.getInterfaceInfo,premDoCalResult.getInfo );

 //产品栏目接口	getProductColumnInfo
 router.post('/getProductColumnInfo',  productColumnInfo.getInterfaceInfo,productColumnInfo.getInfo );

 //产品投保模板接口	getApplicationTempMap
 router.post('/getApplicationTempMap',  applicationTempMap.getInterfaceInfo,applicationTempMap.getInfo );

 //订单生成接口	saveOrderInfo
 router.post('/saveOrderInfo',  saveOrderInfo.getInterfaceInfo,saveOrderInfo.getInfo );

 //投保信息确认接口	affirmApplication
 router.post('/affirmApplication',  affirmApplication.getInterfaceInfo,affirmApplication.getInfo );

 //订单详情	getApplicationDetails
 router.post('/getApplicationDetails',  applicationDetails.getInterfaceInfo,applicationDetails.getInfo );

 //订单列表	getApplicationInfo
 router.post('/getApplicationInfo',  applicationInfo.getInterfaceInfo,applicationInfo.getInfo );

 //栏目catalog信息	getZcarticle
 router.post('/getZcarticle',  zcarticle.getInterfaceInfo,zcarticle.getInfo );

 //公共信息接口	getBaseInfo
 router.post('/getBaseInfo',  baseInfo.getInterfaceInfo,baseInfo.getInfo );

 //职业类型接口	getOccupationInfo
 router.post('/getOccupationInfo',  occupationInfo.getInterfaceInfo,occupationInfo.getInfo );

 //地区信息接口	getAreaInfo
 router.post('/getAreaInfo',  areaInfo.getInterfaceInfo,areaInfo.getInfo );

 //支付确认接口	payConfInfo
 router.post('/payConfInfo',  payConfInfo.getInterfaceInfo,payConfInfo.getInfo );

 //退保接口	surrender
 router.post('/surrender',  surrender.getInterfaceInfo,surrender.getInfo );

export default router
