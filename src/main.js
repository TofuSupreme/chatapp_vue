import { createApp } from 'vue'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faUserCircle, faUser } from "@fortawesome/free-solid-svg-icons";

library.add(faPhone, faUserCircle, faUser)
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
