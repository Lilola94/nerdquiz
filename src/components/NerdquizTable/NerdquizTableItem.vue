<template>
  <div>
    <thead>
      <tr>
        <th>{{ category }}</th>
      </tr>
    </thead>
    <tr>
      <th>
        <button class="button is-small" @click="QuestionChosen(1)">100</button>
      </th>
    </tr>
    <tr>
      <th>
        <button class="button is-small" @click="QuestionChosen(2)">200</button>
      </th>
    </tr>
    <tr>
      <th>
        <button class="button is-small" @click="QuestionChosen(3)">300</button>
      </th>
    </tr>
    <tr>
      <th>
        <button class="button is-small" @click="QuestionChosen(4)">600</button>
      </th>
    </tr>
    <tr>
      <th>
        <button class="button is-small" @click="QuestionChosen(5)">1000</button>
      </th>
    </tr>
  </div>
</template>

<script>
export default {
  name: "NerdquizTableItem",
  props: ["category", "questions"],
  methods: {
    QuestionChosen: function (number) {
      console.log("QuestionChosen was selected");
      if (this.$store.state.gameState === "QuestionSelected") {
        console.log(
          "Already selected a question. Click on a button whether you can answer question or not "
        );
        return;
      }
      //emitting ( communicating with the parent)
      this.$emit("QuestionChosenTable", this.category, number);
      //commiting to store to register number of category
      this.$store.commit("UPDATE_QUESTIONNUMBER", number);

      this.$el.children[number].firstChild.firstChild.disabled = true;
      //  this.$el.this.$refs.button1.disabled = true;
      console.log(this);
    },
  },
};
</script>

<style scoped></style>
