<template>
  <section>
    <v-container fluid fill-height>
      <v-row class="grey lighten-4" justify="center" align-content="center">
        <v-col>
          <v-card class="lighten-3 ma-2">
            <v-card-title class="justify-center">Language</v-card-title>
            <v-card-text>
              <div class="text--primary">
                <ul>
                  <li>Ruby</li>
                  <li>Java</li>
                  <li>JavaScript</li>
                </ul>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="lighten-3 ma-2">
            <v-card-title class="justify-center">Framework</v-card-title>
            <v-card-text>
              <div class="text--primary">
                <ul>
                  <li>Ruby on Rails</li>
                  <li>Struts</li>
                  <li>Vue.js</li>
                </ul>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="lighten-3 ma-2">
            <v-card-title class="justify-center">Others</v-card-title>
            <v-card-text>
              <div class="text--primary">
                <ul>
                  <li>AWS</li>
                  <li>Oracle</li>
                  <li>MySQL</li>
                </ul>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Skill",
};
</script>
