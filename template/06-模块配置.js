const template = require('art-template')
const path = require('path')
const dateFormat = require('dateformat')

// 设置模板根目录
template.defaults.root = path.join(__dirname, 'views')

// 导入方法
template.defaults.imports.dateFormat = dateFormat

// 配置模板的默认后缀
template.defaults.extname = '.art'

const html = template('06-模块配置', {
    time: new Date()// 获取当前时间
})
console.log(html);