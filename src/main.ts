import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Quasar, Notify } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import { createPinia, setMapStoreSuffix } from "pinia";
import {notesStore} from "../src/views/note/store/notestore";

setMapStoreSuffix('');
const pinia = createPinia();
createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(router)
  .use(pinia)
  .mount("#app");
