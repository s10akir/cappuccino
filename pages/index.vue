<template>
  <div class="container">
    <div>
      <b-img-lazy
        id="chara"
        class="fixed-bottom"
        src="~/assets/images/top_chara.png"
        fluid
      />
      <h1 class="title">
        cappuccino
      </h1>
      <h2 class="subtitle">
        NO COFFEE NO LIFE.
      </h2>
      <div class="links">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

#chara {
  z-index: -1;
}
</style>
