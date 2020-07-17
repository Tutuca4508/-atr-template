# Art-Template 模板引擎

主要为自学时的笔记与代码测试

- [Art-Template 模板引擎](#art-template-模板引擎)
- [1. 如何安装Art-Template](#1-如何安装art-template)
- [2. 模板输出](#2-模板输出)
    - [2.1 模板语法](#21-模板语法)       
    - [2.2 输出](#22-输出)
    - [2.3 原文输出](#23-原文输出)
    - [2.4 条件判断](#24-条件判断)



## 1. 如何安装Art-Template
* 在文件相应路径使用cmd输入
`npm install art-template `
将会自动生成 node_modules 目录
* 该命令在哪执行，就把包下载到哪里。默认会下载到 node_modules目录中
* node_modules 不支持改
* art-template` 不仅可以在浏览器里使用，也可以在node中使用
* 由腾讯提供

## 2. 模板输出
### 2.1 模板语法
* 标准语法：使模板更易读
* 原始语法：逻辑处理能力强

   标准语法：`{{ 数据 }}`

   原始语法：`<%=数据 %>`
### 2.2 输出

- 能提取数据
- 能进行四则运算
- 能进行三目运算符

### 2.3 原文输出
对于包含 `html` 标签的数据，需要进行原文输出，才能解析出`html`标签，

否则是乱码
* 标准语法：{{ @ 数据 }}
* 原始语法：<%- 数据 %>

### 2.4 条件判断
``` javascript
<!--标准语法-->
{{ if age > 18}} 
    结果1
{{ else if age < 15 }}
    结果2
{{ else }}
{{ / if }}


<!--原始语法-->
<% if (条件1) { %> 
    结果1
<% } else if (条件2) { %>
    结果2
<% } else { %>
<% } %>


 ```

### 2.5 循环

```javascript
<!-- 标准语法 -->
{{each 数组名}}
    <li>
        {{$value.属性1}}
        {{$value.属性2}}
    </li>
{{/each}}
{{}}


<!-- 原始语法 -->
<% for (var i = 0; i < 数组名.length; i++>) {%>
    <li>
        <%=数组名[i].属性1 %>
        <%=数组名[i].属性2 %>
        <%=数组名[i].属性3 %>
    </li>
<% } %>
```

### 2.6 子模版

将网站公共区域抽离到单独一个文件里

- 标准语法

`{{ include './common/header.art'}}`

`{{ inlucde './common/footer.art'}}`

- 原始语法

`<% include('./common/header.art')%>`

`<% include('./common/footer.art')%>`

### 2.7 模板继承

可以将网站HTML骨架抽离到单独的文件中，其他页面模板可以继承骨架文件

- 模板骨架
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    {{block 'link'}} {{ /block}}<!-- 待填充 -->
</head>
<body>
    {{block 'content'}} {{/block}}<!-- 待填充 -->
    
</body>
</html>
```
---

- 继承模板
```jacascript
{{extend './common/layout.art'}}<!-- 继承模板骨架 -->

{{block 'content'}}<!-- 填充模板内容 -->
<p>{{ msg }}</p>
{{/block}}

{{block 'link'}}<!-- 填充模板内容 -->
<link rel="stylesheet" href="./main.css">
{{/block}}
```


### 2.9 模板配置

#### （1）日期格式化
- 通过`npm install dateformat` 下载模块
- 再通过`require` 调动使用
- 默认情况下，不能直接在模板中调用dateformat方法
- ** 只能将方法作为模板的变量导入到模板中 ** 
`template.defaults.imports.dateFormat(自定义) = dateFormat（方法名称）`
- 格式化时间
`{{ dateFormat(time, 'yyyy-mm-dd')}}`
- 设置模板根目录
`template.defaults.root = 模板目录`
- 设置模板默认后缀
`template.defaults.extname = '.art'`

## 3. 案例

### 3.1 学生档案管理
- 目标：模板引擎应用，强化node.js项目制作流程
- 知识点：http请求相应、数据库、模板引擎、静态资源访问

>制作流程
1. 建立项目文件夹并生成项目描述文件
* `npm init -y` 生成项目描述文件，
2. 创建网站服务器实现客户端和服务器端通信
3. 连接数据库并根据需求设计学员信息表
4. 创建路由并实现页面模板呈递
5. 实现静态资源访问
6. 实现学生信息添加功能
7. 实现学生信息展示功能