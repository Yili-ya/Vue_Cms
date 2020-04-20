# Vue 项目

##	技术栈:H5 + CSS3 + Js + vue + ElementUi + MUI + Git+ webpack

##	功能: 阅读新闻、评论、浏览商品 、加入购物车结算
##	攻克难点: 商品购买与购物车页面,无法使用子父级传参,最后使用vuex解决, 并实现购物车实时显示商品数量


## 首页的九宫格布局
+ 使用mui中的 grid-default.html
+ 添加图标并设置宽高
+ 将背景色设置为白色
+ 去掉了九宫格的边框
+ 修改了字体大小为 13px

## 实现路由切换的动画效果
1. 分析如何实现路由切换动效：
 + 要使用 vue 提供的 transition 元素把 `<router-view></router-view>` 包裹起来
 + 使用自定义的动画类名实现动画效果
2. 当实现基本的动画效果之后，需要解决一些问题：
 + 设置即将离开的页面的运动方向为 `-100%`
 + 为了防止 页面跳动的问题，需要为 离开的 页面，设置绝对定位；
 + 当有组件切换动效的时候，一瞬间，页面的宽度会变成 正常宽度的 2 倍，此时，需要隐藏超出屏幕宽度的区域

 ## 完成新闻资讯列表的路由配置
 + 创建路由组件页面
 + 改造路由链接
 + 添加路由对应规则

 ## 绘制新闻资讯页面的效果
 + 使用mui中的media-list.html
 + 使用 `display: flex;`实现了弹性盒模型布局，从而让 元素左右贴边；`justify-content: space-between;`

 ## 展示新闻列表的数据
 1. 当页面加载完毕之后，就要去获取页面数据，因此，应该在 `created` 钩子函数中调用获取数据的方法
 2. 在 methods 中，定义个 `getNewsList`方法来获取数据`this.$http.get()`
 3. 在获取数据的时候，为了操作方便一些，我们用到  `async` 和 `await` 特性
 4. 当数据获取回来之后，如果想要通过`v-for`指令循环渲染到页面上，需要把 数据挂载到 `data` 上

 ## 定义全局的过滤器来格式化时间字符串
 1. 经过分析，整个项目中，许多组件都需要格式化时间，因此，推荐定义为全局的时间过滤器；
 2. 定义全局过滤器的语法：`Vue.filter('dateFormat', function(dataStr){})`
 3. 调用过滤器的语法：`<span>{{ item.add_time | dateFormat }}</span>`
 4. 这个时间过滤器，如何去格式化时间呢？比较方便的方式，是借助与第三方的`moment`插件
 5. 这个全局过滤器，定义到哪个文件中呢？
 6. 在设计时间过滤器的时候，为了提高用户体验度（可能有的用户想要 最全的`年-月-日 时：分：秒`， 有的用户只想要`YYYY-MM-DD`），此时，我们可以为过滤器提供一个可选的 格式字符串；

 ## 以模块化的思想抽离main.js中的代码
 1. 先把 `filter` 过滤器，统一的抽离到了`filter.js`模块中
 2. 当抽离完 `filter.js` 之后，发现 `main.js` 中，很多代码和 `vm` 实例没有很强的关联关系， 因此，考虑把 这个 全局配置相关的代码，单独抽离到 `globalConfig.js` 的模块中；
 3. 这样，我们在 `main.js` 不需要关心 全局配置文件中如何配置的，只需要导入 这个全局配置即可；

 ## 实现了 新闻列表 到 新闻详情的 跳转
 1. 添加新闻详情组件
 2. 改造每一个 新闻列表项的 链接，为 `router-link`，其中， `to` 属性中的 id 值，需要动态拼接给每一个 router-link, 因此，需要把 `to`属性，改造成 `:to`，然后，属性值中的 统一路径前缀：`/home/newsinfo/` 应该被 单引号包裹起来，后面，在拼接上 `item.id` 即可
 3. 添加路由规则
 4. 当实现了以上三步之后，我们想在页面中，获取路由传递过来的参数：
  + 方式1： `$route.params.id` 来获取，比较麻烦，是老的方式
  + 方式2： 使用路由的`props`属性来传递参数：
     - 改造路由规则，在对应的规则中，添加 `props: true` 的属性
     - 在 组件中，定义`props: []` ，数组中定义的 名称，就是 路由规则中，对应参数的名称占位符（要保持一致）

## 渲染新闻详情页面
1. 获取数据
2. 挂载数据到 data 上
3. 渲染页面

## 评论子组件的封装和引用
1. 在 项目的 创建`src -> sub-components` 目录；
2. 创建一个标准的vue组件，命名为 `Comment.vue`， 作为我们的评论子组件
3. 哪个页面需要引用这个评论组件了，就在页面的 script 节点中，通过  import 的形式，导入此组件
4. 在 页面的 script 中，通过 `components`属性注册导入的评论组件
5. 把注册的组件名称，以标签形式，引入到页面上，就能够看到这个评论子组件了；

## 绘制评论子组件的结构

## 获取评论内容
1. 前提： 在评论组件中，需要获取到新闻的id;
2. 通过 属性传递的形式，父组件为子组件传递新闻的Id；
3. 定义根据新闻Id和页码，获取评论数据的方法，并在 `created` 钩子中，调用此方法，获取数据；
4. 把获取到的数据，挂载到 data 上的 cmtlist 中；并渲染页面；

## 点击加载更多的评论
1. 为加载更多按钮，绑定点击事件；
2. 在事件中，让 page 页码值 自增 + 1
3. 当页码值+1之后，重新调用 获取 评论内容的方法；
 + 如果重新调用获取更多评论内容的方法，刚获取到的那一页的数据， 会覆盖之前的评论数据；
 + 为了防止上述的问题，我们在获取到评论数据之后，不应该直接 `this.cmtlist = data.message`，而是应该`this.cmtlist = this.cmtlist.concat(data.message)`

 ## 实现发表评论的功能
 1. 在 点击发表评论按钮的时候，处理函数中，做一下非法值校验，防止评论内容为空！
 2. 如果校验通过，则调用API接口提交评论数据到后端；
 3. 当评论成功后，需要在客户端，组织出一个新的评论对象，手动 unshift 到 评论列表`cmtlist`中；


 ## 改造图片分享的路由跳转
 1. 新建一个组件页面 
 2. 改造路由链接 `HomeContainer.vue`
 3. 添加一个路由规则 `router.js`

 ## 实现图片分享列表中顶部的滑动区域
 1. 借助于 MUI 的 `tab-top-webview-main.html` 控件来实现
 2. 当拿到 UI 代码片段之后，需要把 `mui-fullscreen` 去掉
 3. 当页面布局没有大问题之后，发现无法实现滑动效果，此时，需要使用官方推荐的形式，去初始化一下控件,具体初始化的方式，参考官方文档:`http://dev.dcloud.net.cn/mui/ui/#scroll`
 

## 当在项目中引入了MUI的JS文件报错的问题：
> 报错信息：Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
1. 分析问题的原因：
 + webpack 打包出来的  bundle.js 中，默认启用了严格模式
 + 在项目中，import 导入的 mui.js 中，使用了 callee caller 这些特性， 但是这些特性在严格模式中不支持，会报错；
 + 经过分析：发现，关闭webpack的严格模式，更容易一些，因为不再需要修改mui.js的源代码了；
 + 如何关闭webpack的严格模式呢？使用一个webpack的插件：`https://github.com/genify/babel-plugin-transform-remove-strict-mode`


## 当移除严格模式之后滑动效果还无法实现
1. 主要原因：需要在`mounted`钩子函数中来初始化
2. 因为，如果当前的 图片分享列表组件，还没有挂载到页面上，那么，调用`mui()` 方法 初始化组件是没有任何意义的；因为此时页面上没有任何的元素；

## 如何移除滑动区域的警告问题
1. 为 `mui-slider` 类样式，添加，`touch-action: pan-x;`属性样式，从而支持 此元素的 单指水平滑动效果，提高滑动的流畅度；

## 解决 tabbar 区域 和 图片分类列表JS行为冲突的问题
1. 冲突的原因：每一个tabbar 按钮的 类样式`mui--tab-item`和JS行为有冲突；
2. 解决的思路：把所有和 `mui-tab-item`相关的样式粘出来，然后改个类名，重新把自己的类名，替换掉之前的即可

## 获取图片分类数据并加载到页面上
1. 获取分类数据
2. 手动把 `全部` 分类信息，通过数组的 unshift 方法，头部追加到数组中
3. 把 获取到的分类，挂载到 data 上的 category 中
4. 默认设置`全部分类`被高亮选中：通过 `:class` 结合 三元表达式，把 `id` 为0那一项分类，设置为默认选中；

## 默认加载全部的分类数据
1. 定义一个`getPhotoByCategory`的方法， 接收一个分类Id，然后根据Id获取所有的图片列表
2. 把获取到的图片，挂载到 `photolist`中
3. 根据Mint-UI 的 lazy-load 组件，实现图片的懒加载效果；
 + 在实现懒加载效果时候，需要注意： 图片的 URL 地址，需要通过`v-lazy`来指定；
 + 需要把图片的样式也粘贴到项目中，同时，把 `image`选择器修改成`img`标签选择器；

 ## 美化图片列表

 ## 点击图片分类，切换图片列表数据
 1. 为每一个分类，添加点击事件，重新发起数据请求，来获取图片列表

 ## 点击图片跳转到图片详情页面的路由改造
 1. 把 每个图片的 li 改造成`router-link`同时，要添加`tag="li"`属性，而且，跳转的链接，需要使用`:to`来设置，因为需要传递这个图片的Id过去；
2. 添加一个路由的规则，在规则中，使用`props` 来快速传递路由中的参数；
3. 添加路由对应的组件

## 开发图片的详情页面
1. 根据`props`中接收的图片Id，获取图片的详情数据
2. 根据图片的详情，渲染页面最基本的结构
3. 发表评论的功能，直接引用现成的组件：
 + 使用 import 把评论子组件导入到当前组件中
 + 把 导入的评论组件对象，注册 为 当前 图片详情页面的子组件 `components`
 + 以标签形式，把注册好的评论子组件名称，引入到页面指定区域
 + 注意：如果要实现评论的功能，需要在（以标签形式）引用评论子组件的时候，为其传递一个 `newsid` 的属性，属性值，应该是当前图片的id;

 ## 实现缩略图的效果
 1. 先加载所有的图片并显示到页面上；
 2. 使用`vue-preview`插件来实现缩略图效果；
 3. 如何使用缩略图组件呢：
  + 运行`cnpm i vue-preview -S`安装
  + 在 全局的配置文件`globalConfig.js`中，安装此组件：
  ```
  import VuePreview from 'vue-preview'
  Vue.use(VuePreview)
  ```
  + 在页面中，先把获取到的图片，按照标准的格式做一层包装：为每个图片添加`w`和`h`属性；
  + 把官方提供的 例子中的`img`标签粘贴到页面中，去渲染数据就行了；

  ## 点击商品购买跳转到商品列表页面
  1. 添加商品列表的组件
  2. 改造`商品购买`为`router-link`
  3. 添加路由规则

  ## 实现商品列表的经典两列布局
  1. 外层有一个 `goods-list`， 里面的每个商品都是`goods-item`;
  2. 给外层的`goods-list`设置 `display:flex;`布局，同时为了让一行只显示两个商品，我们为每个`goods-item`添加了宽度为`49%`;同时，设置了`goods-list`的`flex-wrap: wrap`;
  3. 通过 为父盒子添加`padding: 7px;` 来挤出左右的边距；
  4. 为了保留出中间的间隙，为 父盒子`goods-list`添加了`justify-content: space-between;`

  ## 使用手机调试Vue项目
  1. 前提：要保证自己的手机和当前做项目的电脑，处于同一个WIFI环境中；
  2. 当手机和电脑处于同一个WIFI中之后，大家需要运行终端命令`ipconfig`，查找 `无线局域网适配器` 的网络配置，复制其`IPv4`的地址；
  3. 把复制的Ip地址，粘贴到`package.json`中：`"dev": "webpack-dev-server --open --port 3000 --host 127.0.0.1 --hot"`， 将`--host`指令设置为 WIFI的地址；
  4. 在确保手机和自己的电脑处于同个WIFI的前提下，而且，正确使用 WIFI 地址运行了我们的项目之后，大家可以打开自己的手机浏览器，输入 `http:// + IP地址 + 端口号`，就能在手机上调试自己的网站了！


## 改造进入商品详情页面的路由链接
1. 将每个商品 item 项，改造成`router-link`，同时，提供`tag="div"`属性把路由渲染为 `div`， 再指定一个`:to`属性，拼接上商品的Id值；
2. 添加新的组件页面
3. 添加路由和组件的对应规则；

## 实现商品详情页面的卡片视图布局
1. 使用 MUI提供的 card.html 来实现即可

## 实现商品详情页面的轮播图效果

## 实现首页和商品轮播图的宽高设置
1. 经过分析发现：首页和商品页面的轮播图，对于图片的宽有分歧：
 + 首页期望图片是：宽高100%
 + 商品详情页面期望图片是： 高度100%， 宽度自适应，图片居中显示；
2. 让轮播图组件，提供一个 `isfull` 属性，表示是否撑满父元素；
 + 如果为true,表示，宽和高都要是 100%
 + 如果为 false，表示，宽是 自适应，高度是100%，同时图片居中显示
