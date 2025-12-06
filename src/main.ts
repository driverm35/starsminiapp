import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import Drawer from 'primevue/drawer';
import Avatar from 'primevue/avatar';
import ProgressBar from 'primevue/progressbar';
import Splitter from 'primevue/splitter';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(ToastService);
app.component('Avatar', Avatar);
app.component('ProgressBar', ProgressBar);
app.component('Toast', Toast);
app.component('Drawer', Drawer);
app.component('Splitter', Splitter);
app.mount("#app");
