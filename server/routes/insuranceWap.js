import Router from 'koa-router' 
import insurance from '../controllers/insurance'
import appInfo from '../controllers/appInfo'

const router = new Router({prefix: '/insuranceApp'})

//app 请求响应
router.post('/getInfo', appInfo.getAppInfo,appInfo.getInfo);
 

export default router
