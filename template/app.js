// 获取核心模块
const template = require('art-template') 
const path = require('path')

// 拼接路径，目标路径的文件是  需要获取数据的文件
const views = path.join(__dirname, 'views', 'index.art')

// template 方法用来拼接字符串
// 1. 模板路径 是绝对路径
var html = template(views, {
    name:'张三',
    age:20
})

console.log(html);