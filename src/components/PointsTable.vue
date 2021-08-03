<template>
  <div class="table-container column">
    <table class="table has-text-centered is-one-fifth">
      <thead>
        <tr>
          <th>Spieler</th>
          <th>Punktzahl</th>
          <!--Soviele items wie es vorherige Kategorien gab -->
          <th v-for="categories in askedQuestions" :key="categories.uniqueid">
            {{ categories.Category + " " + categories.Number }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Jan</th>
          <th>{{ this.$store.state.players[0].score }}</th>
          <th v-for="points in janpoints" :key="points.id">
            {{ points.score }}
          </th>
        </tr>
        <tr>
          <th>Benny</th>
          <th>{{ this.$store.state.players[1].score }}</th>
          <th v-for="points in bennypoints" :key="points.id">
            {{ points.score }}
          </th>
        </tr>
        <tr>
          <th>Markus</th>
          <th>{{ this.$store.state.players[2].score }}</th>
          <th v-for="points in markuspoints" :key="points.id">
            {{ points.score }}
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "PointsTable",
  mounted() {
    this.$root.$on("AskedQuestion", (Category, Number, questionscore) => {
      let uniqueid = this.id;
      let selectedplayer = this.$store.state.players.find(
        (player) => player.isActivePlayer === true
      );
      console.log("Angekommen in der Points table ist" + Category + Number);
      console.log(selectedplayer);
      this.askedQuestions.push({
        Category,
        Number,
        uniqueid,
        selectedplayer,
        questionscore,
      });
      this.id++;
    });
  },
  data: function () {
    return {
      askedQuestions: [],
      id: 0,
    };
  },
  computed: {
    janpoints: function () {
      let playerpoints = [];
      for (var i = 0; i < this.askedQuestions.length; i++) {
        if (this.askedQuestions[i].selectedplayer.id === 0) {
          playerpoints.push({
            score: this.askedQuestions[i].questionscore,
            id: i,
          });
        } else {
          playerpoints.push({ score: 0, id: i });
        }
      }
      return playerpoints;
    },

    bennypoints: function () {
      let playerpoints = [];
      for (var i = 0; i < this.askedQuestions.length; i++) {
        if (this.askedQuestions[i].selectedplayer.id === 1) {
          playerpoints.push({
            score: this.askedQuestions[i].questionscore,
            id: i,
          });
        } else {
          playerpoints.push({ score: 0, id: i });
        }
      }
      return playerpoints;
    },
    markuspoints: function () {
      let playerpoints = [];
      for (var i = 0; i < this.askedQuestions.length; i++) {
        if (this.askedQuestions[i].selectedplayer.id === 2) {
          playerpoints.push({
            score: this.askedQuestions[i].questionscore,
            id: i,
          });
        } else {
          playerpoints.push({ score: 0, id: i });
        }
      }
      return playerpoints;
    },
  },
};
</script>

<style scoped></style>
