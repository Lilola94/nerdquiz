import Vue from "vue";
import Vuex from "vuex";
import question from "/src/store/Questions.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    players: [
      { id: 0, name: "Jan", score: 0, isActivePlayer: true, farbe: true },
      { id: 1, name: "Benny", score: 0, isActivePlayer: false },
      { id: 2, name: "Markus", score: 0, isActivePlayer: false },
    ],
    gameState: "Setup", //must be start to enable player login
    categories: question,
    QuestionCategory: "Ausgewählte Kategorie",
    QuestionNumber: "100",
    Question: "Hier koennte eine Frage stehen",
    QuestionScore: 0,
    PlayerBefore: [],
  },
  //for changing the state
  mutations: {
    //state, payload in param
    UPDATE_PLAYERNAME: (state, name) => {
      state.gameState = "Setup";
      //add id in players
      state.players.push({
        id: state.players.length,
        name: name,
        score: 0,
        isActivePlayer: false,
      });
    },
    UPDATE_GAMESTATE: (state, string) => {
      state.gameState = string;
    },
    UPDATE_GAMESSCORE: (state, { PlayerID, scorechange }) => {
      let player = state.players.find((player) => player.id == PlayerID);
      player.score = player.score + scorechange;
    },
    UPDATE_QUESTIONSCORE: (state, questionscore) => {
      state.QuestionScore = questionscore;
    },
    //Current Player changes
    UPDATE_ACTIVEPLAYER: (state, activePlayerId) => {
      let player = state.players.find((player) => player.id == activePlayerId);
      player.isActivePlayer = false;
      state.PlayerBefore = player;
      if (activePlayerId === state.players.length - 1) {
        //if the last player fails, the first one becomes active player
        state.players[0].isActivePlayer = true;
      } else {
        state.players[activePlayerId + 1].isActivePlayer = true;
      }
    },
    UPDATE_QUESTIONNUMBER: (state, activequestionnumber) => {
      state.QuestionNumber = activequestionnumber;
    },
  },
  // for calling the mutations for apps
  actions: {
    UpdatePlayerName(context, payload) {
      console.log(payload);
      context.commit("UPDATE_PLAYERNAME", payload);
    },
  },
  modules: {},
});
