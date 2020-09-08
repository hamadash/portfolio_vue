<template>
  <v-container fluid>
    <h2 class="content-title">ABOUT</h2>
    <div>
      <table class="mx-auto">
        <tr v-for="(profile, index) in profiles" :key="index">
          <td class="pr-2">
            {{ profile.key }}
          </td>
          <td v-html="profile.value">{{ profile.value }}</td>
        </tr>
      </table>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      profiles: [
        {
          key: "Name",
          value: "Sho",
        },
        {
          key: "University",
          value: "KUT(Kochi University of Technology)",
        },
        {
          key: "GitHub",
          value:
            "<a href='https://github.com/shhmd92' target='_blank' rel='noopener noreferrer'>shhmd92</a>",
        },
        {
          key: "Qiita",
          value:
            "<a href='https://qiita.com/shhmd92' target='_blank' rel='noopener noreferrer'>shhmd92</a>",
        },
        {
          key: "Twitter",
          value: "private(to be public?)",
        },
      ],
    };
  },
};
</script>
