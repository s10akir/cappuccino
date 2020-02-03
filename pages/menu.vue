<template>
  <div id="index" :class="{ 'center-vertical': large }" class="app">
    <b-container class="justify-content-center text-center">
      <h1 class="title">menu</h1>
      <h2 class="subtitle">May I help you?</h2>
      <b-row>
        <b-col v-for="item in items" :key="item.id" md="6">
          <!-- TODO: イメージ画像置きたい -->
          <b-card :title="item.title" class="m-1 mb-3">
            <b-card-text>
              {{ item.text }}
            </b-card-text>

            <b-button variant="outline-warning" size="lg" block>BUY</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <!-- TODO: キャラクター画像サイズの統一 -->
    <b-img
      id="chara"
      class="fixed-bottom fixed-right"
      src="~/assets/images/menu_chara.png"
      fluid
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      large: false,
      // TODO: ハードコードせずにモデルに切り出し
      items: [
        {
          title: 'coffee',
          text: 'バリスタアイのコーヒーです。\n一杯50円。'
        },
        {
          title: 'Dolce',
          text: 'ドルチェグストです。\nどのカプセルでも一杯120円。'
        }
      ]
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
    }
  }
}
</script>

<style>
#chara {
  max-height: calc(100vh * 2 / 3);
  z-index: -1;
}

/* TODO: CSS切り出し */
.fixed-right {
  position: fixed;
  left: auto;
  right: 0;
}
</style>
