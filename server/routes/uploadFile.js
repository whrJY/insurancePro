import Router from 'koa-router'
import uploadFile from '../controllers/uploadFile'

const router = new Router({prefix: '/uploadFile'})

router.post('/', uploadFile.upload)
 
export default router
