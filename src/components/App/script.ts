import Vue from 'vue';
import 'vue-material-design-icons/styles.css';

import 'bulma/css/bulma.css';

import SettingsBox from '@icons/settings-box.vue';

export default Vue.extend({
    data: () => {
        return {
            title: 'Some title',
            navIsActive: false
        };
    },
    components: {
        SettingsBox
    },
    methods: {
        toggleMenu: function () {
            this.navIsActive = !this.navIsActive
        }
    }
});