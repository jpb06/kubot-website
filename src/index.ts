import Vue from 'vue';
import Router from '@/router';

import App from '@components/App/index.vue';

new Vue({
    el: '#app',
    router: Router,
    template: '<App/>',
    components: { App }
});