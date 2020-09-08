<template>
  <v-container fluid>
    <h2 class="content-title">SKILL</h2>
    <v-row class="grey lighten-4" justify="center" align-content="center">
      <v-col v-for="(skill, index) in skills" :key="index">
        <v-card class="lighten-3 ma-2">
          <v-card-title class="justify-center">{{ skill.label }}</v-card-title>
          <v-card-text>
            <div class="text--primary">
              <ul>
                <li v-for="(skillItem, index) in skill.item" :key="index">
                  {{ skillItem }}
                </li>
              </ul>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Skill",
  data() {
    return {
      skills: [
        {
          label: "Language",
          item: ["Ruby", "Java", "JavaScript"],
        },
        {
          label: "Framework",
          item: ["Ruby on Rails", "Struts", "Vue.js"],
        },
        {
          label: "Others",
          item: ["Git", "GitHub", "AWS", "Oracle", "MySQL"],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0px;

  li {
    box-sizing: border-box;
    padding: 15px;
    text-align: center;
    min-width: 50%;

    &:nth-child(odd) {
      background-color: #eef;
    }

    &:nth-child(even) {
      background-color: #fee;
    }
  }
}
</style>
