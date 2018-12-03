## 概况

- 自己的presentation，题目[在线预览](https://github.com/guanpengchn/presentation/tree/master#%E5%9C%A8%E7%BA%BF%E9%A2%84%E8%A7%88)
- 使用[nodeppt](https://github.com/ksky521/nodeppt)制作
- 可用主题 colors，moon，blue，dark，green，light

## 在线预览

**[题目列表](https://guanpengchn.github.io/presentation/)**

***

- [前端生态简介](https://guanpengchn.github.io/presentation/frontend-intro.html)
- [Raft协议介绍](https://guanpengchn.github.io/presentation/Raft.html)
- [golang调用python](https://guanpengchn.github.io/presentation/golang-python.html)
- [Blochbench Introduction](https://guanpengchn.github.io/presentation/Blockbench.html)
- [工资与五险一金计算](https://guanpengchn.github.io/presentation/Salary-calc.html)

***

## 本地运行

```
$ npm install -g noteppt
$ npm install
// 启动运行
$ npm run dev
// 调试刷新
$ npm run watch
```

## 生成部署

```
$ npm run deploy
```

## 其他

如遇报错`TypeError: Cannot read property '0' of null`，[解决方案](https://github.com/shinnn/gulp-gh-pages/issues/116#issuecomment-342982109)如下

```
cd node_modules/gulp-gh-pages/
npm install --save gift@0.10.2
cd ../../
gulp
```
