import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  статус: DS.attr('i-i-s-545445454554-статус'),
  ключ: DS.belongsTo('i-i-s-545445454554-ключ', { inverse: null, async: false }),
  логистика: DS.belongsTo('i-i-s-545445454554-логистика', { inverse: null, async: false }),
  транзакция: DS.belongsTo('i-i-s-545445454554-транзакция', { inverse: null, async: false }),
  хранение: DS.belongsTo('i-i-s-545445454554-хранение', { inverse: 'посылка', async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-545445454554-посылка.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-545445454554-посылка.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ключ: {
    descriptionKey: 'models.i-i-s-545445454554-посылка.validations.ключ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  логистика: {
    descriptionKey: 'models.i-i-s-545445454554-посылка.validations.логистика.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  транзакция: {
    descriptionKey: 'models.i-i-s-545445454554-посылка.validations.транзакция.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  хранение: {
    descriptionKey: 'models.i-i-s-545445454554-посылка.validations.хранение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПосылкаE', 'i-i-s-545445454554-посылка', {
    номер: attr('Номер', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    транзакция: belongsTo('i-i-s-545445454554-транзакция', 'Транзакция', {
      время: attr('Время транзакции', { index: 3, hidden: true }),
      дата: attr('Дата транзакции', { index: 4 }),
      номер: attr('Номер транзакции', { index: 5 }),
      пользователь: belongsTo('i-i-s-545445454554-пользователь', '', {
        фИО: attr('ФИО пользователь', { index: 6 })
      }, { index: -1, hidden: true })
    }, { index: 2, displayMemberPath: 'время' }),
    логистика: belongsTo('i-i-s-545445454554-логистика', 'Логистика', {
      информация: attr('Информация о посылке', { index: 8 }),
      состояние: attr('Состояние посылки', { index: 9 })
    }, { index: 7, displayMemberPath: 'информация' }),
    ключ: belongsTo('i-i-s-545445454554-ключ', 'Сгенерированный код', {
      сгенКлюч: attr('Сгенерированный код', { index: 11, hidden: true })
    }, { index: 10, displayMemberPath: 'сгенКлюч' })
  });
};
