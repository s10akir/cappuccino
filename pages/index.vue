<template>
  <div id="index" class="app">
    <b-container class="justify-content-center text-center">
      <h1 class="title">cappuccino</h1>
      <h2 class="subtitle">NO COFFEE NO LIFE.</h2>
      <b-button
        v-if="!$store.state.authUser"
        variant="outline-success"
        href="/auth/slack"
        size="lg"
      >
        Login
      </b-button>
      <b-button
        v-if="$store.state.authUser"
        variant="outline-danger"
        href="/auth/logout"
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
  components: {}
}
</script>

<style>
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
