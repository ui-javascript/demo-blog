title: webpack4配置使用基础
speaker: luo0412
theme: dark
headFiles: /assets/css/colors.css




[slide]
# webpack配置使用基础
## 骆金参
## 2018-12-13

[slide]   
[magic data-transition="circle"]

<div class="tc">
<img src="/assets/images/fe-build-stat.png" style="width: 700px;height:266px;">
</div> 

 
====
# 构建工具

- 构建工具 https://www.awesomes.cn/repos/Applications/Builds
- (一家独大) webpack
- (竞争对手) parcel/rollup/fastpack/...
- (早期对手) yeoman/brunch/browserify/cooking 
- (任务运行器) grunt -> gulp -> fis

====
# 为什么使用webpack

- (竞争对手)gulp/parcel/rollup/fastpack/...
- Gulp -> webpack2 
- Rollup(Tree Shaking) -> webpack3
- Parcel(零配置) -> webpack4
- 将来, 干掉XYZ... -> webpackN

[/magic]


[slide]
[magic data-transition="circle"]
# gulp

<div>
    <img src="/assets/images/gulp-structure.png" width=365 height=463>
    <img src="/assets/images/gulp-task.png" class="ml-30" width=340 height=382>
</div>

====

<div>
    <img src="/assets/images/gulp-compile-js.png" width=443 height=221>
    <img src="/assets/images/gulp-task-config.png" class="ml-30" width=408 height=442>
</div>

====

<img src="/assets/images/browser-sync.png" width=749 height=349>

====
<div>
<img src="/assets/images/browser-run.png" width=1497 height=491>
</div> 

====
# gulp的不足

- 不支持freemarker/thymeleaf/JSP等后台模板(视图)技术
- 模块化(require.js/sea.js)手动注册
- 单页面应用方面输出乏力
- 浏览器多页应用(MPA)首选方案

====
# webpack的不足

- 配置复杂,学习成本高
- 目前限制用于采用模块化开发的项目
- SSR/语义化
- 浏览器单页应用(SPA)首选方案

[/magic]


[slide]
[magic data-transition="circle"]

# 工作流 | Workflow

- weflow(gulp4) https://github.com/Tencent/WeFlow
- feflow(yeoman) https://github.com/feflow/feflow
- dawn(node.js) https://github.com/alibaba/dawn
- athena2(webpack3) https://github.com/o2team/athena2
- y-workflow(gulp3) https://github.com/yued-fe/y-workflow
- ...

====
# 脚手架 | Scaffold

- antd提供的脚手架市场 http://scaffold.ant.design/#/
- vue-cli
- create-react-app
- react-boilerplate 
- react-starter-kit 
- ...

====
# 快速构建 | Boilerplate

<div>
    <img src="/assets/images/vue-scaffold.png" width=594 height=552> 
</div>


====
# Vue常用模板 | Template

<div>
    <img src="/assets/images/vue-template.png" width=682 height=455> 
</div>

  
[/magic]


[slide]
[magic data-transition="circle"]
# webpack3
# (vue-boilerplate-template)

- [vue-boilerplate-template](https://github.com/nicejade/vue-boilerplate-template) @old
- @杨琼璞
- PWA + dll + happypack
- [开箱即用的 Vue Webpack 脚手架模版](https://www.jeffjade.com/2018/05/20/140-vue-webpack-boilerplate-template/)
- [Webpack 打包优化之速度篇](https://www.jeffjade.com/2017/08/12/125-webpack-package-optimization-for-speed/)
- [Webpack 打包优化之体积篇](https://www.jeffjade.com/2017/08/06/124-webpack-packge-optimization-for-volume/)

====
<img src="/assets/images/nicejade.png" width=677 height=127> 
<img src="/assets/images/nicejade-gender.png" width=328 height=198> 

====

# 目录结构



====
# 安装依赖


==== 
# 陌生命令

- yarn run build:dll -> 构建出 vendor.dll.js
- yarn run jarvis -> 非常智能的基于浏览器的Webpack仪表板
- yarn run pretest -> 对生产环境所构建的包进行简单的“预测”

====
# PWA

- sw-precache-webpack-plugin 

[/magic]


[slide]
[magic data-transition="circle"]
# webpack4升级

```
<body>
    <h1> Jade - node template engine </h1>
</body>
```

====
# webpack4 + vue-cli3
# (vue-admin-template)


[/magic]







[slide]
[magic data-transition="circle"]

# 构建优化


[/magic]


[slide]
[magic data-transition="circle"]

# 多页面


[/magic]
