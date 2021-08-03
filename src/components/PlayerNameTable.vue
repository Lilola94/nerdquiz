<template>
  <div class="column">
    <!-- Players Name / Buzzer -->
    <table class="table has-text-centered is-one-fifth">
      <thead>
        <tr>
          <th>Player Names</th>
        </tr>
      </thead>
      <div
        :class="{ myclass: player.farbe }"
        v-for="player in $store.state.players"
        :key="player.id"
      >
        <tr>
          <th>
            {{ player.name }}
          </th>
        </tr>
      </div>
    </table>
  </div>
</template>

<script>
export default {
  name: "PlayerNameTable",
  data() {
    return {
      styleObject: {
        playercolor: "red",
        fontSize: "50px",
      },
    };
  },
  methods: {},
};
</script>

<style scoped></style>
