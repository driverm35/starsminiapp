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

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(ToastService);
app.component('Avatar', Avatar);
app.component('Toast', Toast);
app.component('Drawer', Drawer);
app.mount("#app");
