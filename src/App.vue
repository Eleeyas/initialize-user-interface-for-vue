<template>
  <div id="app">
    <div id="nav">
      <p>{{ $t('aloha') }}</p>
      <!-- <vue-logo /> -->
      <svg-icon
        icon-class="test"
        class="icon"
        color="red"
        width="500px"
        height="500px"
      />
      <div>
        <button @click="switchLocale">{{ $i18n.locale }}</button>
      </div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
// import './icons'
// import VueLogo from './assets/svg/e-commerce-like-heart.svg'
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    // svgIcons
    // VueLogo
  },
  methods: {
    switchLocale() {
      if (this.$i18n.locale === 'th') {
        this.$i18n.locale = 'en'
      } else {
        this.$i18n.locale = 'th'
      }
    }
  }
}
</script>
