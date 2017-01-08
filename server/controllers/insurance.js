import body from 'koa-bodyParser'
async function getInfo(ctx) {
    ctx.body = {
        name: 'insurance',
        gender: 'male',
        age: 20
    }
}
body()
export default {getInfo}
