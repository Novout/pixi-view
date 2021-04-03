import { createI18n } from 'vue-i18n';
import en from './en';
import pt_BR from './pt_BR';

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  legacy: false,
  messages: {
    en,
    pt_BR
  }
});
