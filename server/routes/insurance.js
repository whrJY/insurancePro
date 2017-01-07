import Router from 'koa-router'
import insurance from '../controllers/insurance'

const router = new Router({prefix: '/insurance'})

router.post('/getInfo', insurance.getInfo)

export default router
