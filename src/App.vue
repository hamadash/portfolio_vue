<template>
  <v-app>
    <Header></Header>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from "@/views/Header";
import Footer from "@/views/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
.content-title {
  color: #364e96;
  text-align: center;
  padding: 0.5em 0;
  border-top: solid 3px #364e96;
  border-bottom: solid 3px #364e96;
  margin-bottom: 10px;
}
</style>
