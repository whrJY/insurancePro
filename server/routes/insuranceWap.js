import Router from 'koa-router' 
import insurance from '../controllers/insurance'
import appInfo from '../controllers/appInfo'

const router = new Router({prefix: '/insuranceApp'})

//app 请求响应
router.post('/getInfo', async (ctx, next) => {
 
    appInfo.getAppInfo(ctx) 
  
    return next();
    

});


export default router
