import Vue from 'vue';
import Router from 'vue-router';

import Hello from '@components/Hello/index.vue';
import Test from '@components/test/index.vue';
import NotFound from '@components/NotFound/index.vue';

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/test',
            name: 'Test',
            component: Test
        },
        { 
            path: '*', 
            component: NotFound 
        }
    ]
});
export default router;