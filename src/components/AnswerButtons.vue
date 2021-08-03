<template>
  <div class="column is-half has-text-centered">
    <button class="button is-rounded is-large is-primary" @click="YesChosen">
      Ja
    </button>
    <button class="button is-rounded is-large is-primary" @click="NoChosen">
      Nein
    </button>
  </div>
</template>

<script>
//
export default {
  name: "AnswerButtons",
  data() {
    return {};
  },
  methods: {
    YesChosen: function () {
      if (this.$store.state.gameState === "Setup") {
        console.log("choose a question first");
        return;
      }
      this.$root.$emit(
        "AskedQuestion",
        this.$store.state.QuestionCategory,
        this.$store.state.QuestionNumber,
        this.$store.state.QuestionScore
      );
      let playerid = this.$store.state.players.find(
        (player) => player.isActivePlayer === true
      ).id;
      console.log("Ja selektiert");
      let payload = {
        PlayerID: playerid,
        scorechange: this.$store.state.QuestionScore,
      };
      console.log(payload);

      this.$store.commit("UPDATE_GAMESSCORE", payload);
      this.$store.commit("UPDATE_GAMESTATE", "Setup");
    },
    NoChosen: function () {
      if (this.$store.state.gameState === "Setup") {
        console.log("choose a question first");
        return;
      }
      this.$root.$emit(
        "AskedQuestion",
        this.$store.state.QuestionCategory,
        this.$store.state.QuestionNumber,
        -this.$store.state.QuestionScore
      );
      let playerid = this.$store.state.players.find(
        (player) => player.isActivePlayer === true
      ).id;
      console.log("Nein selektiert");
      let payload = {
        PlayerID: playerid,
        scorechange: -this.$store.state.QuestionScore,
      };
      this.$store.commit("UPDATE_GAMESSCORE", payload); //negative Points
      console.log("active player changes NoChosen");
      this.$store.commit("UPDATE_ACTIVEPLAYER", playerid);
      this.$store.commit("UPDATE_GAMESTATE", "Setup");
    },
  },
};
</script>

<style scoped>
</style>
