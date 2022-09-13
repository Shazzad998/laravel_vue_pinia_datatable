import { createApp } from "vue";
import "./bootstrap";
import App from "./pages/App.vue";
import router from "./router";
import VueClickAwayPlugin from "vue3-click-away";

const app = createApp(App);

app.use(VueClickAwayPlugin);
app.use(router);
app.mount("#app");
