<template>
  <div class="column">
    <table class="table has-text-centered is-four-fifths">
      <tbody>
        <th>
          <NerdquizTableItem
            :questions="Questions(0)"
            :category="SingleCategory(0)"
            v-on:QuestionChosenTable="QuestionChosenTable"
          ></NerdquizTableItem>
        </th>
        <th>
          <NerdquizTableItem
            :questions="Questions(1)"
            :category="SingleCategory(1)"
            v-on:QuestionChosenTable="QuestionChosenTable"
          ></NerdquizTableItem>
        </th>
        <th>
          <NerdquizTableItem
            :questions="Questions(2)"
            :category="SingleCategory(2)"
            v-on:QuestionChosenTable="QuestionChosenTable"
          ></NerdquizTableItem>
        </th>
        <th>
          <NerdquizTableItem
            :questions="Questions(3)"
            :category="SingleCategory(3)"
            v-on:QuestionChosenTable="QuestionChosenTable"
          ></NerdquizTableItem>
        </th>
        <th>
          <NerdquizTableItem
            :questions="Questions(4)"
            :category="SingleCategory(4)"
            v-on:QuestionChosenTable="QuestionChosenTable"
          ></NerdquizTableItem>
        </th>
      </tbody>
    </table>
  </div>
</template>

<script>
import NerdquizTableItem from "@/components/NerdquizTable/NerdquizTableItem";
export default {
  name: "NerdquizTable",
  components: { NerdquizTableItem },
  data() {
    return {
      categories: this.$store.state.categories.categories[0],
    };
  },
  methods: {
    SingleCategory: function (number) {
      let keys = Object.keys(this.categories);
      return keys[number];
    },
    Questions: function (number) {
      return this.categories[this.SingleCategory(number)];
    },
    QuestionChosenTable: function (Category, Number) {
      console.log("hier bin ich " + Category, Number);
      //change Questions and QuestionCategory
      this.$store.state.QuestionCategory = Category;
      this.$store.state.Question = this.categories[Category][Number - 1];
      this.$store.commit("UPDATE_GAMESTATE", "QuestionSelected");

      let questionscore = 0;
      //QuestionScore abändern
      if (Number == 1) {
        questionscore = 100;
      }
      if (Number == 2) {
        questionscore = 200;
      }
      if (Number == 3) {
        questionscore = 300;
      }
      if (Number == 4) {
        questionscore = 600;
      }
      if (Number == 5) {
        questionscore = 1000;
      }
      this.$store.commit("UPDATE_QUESTIONSCORE", questionscore);
    },
  },
};
</script>

<style scoped></style>
