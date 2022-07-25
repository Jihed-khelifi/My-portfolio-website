import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/AppHome.vue";
import Contact from "../views/AppContact.vue"
import About from "../components/about/AppAbout.vue"
import MyWork from "../views/MyWork.vue"
import Articles from "../views/AppArticles.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/projects",
    name: "Projects",
    component: MyWork
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/articles",
    name: "Articles",
    component: Articles,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
