 
 
import fs from 'fs' 
import path from 'path'
import os from 'os' 
 
 

async function upload(ctx,next){


  //文件上传操作原理模拟
  //os.tmpdir() -- /Users/user/Documents/qiuyeProgram/insurancePro
    var tmpath = path.join(os.tmpdir(), ctx.request.body.file);//模拟上传到临时目录的文件
    console.log(ctx.request.body);
    var ext = ".jpg";//上传后生成文件的后缀，一般和上传的文件后缀一致
    var ph = path.join('public/upload', Date.parse(new Date()).toString() + ext);//生成新的上传文件路径全称
    console.log(ph);
    var stream = fs.createWriteStream(ph);//创建一个可写流
    fs.createReadStream(tmpath).pipe(stream);//可读流通过管道写入可写流



 // ctx.request.body 获取文件名称
 //ctx.request.type
 
 //ctx.expect('Content-Type', 'image/png')
// console.log(ctx.request.type)
 
 

 //设置响应header参数
  // ctx.response.body='Stream';
  // ctx.response.type = 'image/png';

   

    // await co(function* () {  
    //     var parts = parse(this);
    //     var part;
    //     console.log(123)

        

    //     while ((part = yield parts)) {
    //         var stream = fs.createWriteStream(path.join(os.tmpdir(), Math.random().toString()));
    //         part.pipe(stream);
    //         console.log('uploading %s -> %s', part.filename, stream.path);
    //     }

    //     ctx.body = {data:true}
    //      console.log(13)
      
    // }).catch(function (err) {  
    //      console.log(23+err)
    //     ctx.body = err;  
    // }); 
  
    // await next()

     
  
}
 
 
export default {upload} 




