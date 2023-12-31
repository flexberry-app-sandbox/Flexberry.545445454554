import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  номер: DS.attr('number'),
  статус: DS.attr('i-i-s-545445454554-статусы'),
  службаДоставки: DS.belongsTo('i-i-s-545445454554-служба-доставки', { inverse: null, async: false }),
  ячейка: DS.hasMany('i-i-s-545445454554-ячейка', { inverse: 'постамат', async: false })
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-545445454554-постамат.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-545445454554-постамат.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-545445454554-постамат.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  службаДоставки: {
    descriptionKey: 'models.i-i-s-545445454554-постамат.validations.службаДоставки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  ячейка: {
    descriptionKey: 'models.i-i-s-545445454554-постамат.validations.ячейка.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПостаматE', 'i-i-s-545445454554-постамат', {
    номер: attr('Номер', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    статус: attr('Статус', { index: 2 }),
    службаДоставки: belongsTo('i-i-s-545445454554-служба-доставки', 'Служба доставки', {
      наименование: attr('Наименоание', { index: 4 })
    }, { index: 3, displayMemberPath: 'наименвоание' }),
    ячейка: hasMany('i-i-s-545445454554-ячейка', 'Ячейка', {
      номерЯчейки: attr('Номер ячейки', { index: 0 }),
      хранение: belongsTo('i-i-s-545445454554-хранение', 'Дата начала', {
        продления: attr('Продления', { index: 2, hidden: true }),
        датаНачала: attr('Дата начала', { index: 3 }),
        датаЗавершения: attr('Дата завершения ', { index: 4 })
      }, { index: 1, displayMemberPath: 'продления' })
    })
  });

  modelClass.defineProjection('ПостаматL', 'i-i-s-545445454554-постамат', {
    номер: attr('Номер', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    статус: attr('Статус', { index: 2 }),
    службаДоставки: belongsTo('i-i-s-545445454554-служба-доставки', 'Наименование службы доствки', {
      наименование: attr('Наименование службы доствки', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
