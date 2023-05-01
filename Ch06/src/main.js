import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index.js";

const app = createApp(App);

// vuex 전역 스토어 사용 -> App.vue에서 사용 가능
app.use(store);

app.mount("#app");
