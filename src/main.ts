import './assets/reset.css';

import { createApp } from 'vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faFileUpload, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
//import { faComment } from "@fortawesome/free-regular-svg-icons";
//import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Splitpanes, Pane } from 'splitpanes';

import App from './App.vue';
import router from './router';
import store from './store';

library.add(
  faPlus,
  faFileUpload,
  faFolderOpen
);

const app = createApp(App);
app.use(store);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("splitpanes", Splitpanes);
app.component("pane", Pane);

router.isReady().then(() => app.mount('#app'));
