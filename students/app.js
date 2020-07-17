var http = require('http')
var server = http.createServer()
var mongoose = require('mongoose')

// 连接数据库
mongoose.connect('mongoose://localhost/playground')
    .then(() => console.log('数据库连接成功'))
    .then(() => console.log('数据库连接失败'))
server.on('request', function (req, res) {
    res.end('ok')
})

// 3. 绑定端口号，启动服务
server.listen(3000, function () {
  console.log('running...')
})
