import {
  defineNamespace,
  defineProjections,
  Model as ЛогистикаMixin
} from '../mixins/regenerated/models/i-i-s-545445454554-логистика';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЛогистикаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
