const template = require('art-template')

const path = require('path')

const views = path.join(__dirname, 'views', '04-子模版.art')

const html = template(views, {
    msg:'我是首页'
})
console.log(html);