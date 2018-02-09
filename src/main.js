import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/css/reset.css"
import "./assets/css/demo.styl"
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});