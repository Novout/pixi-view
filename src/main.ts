import './styles/_reset.css';
import './styles/_preset.css';
import './styles/_components.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faFileUpload, faFolderOpen, faSun } from '@fortawesome/free-solid-svg-icons';
//import { faComment } from "@fortawesome/free-regular-svg-icons";
//import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Splitpanes, Pane } from 'splitpanes';

import App from './App.vue';
import router from './router';
import i18n from './locales';

library.add(faPlus, faFileUpload, faFolderOpen, faSun);

const app = createApp(App);

app.use(i18n);
app.use(createPinia());
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('splitpanes', Splitpanes);
app.component('pane', Pane);

router.isReady().then(() => app.mount('#app'));
