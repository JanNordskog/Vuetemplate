<template>
  <div id="app">
    <HeaderNav />
    <main>
      <router-view></router-view>
    </main>
    <FooterNav />
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue';
import FooterNav from './components/FooterNav.vue';

export default {
  name: 'App',
  components: {
    HeaderNav,
    FooterNav,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: 1rem;
}
</style>
