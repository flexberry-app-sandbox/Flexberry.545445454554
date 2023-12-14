import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IIS545445454554КлючLForm from './forms/i-i-s-545445454554-ключ-l';
import IIS545445454554ЛогистикаLForm from './forms/i-i-s-545445454554-логистика-l';
import IIS545445454554ПользовательLForm from './forms/i-i-s-545445454554-пользователь-l';
import IIS545445454554ПостаматLForm from './forms/i-i-s-545445454554-постамат-l';
import IIS545445454554СлужбаДоставкиLForm from './forms/i-i-s-545445454554-служба-доставки-l';
import IIS545445454554ТранзакцияLForm from './forms/i-i-s-545445454554-транзакция-l';
import IIS545445454554ХранениеLForm from './forms/i-i-s-545445454554-хранение-l';
import IIS545445454554КлючEForm from './forms/i-i-s-545445454554-ключ-e';
import IIS545445454554ЛогистикаEForm from './forms/i-i-s-545445454554-логистика-e';
import IIS545445454554ПользовательEForm from './forms/i-i-s-545445454554-пользователь-e';
import IIS545445454554ПостаматEForm from './forms/i-i-s-545445454554-постамат-e';
import IIS545445454554СлужбаДоставкиEForm from './forms/i-i-s-545445454554-служба-доставки-e';
import IIS545445454554ТранзакцияEForm from './forms/i-i-s-545445454554-транзакция-e';
import IIS545445454554ХранениеEForm from './forms/i-i-s-545445454554-хранение-e';
import IIS545445454554КлючModel from './models/i-i-s-545445454554-ключ';
import IIS545445454554ЛогистикаModel from './models/i-i-s-545445454554-логистика';
import IIS545445454554ПользовательModel from './models/i-i-s-545445454554-пользователь';
import IIS545445454554ПостаматModel from './models/i-i-s-545445454554-постамат';
import IIS545445454554ПосылкаModel from './models/i-i-s-545445454554-посылка';
import IIS545445454554СлужбаДоставкиModel from './models/i-i-s-545445454554-служба-доставки';
import IIS545445454554ТранзакцияModel from './models/i-i-s-545445454554-транзакция';
import IIS545445454554ХранениеModel from './models/i-i-s-545445454554-хранение';
import IIS545445454554ЯчейкаModel from './models/i-i-s-545445454554-ячейка';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-545445454554-ключ': IIS545445454554КлючModel,
    'i-i-s-545445454554-логистика': IIS545445454554ЛогистикаModel,
    'i-i-s-545445454554-пользователь': IIS545445454554ПользовательModel,
    'i-i-s-545445454554-постамат': IIS545445454554ПостаматModel,
    'i-i-s-545445454554-посылка': IIS545445454554ПосылкаModel,
    'i-i-s-545445454554-служба-доставки': IIS545445454554СлужбаДоставкиModel,
    'i-i-s-545445454554-транзакция': IIS545445454554ТранзакцияModel,
    'i-i-s-545445454554-хранение': IIS545445454554ХранениеModel,
    'i-i-s-545445454554-ячейка': IIS545445454554ЯчейкаModel
  },

  'application-name': '545445454554',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': '545445454554',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '545445454554',
          title: '545445454554'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        545445454554: {
          caption: '545445454554',
          title: '545445454554',
          'i-i-s-545445454554-служба-доставки-l': {
            caption: 'Служба доставки',
            title: ''
          },
          'i-i-s-545445454554-хранение-l': {
            caption: 'Хранение',
            title: ''
          },
          'i-i-s-545445454554-ключ-l': {
            caption: 'Ключ',
            title: ''
          },
          'i-i-s-545445454554-логистика-l': {
            caption: 'Логистика',
            title: ''
          },
          'i-i-s-545445454554-пользователь-l': {
            caption: 'Пользователь',
            title: ''
          },
          'i-i-s-545445454554-транзакция-l': {
            caption: 'Транзакция',
            title: ''
          },
          'i-i-s-545445454554-постамат-l': {
            caption: 'Постамат',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-545445454554-ключ-l': IIS545445454554КлючLForm,
    'i-i-s-545445454554-логистика-l': IIS545445454554ЛогистикаLForm,
    'i-i-s-545445454554-пользователь-l': IIS545445454554ПользовательLForm,
    'i-i-s-545445454554-постамат-l': IIS545445454554ПостаматLForm,
    'i-i-s-545445454554-служба-доставки-l': IIS545445454554СлужбаДоставкиLForm,
    'i-i-s-545445454554-транзакция-l': IIS545445454554ТранзакцияLForm,
    'i-i-s-545445454554-хранение-l': IIS545445454554ХранениеLForm,
    'i-i-s-545445454554-ключ-e': IIS545445454554КлючEForm,
    'i-i-s-545445454554-логистика-e': IIS545445454554ЛогистикаEForm,
    'i-i-s-545445454554-пользователь-e': IIS545445454554ПользовательEForm,
    'i-i-s-545445454554-постамат-e': IIS545445454554ПостаматEForm,
    'i-i-s-545445454554-служба-доставки-e': IIS545445454554СлужбаДоставкиEForm,
    'i-i-s-545445454554-транзакция-e': IIS545445454554ТранзакцияEForm,
    'i-i-s-545445454554-хранение-e': IIS545445454554ХранениеEForm
  },

});

export default translations;
