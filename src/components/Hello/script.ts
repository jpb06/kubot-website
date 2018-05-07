import Vue from 'vue';

export default Vue.extend({
  name: 'Hello',
  props: {
    name: {
      type: String,
      required: true
    }
  }
});