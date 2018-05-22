declare module '*.vue' {
  import Vue from 'vue';
  let vueType: typeof Vue;
  
  export default vueType;
}
