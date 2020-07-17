const template = require('art-template')
const path = require('path')

const views = path.join(__dirname,'views','01.art')

const html = template(views,{
    name:'张三',
    age:20,
    content:'<h1>你好</h1>'// 包含html标签的数据

})
console.log(html);