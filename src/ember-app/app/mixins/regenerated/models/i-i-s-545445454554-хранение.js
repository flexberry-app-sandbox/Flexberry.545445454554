import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗавершения: DS.attr('date'),
  датаНачала: DS.attr('date'),
  номер: DS.attr('number'),
  продления: DS.attr('string'),
  посылка: DS.hasMany('i-i-s-545445454554-посылка', { inverse: 'хранение', async: false })
});

export let ValidationRules = {
  датаЗавершения: {
    descriptionKey: 'models.i-i-s-545445454554-хранение.validations.датаЗавершения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаНачала: {
    descriptionKey: 'models.i-i-s-545445454554-хранение.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-545445454554-хранение.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  продления: {
    descriptionKey: 'models.i-i-s-545445454554-хранение.validations.продления.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  посылка: {
    descriptionKey: 'models.i-i-s-545445454554-хранение.validations.посылка.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ХранениеE', 'i-i-s-545445454554-хранение', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаЗавершения: attr('Дата завершения', { index: 2 }),
    продления: attr('Продления', { index: 3 }),
    посылка: hasMany('i-i-s-545445454554-посылка', 'Посылка', {
      номер: attr('Номер', { index: 0 }),
      статус: attr('Статус', { index: 1 }),
      транзакция: belongsTo('i-i-s-545445454554-транзакция', 'Транзакция', {
        дата: attr('Дата транзакции', { index: 3 }),
        время: attr('Время', { index: 4, hidden: true }),
        номер: attr('Номер транзакции', { index: 5 }),
        пользователь: belongsTo('i-i-s-545445454554-пользователь', '', {
          фИО: attr('ФИО пользователь', { index: 6 })
        }, { index: -1, hidden: true })
      }, { index: 2, displayMemberPath: 'время' }),
      логистика: belongsTo('i-i-s-545445454554-логистика', 'Логистика', {
        состояние: attr('Состояние', { index: 8 }),
        информация: attr('Информация', { index: 9, hidden: true })
      }, { index: 7, displayMemberPath: 'информация' }),
      ключ: belongsTo('i-i-s-545445454554-ключ', 'Ключ', {
        сгенКлюч: attr('Сген ключ', { index: 11, hidden: true })
      }, { index: 10, displayMemberPath: 'сгенКлюч' })
    })
  });

  modelClass.defineProjection('ХранениеL', 'i-i-s-545445454554-хранение', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаЗавершения: attr('Дата завершения', { index: 2 }),
    продления: attr('Продления', { index: 3 })
  });
};
