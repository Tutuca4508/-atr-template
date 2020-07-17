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