export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('test', { key: 'test' });
});