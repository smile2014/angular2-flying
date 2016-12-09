# angular2-flying

## 本地环境

```shell
node -v

npm -v
```
Node >= 4
NPM >= 3

[下载node（npm已包含在node中）](https://nodejs.org/zh-cn/)

## 安装及启动

```shell
```

```shell
npm install -g angular-cli@1.0.0-beta.22-1

npm install

npm start
```

## 构建

```shell
npm run build
```

## 语法检测

```shell
npm run lint
```

## 单元测试

```shell
npm test
```

## 场景测试

```shell
npm run e2e
```

## 升级

**如果package.json中的angular-cli版本有变化，则执行以下命令升级：**

```shell
// 先更新全局环境下的angular-cli
npm uninstall -g angular-cli
npm cache clean
npm install -g angular-cli@1.0.0-beta.22-1

// 然后更新项目中的依赖
npm install
```

**如果package.json中的angular-cli版本没有变化，只是其它包依赖变化，则执行以下命令升级：**

```shell
npm install
```

## 插件集成

### angular-cli 

[https://github.com/angular/angular-cli](https://github.com/angular/angular-cli)

### UEditor

了解 [essence-ng2-editor](./src/app/components/essence-ng2-editor/README.md)

去学习 [UEditor](http://ueditor.baidu.com/website/index.html)

### Bootstrap-fileInput

了解 [essence-ng2-fileInput](./src/app/directives/essence-ng2-fileInput/README.md)

去学习 [Bootstrap-fileinput](http://plugins.krajee.com/file-input#installation)

### HighCharts

了解 [essence-ng2-chart](./src/app/directives/essence-ng2-chart/README.md)

去学习 [HighCharts](http://www.hcharts.cn/)

### essence-ng2-checked

了解 [essence-ng2-checked](./src/app/directives/essence-ng2-checked/README.md)

### essence-ng2-esrimap

了解 [essence-ng2-esrimap](./src/app/components/essence-ng2-esrimap/README.md)

去学习 [ArcGIS API for JavaScript 3.18](https://developers.arcgis.com/javascript/3/)
