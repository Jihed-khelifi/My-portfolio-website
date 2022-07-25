import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import Header from "./components/layout/AppHeader.vue"
import Footer from "./components/layout/AppFooter.vue"
import About from "./components/about/AppAbout.vue"
import AppHome from "./views/AppHome.vue"
const app = createApp(App)
const pinia = createPinia();
app.use(router)
app.use(pinia)
app.component('AppHeader', Header)
app.component('AppAbout', About)
app.component('AppHome', AppHome)
app.component('AppFooter', Footer)










app.mount("#app")

