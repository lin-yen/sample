import { App } from 'vue';
import CookieService from 'src/service/cookie.service';

const cookie = new CookieService();

export default {
  install: (app: App) => {
    app.provide('cookie', cookie);
  },
};
