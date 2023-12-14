import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-545445454554-ячейка', 'Unit | Model | i-i-s-545445454554-ячейка', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-545445454554-ключ',
    'model:i-i-s-545445454554-логистика',
    'model:i-i-s-545445454554-пользователь',
    'model:i-i-s-545445454554-постамат',
    'model:i-i-s-545445454554-посылка',
    'model:i-i-s-545445454554-служба-доставки',
    'model:i-i-s-545445454554-транзакция',
    'model:i-i-s-545445454554-хранение',
    'model:i-i-s-545445454554-ячейка',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
