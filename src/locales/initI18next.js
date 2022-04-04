import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './index.js';

const DEFAULT_LOCALE = 'ru';

const i18instance = i18n.createInstance();

i18instance
  .use(initReactI18next)
  .init({
    resources,
    lng: DEFAULT_LOCALE,
  });

export default i18instance;
