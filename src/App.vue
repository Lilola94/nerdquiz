<template>
  <div id="app">
    <div v-if="$store.state.gameState === 'start'" class="has-text-centered">
      <!-- starting with giving player a name-->
      <start-entry></start-entry>
    </div>
    <!-- Title -->
    <div v-else>
      <section class="section">
        <div class="container">
          <h1 class="title is-1 has-text-centered">Nerdquiz</h1>
        </div>
      </section>
      <!-- Players and Table with questions-->
      <section class="section">
        <div class="columns">
          <!-- Player Table with v-for -->
          <player-name-table></player-name-table>
          <!-- Table with questions -->
          <NerdquizTable></NerdquizTable>
        </div>
      </section>
      <!-- Fragestellung -->
      <section class="section">
        <div class="card">
          <div class="container has-text-centered">
            <div class="card-header">
              <div class="card-header-title is-centered">
                {{
                  this.$store.state.QuestionCategory +
                  " " +
                  this.$store.state.QuestionNumber
                }}
                {{
                  this.$store.state.players.find(
                    (player) => player.isActivePlayer == true
                  ).name
                }}
              </div>
            </div>
            <div class="card-container">{{ this.$store.state.Question }}</div>
          </div>
        </div>
      </section>
      <!-- Buzzer & Question -->
      <section>
        <div class="columns">
          <!-- Scorepoints for Players -->
          <div class="column is-half">
            <!-- scrollable -->
            <points-table></points-table>
          </div>
          <answer-buttons> </answer-buttons>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import PlayerNameTable from "@/components/PlayerNameTable";
import NerdquizTable from "@/components/NerdquizTable/NerdquizTable";
import PointsTable from "@/components/PointsTable";
import StartEntry from "@/components/StartEntry";
import AnswerButtons from "./components/AnswerButtons.vue";

export default {
  name: "App",
  components: {
    StartEntry,
    PointsTable,
    NerdquizTable,
    PlayerNameTable,
    AnswerButtons,
  },
  methods: {},
};
</script>

<style>
@import "css/mystyles.css";
</style>
