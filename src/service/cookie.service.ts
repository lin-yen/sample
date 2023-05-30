import { ICookieService } from 'src/models/service/ICookieService';

export default class CookieService implements ICookieService {
  // NOTE: 因安全性問題 iframe 無法存取 cookie，在此暫存資料，確保我們被 iframe 掛載時也可正常使用
  private cookieStorage = new Map();

  set(key: string, value: string, expires?: Date): void {
    let cookieValue = `${key}=${value};path=/`;

    if (expires) {
      cookieValue += `;expires=${expires.toUTCString()}`;
    }

    // NOTE: 允許第三方跨域請求可使用 cookie
    // if (window.location.protocol === 'https:') {
    //   cookieValue += ';SameSite=None; Secure';
    // }

    document.cookie = cookieValue;

    this.cookieStorage.set(key, String(value));
  }

  get(key: string): string {
    const decodedCookie: string = decodeURIComponent(document.cookie);
    const pairs: string[] = decodedCookie.split(/;\s*/);

    const prefix = `${key}=`;
    for (const pair of pairs) {
      if (pair.indexOf(prefix) === 0 && pair !== prefix) {
        return pair.substring(prefix.length);
      }
    }

    if (this.cookieStorage.get(key)) {
      return this.cookieStorage.get(key) as string;
    }

    return '';
  }

  delete(key: string): void {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}
