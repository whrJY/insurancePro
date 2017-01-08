 
async function getInfo(ctx) {
    ctx.body = {
        name: 'insurance',
        gender: 'male',
        age: 20,
    }
}
 
export default {getInfo}
