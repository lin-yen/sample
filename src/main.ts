import { createApp, Component } from 'vue';
import App from './App.vue';
import router from './router';
import service from './plugins/service';

// Custom Css
import './style.css';

const app = createApp(App as Component);

app.use(router);

app.use(service);

app.mount('#app');
