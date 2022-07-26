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
    meta: {
      title: "Jihed Khelifi Full-Stack Web Developer"
    }
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      title: "Contact Me"
    }
  },
  {
    path: "/projects",
    name: "Projects",
    component: MyWork,
    meta: {
      title: "Under Construction"
    }
  },
  {
    path: "/articles",
    name: "Articles",
    component: Articles,
    meta: {
      title: "Under Construction"
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
}
);

export default router;
