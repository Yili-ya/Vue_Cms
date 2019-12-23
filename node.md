#vue.js    Webpack
 

##在网页中会引用哪些常见的静态资源

+ images
 - .jpg .png .gif .webp .bmp .svg
+ css
 - .css .less .sass .scss
+ js
 - .js .jsx .coffee .ts(TypeScrpit 类 C#语言)
+ font 
 - .svg .eot .ttf .woff .woff2 
+ 模板文件
 - .ejs .jade .vue[这是在webpack方式中定义组件的方法，强烈推荐使用这个]
 
## 在网页中引入的静态资源过多的时候会有什么问题？
1.  网页加载速度慢，因为我们发起很多二次请求
2.  要处理它们之间错综复杂的依赖关系


## 如何去解决这些问题？
 1. 合并，压缩， 精灵图， 图片的Base64编码
 2.  可以使用webpack去解决各个包之间的依赖关系

## 什么是webpack?
+ webpack 是前端的项目构建工具， 它是基于node.js 开发出来的一个前端工具
+ 它可以完美的实现资源的合并，打包，压缩，混淆 等等功能

## webpack安装的两种方式
1.运行`npm i webpack -g ` 全局安装webpack 
  1.安装脚手架:运行`npm i webpack-cli --save-dev`
2. 在项目目录运行` npm i webpack --save-dev` 安装项目依赖中
3. 注意：在配置过程出现错误，先清除缓存 npm cache clean -f  再重新配置，
4. 如果清除缓存还不行，就在c盘搜索npm-cache 

## 初步使用webpack打包构建列表隔行变色
1. 运行`npm init -y` 初始化项目
2. 创建项目的基本目录结构
3. 使用`npm i jquery --save`下载jQuery库
4. 因为浏览器不识别es6语法，所以我们使用webpack转换语法， 输入`webpack src/main.js --output dist/bundle.js`

## 使用webpack配置文件简化打包时候的命令
1. 在项目根目录新建一个`webpack.config.js`
2. 在这个文件里配置入口文件和输出文件的文件路径:
3. 运行`webpack`去测试是否打包成功
## 实现webpack实时打包构建
1. 因为每次重新修改代码，都需要手动运行webpack命令，所以我们使用`webpack-dev-server`来实现代码的实时打包编译,当我们修改代码的时候就可以自动打包
2. 运行`npm i webpack-dev-server --save-dev`安装到开发依赖
3. 安装完以后，在package.json文件里的scrpit节点下添加一个`"dev": "webpack-dev-server"`
4. 运行 npm run dev 就可以得到一个自动打包的环境
5. webpack-dev-server这玩意会在根目录的内存中生成一个bundle.js(它是虚拟的),然后index.html引入的文件路径就应该是/bundle.js
6. `"dev": "webpack-dev-server --contentBase src "` 可以直接访问到src 里面的index.html文件
7. `"dev": "webpack-dev-server --contentBase src  --port 6666 --open"` 这是修改devserver的第一种方法，这种方法权限比较高

## 使用`html-webpack-plugin`插件去配置启动页面
1. 运行`npm i html-webpack-plugin --save-dev`安装到开发依赖
2. 修改`webpack.config.js`文件
3. 将index.html页面中的script引入注释掉，因为` html-webpack-plugin `插件会自动把bundle.js引入到页面去

## 使用webpack打包css文件
1. 运行`npm i style-loader css-loader -D`
2. 修改webpack.config.js 配置文件

## 使用webpack打包scss文件
1. 运行`npm i sass-loader node-sass -D`
2. 修改webpack.config.js 配置文件

## 使用webpack处理css中所有的路径
1. 运行` npm i url-loader file-loader -D` ,file-loader是不用配置的，但是url-loader依赖于file-loader,所以必须下载
2. 修改webpack.config.js 配置文件，`{test:/\.(jpg|png|gif)$/,use:'url-loader'}`
3. 通过'limit'指定进行Base64编码转译，`limit=200` 指定编码图片的大小，`[hash]`定义加密方式， `[name]`是图片原来的名字，`[ext]` 是图片的后缀名
   ```
        {test:/\.(jpg|png|gif)$/,use:'url-loader'}?limit=200&name=[hash:6]-[name].[ext]
   ```


## 在webpack中需要使用vue为后缀的文件时，需要做的配置
1.  运行`npm i vue -S`  将vue安装成运行依赖
2.  运行` npm i vue-loader vue-template-compiler -D` 将解析转换VUE的包安装成开发依赖
3.  修改webpack.config.js 文件

##  在webpack中使用.vue后缀文件时需要注意的
1. 需要在webpack.config.js 文件里加入  `const VueloaderPlugin = require('vue-loader/lib/plugin')`
2. 在plugins配置项中添加：`new VueloaderPlugin()`

##  向外暴露成员的方式
1. 使用 export default {}  这种方法只能暴露一次，暴露出去的对象可以使用随意的变量名去接收
2. `export` 可以暴露多次，在接收页面中使用{} 进行接收，不能修改暴露对象的名称，但是可以是 as 关键字定义别的名字


## 在VUE组件中使用，vue-router路由模块
1. [https://router.vuejs.org/zh/installation.html]

注意：前提是你已经导入vue模块

1. 运行`npm i vue-router -D`
2. 导入路由模块`import VueRouter from 'vue-router'`
3. 安装路由模块`Vue.use(VueRouter)`
4. 导入需要显示的组件
5. 创建路由对象
6. 把路由对象挂载到Vue实例


## 使用Mint-UI组件

1. 运行`npm i mint-ui -S`
2. 导入模块 `import MintUI from 'mint-ui'`