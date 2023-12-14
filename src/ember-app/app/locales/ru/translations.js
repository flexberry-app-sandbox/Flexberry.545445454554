import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': '545445454554',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '545445454554',
          title: '545445454554'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
