import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import microApp from "@micro-zoe/micro-app";

microApp.start({
  preFetchApps: [
    {
      name: "thor",
      url: "http://localhost:9001/",
    },
    {
      name: "loki",
      url: "http://localhost:9002/",
      disableScopecss: true,
    },
  ],
  //   disableScopecss: true,
});

createApp(App).use(store).use(router).mount("#app");
