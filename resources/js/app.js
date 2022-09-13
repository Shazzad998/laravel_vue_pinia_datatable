import { createApp } from "vue";
import "./bootstrap";
import App from "./pages/App.vue";
import router from "./router";
import VueClickAwayPlugin from "vue3-click-away";
import { createPinia } from "pinia";

const app = createApp(App);

const pinia = createPinia();

app.use(VueClickAwayPlugin);
app.use(pinia);
app.use(router);
app.mount("#app");
