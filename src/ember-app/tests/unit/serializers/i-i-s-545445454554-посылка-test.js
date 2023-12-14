import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-545445454554-посылка', 'Unit | Serializer | i-i-s-545445454554-посылка', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-545445454554-посылка',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-545445454554-оплата',
    'transform:i-i-s-545445454554-состояние',
    'transform:i-i-s-545445454554-статус',
    'transform:i-i-s-545445454554-статусы',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
