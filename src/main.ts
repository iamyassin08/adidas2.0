import './style.css'
import "preline/preline";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";





const renderApp = () => {
  const app = createApp(App);

  

  app.use(router);
  app.mount("#app");
};
renderApp();
