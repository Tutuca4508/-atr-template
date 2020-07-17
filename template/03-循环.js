const template = require ('art-template')

const path = require ('path')

const views = path.join(__dirname, 'views', '03-循环.art')

const html = template(views, {
    users:[{
        name: '张三',
        age:18,
        sex:'男'
    },{
        name: '张三',
        age:18,
        sex:'男'
    },{
        name: '张三',
        age:18,
        sex:'男'
    }]
})
console.log(html);