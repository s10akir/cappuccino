<template>
  <div id="index" :class="{ 'center-vertical': large }" class="app">
    <b-container class="justify-content-center text-center">
      <h1 class="title">cappuccino</h1>
      <h2 class="subtitle">NO COFFEE NO LIFE.</h2>
      <b-button
        v-if="!$store.state.auth.user"
        @click="login"
        variant="outline-success"
        size="lg"
      >
        Login
      </b-button>
      <div v-if="$store.state.auth.user" class="d-inline-flex flex-column">
        <p>Welcome back, {{ $store.state.auth.user.name }} !</p>
        <b-button class="m-1" variant="outline-success" size="lg" to="menu">
          Menu
        </b-button>
        <b-button
          v-if="$store.state.auth.user"
          @click="logout"
          class="m-1"
          variant="outline-danger"
          size="lg"
        >
          Logout
        </b-button>
      </div>
    </b-container>
    <b-img
      id="chara"
      class="fixed-bottom"
      src="~/assets/images/top_chara.png"
      fluid
    />
  </div>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      large: false
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.large = window.innerWidth >= 1200
    },
    login() {
      this.$auth.loginWith('google')
    },
    logout() {
      this.$auth.logout()
    }
  }
}
</script>

<style scoped>
#chara {
  z-index: -1;
}
</style>
