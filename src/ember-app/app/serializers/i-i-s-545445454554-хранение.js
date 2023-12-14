import { Serializer as ХранениеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-545445454554-хранение';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ХранениеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
