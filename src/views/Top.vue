<template>
  <section class="hero">
    <v-container fluid fill-height class="hero__content">
      <v-row>
        <v-col class="hero__content-text">
          <p>Welcome to my website.</p>
          <p>I'm a Web Developer.</p>
          <a
            href="https://github.com/shhmd92"
            target="_blank"
            rel="noopener noreferrer"
          >
            <font-awesome-icon :icon="['fab', 'github-square']" />
          </a>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Top",
};
</script>

<style lang="scss" scoped>
a {
  color: white;
}

.hero__content {
  background: url("../assets/img/top.png");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 50vh;

  @include display_pc {
    height: 100vh;
  }

  &-text {
    color: white;
    text-align: center;
    font-size: 28px;
    font-weight: bold;

    @include display_pc {
      font-size: 40px;
    }
  }
}
</style>
