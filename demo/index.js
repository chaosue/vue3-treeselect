import {createApp } from 'vue';

import VueTreeSelect from '../src/components/Treeselect.vue';
import '../styles/style.less';


import App from './demo-app.vue';

createApp(App)
    .component('vue-treeselect',VueTreeSelect)
    .mount('#app');