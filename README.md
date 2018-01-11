## 一个简单的nunjuck的解析器

### 插件目的
使html-webpack-plugin 中的模版 可以使用 nunjucks 并且使用其完整的api

### 使用方式
改解析器，非常简单，因此需要配合 `html-loader` 才能完成工作, 示例代码如下

```javascript
// webpack.config.js  module 配置
// njk loader
{
  test: /\.njk$/,
  use: [
    {
      loader: 'html-loader',
      options: {
        minimize: true
      }
    },
    {
      loader: 'njk-loader',
      options:{
        precompile:false, // 是否只是进行预编译, TODO: 暂时未完成
        global:{        // 设置全局变量， 模版中 通过 {{njk_global.name}} 进行访问
          name:'12321'
        }
      }
    }
  ]
}

```
### 说明
在进行单页面开发的时候，这个loader并不实用，但是在做多页面的时候，借助 nunjucks 可以很好的实现 html模版的功能抽取,另外 nunjucks是一个非常棒的模版引擎

### 安装
```bash
npm install njk-loader 
```
