import Vue from 'vue';
import Logo from '~/components/Logo.vue';
import Component from 'nuxt-class-component';
import { Getter, Action } from 'vuex-class';

@Component({
  components: {
    Logo
  }
})
export default class extends Vue {
  @Getter('logo/logo') logo: string
  @Action('logo/logoAction') logoAction

  message: string = 'and typescript';

  created() {
    this.logoAction(`example with vuex ${this.message}`);
  }
};