<template>
  <div>
    <input
      v-model="PlayerNameAppComponent"
      :placeholder="Placeholder"
      v-on:keyup.enter="NameEntered"
    />
    <button @click="NameEntered" class="button">Ready</button>
  </div>
</template>

<script>
export default {
  name: "StartEntry",
  data() {
    return {
      PlayerNameAppComponent: "",
      Placeholder: "Please type in your name!",
    };
  },
  methods: {
    NameEntered() {
      if (this.PlayerNameAppComponent === "") {
        console.log("Enter User Name!");
        this.Placeholder = "your name!";
      } else {
        this.$store.dispatch("UpdatePlayerName", this.PlayerNameAppComponent);
      }
    },
  },
};
</script>

<style scoped></style>
