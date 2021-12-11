import Vue from 'vue';

import Entry from '@/Entry.vue'
import router from '@/router'

import VueFormly from 'vue-formly';
import VueFormlyBootstrap from 'vue-formly-bootstrap';
import VueUploadImgs from 'vue-upload-imgs'
Vue.use(VueUploadImgs)

Vue.use(VueFormly);
Vue.use(VueFormlyBootstrap);

new Vue({
  router,
  render: h => h(Entry)
}).$mount('#entry')
