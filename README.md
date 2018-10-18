# vue_formal

> 医养平台

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 需要加入插件

``` bash

# vuex
npm install vuex --save

# axios
npm install axios --save

# swiper  
//下载
npm install swiper --save

//引入swiper
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

//在mounted中初始化swiper
new Swiper('.swiper-container-new1',{
	direction:'horizontal',
	slidesPerView: 1,
});

# element-ui
npm i element-ui -S

//按需引入
npm install babel-plugin-component -D 

# jQuery
npm install jquery
main.js中引用import $ from 'jquery'

# bootstrap
npm install bootstrap

# vue-bootstrap-table
npm install vue2-bootstrap-table2



```
