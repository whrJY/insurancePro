import Router from 'koa-router' 
import insurance from '../controllers/insurance'
import appInfo from '../controllers/appInfo'

const router = new Router({prefix: '/insurance'})

//app 请求响应
router.post('/getInfo', async (ctx, next) => {
	var name = ctx.request.body.name

    ctx.response.body =   appInfo.getAppInfo(name)
});


export default router
