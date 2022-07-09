import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Header from "./components/AppHeader.vue"
import Footer from "./components/AppFooter.vue"
import About from "./components/AppAbout.vue"
const app = createApp(App)
app.use(router)
app.component('AppHeader', Header)
app.component('AppAbout', About)
app.component('AppFooter', Footer)










app.mount("#app")

