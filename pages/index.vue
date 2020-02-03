<template>
  <div id="index" :class="{ 'center-vertical': large }" class="app">
    <b-container class="justify-content-center text-center">
      <h1 class="title">cappuccino</h1>
      <h2 class="subtitle">NO COFFEE NO LIFE.</h2>
      <p v-if="$store.state.auth.user">
        Welcome back, {{ $store.state.auth.user.name }} !
      </p>
      <b-button
        v-if="!$store.state.auth.user"
        @click="login"
        variant="outline-success"
        size="lg"
      >
        Login
      </b-button>
      <b-button
        v-if="$store.state.auth.user"
        @click="logout"
        variant="outline-danger"
        size="lg"
      >
        Logout
      </b-button>
    </b-container>
    <b-img-lazy
      id="chara"
      class="fixed-bottom"
      src="~/assets/images/top_chara.png"
      fluid
    />
  </div>
</template>

<script>
export default {
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

<style>
.center-vertical {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

#chara {
  z-index: -1;
}
</style>
