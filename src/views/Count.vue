<template>
  <section>
    <span class="title">{{ $store.state.counter }}</span>
    <button @click="increment">add</button>
    <button @click="decrement">sub</button>
  </section>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
  },
};
</script>
