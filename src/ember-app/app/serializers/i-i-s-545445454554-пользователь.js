import { Serializer as ПользовательSerializer } from
  '../mixins/regenerated/serializers/i-i-s-545445454554-пользователь';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПользовательSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
