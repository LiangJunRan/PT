// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import './assets/CSS/base.css'
// import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// import './assets/CSS/iconfont.css'
import {
	Row,
	Col,
	Container,
	Aside,
	Main,
	Table,
	TableColumn,
	Pagination,
	Button,
	Select,
	Option
} from 'element-ui'


Vue.config.productionTip = false

Vue.component(Row.name,Row)
Vue.component(Col.name,Col)
Vue.component(Container.name,Container)
Vue.component(Aside.name,Aside)
Vue.component(Main.name,Main)
Vue.component(Table.name,Table)
Vue.component(TableColumn.name,TableColumn)
Vue.component(Pagination.name,Pagination)
Vue.component(Button.name,Button)
Vue.component(Select.name,Select)
Vue.component(Option.name,Option)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components:{
		App,
	},
  template: '<App/>'
})
