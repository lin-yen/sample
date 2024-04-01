import { createI18n } from 'vue-i18n';
import { ELanguage } from '@/models/enum/ELanguage';
import enUSJson from './messages/en-US.json';
import zhTWJson from './messages/zh-TW.json';
import zhCNJson from './messages/zh-CN.json';
import koKRJson from './messages/ko-KR.json';

const SUPPORT_LANG = [ELanguage.US, ELanguage.TW, ELanguage.CN, ELanguage.KR];
const defaultLang = ELanguage.US;
const urlParams = new URLSearchParams(window.location.search);
const urlLang = urlParams.get('lang');
let lang = urlLang && urlLang !== '' ? (urlLang as ELanguage) : defaultLang;

if (!SUPPORT_LANG.includes(lang)) {
  lang = defaultLang;
}

const i18n = createI18n({
  locale: lang,
  fallbackLocale: defaultLang,
  legacy: false,
  messages: {
    [ELanguage.US]: enUSJson,
    [ELanguage.TW]: zhTWJson,
    [ELanguage.CN]: zhCNJson,
    [ELanguage.KR]: koKRJson,
  },
});

export default i18n;
