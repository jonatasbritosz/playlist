import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import { routes } from './routes';

//import 'reset.css/reset.css';
import 'primevue/resources/themes/nova-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

Vue.config.productionTip = false

Vue.component('InputText', InputText);
Vue.component('Button', Button);
Vue.component('DataTable', DataTable);
Vue.component('Column', Column);

Vue.use(VueResource);
Vue.use(VueRouter);

const router  = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),   
  router
}).$mount('#app')
