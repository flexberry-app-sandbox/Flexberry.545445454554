import {
  defineNamespace,
  defineProjections,
  Model as КлючMixin
} from '../mixins/regenerated/models/i-i-s-545445454554-ключ';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КлючMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
