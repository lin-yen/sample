import { ICookieService } from 'src/models/service/ICookieService';
import { inject } from 'vue';

export function useService() {
  return {
    cookie: inject('cookie') as ICookieService,
  };
}
