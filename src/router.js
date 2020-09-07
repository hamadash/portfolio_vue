import Vue from "vue";
import Router from "vue-router";

const Top = () => import(/* webpackChunkName: "Top" */ "./views/Top.vue");
const About = () => import(/* webpackChunkName: "About" */ "./views/About.vue");
const Skill = () => import(/* webpackChunkName: "Skill" */ "./views/Skill.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Top",
      component: Top,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/skill",
      name: "Skill",
      component: Skill,
    },
  ],
});
