import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-545445454554-ключ-l');
  this.route('i-i-s-545445454554-ключ-e',
  { path: 'i-i-s-545445454554-ключ-e/:id' });
  this.route('i-i-s-545445454554-ключ-e.new',
  { path: 'i-i-s-545445454554-ключ-e/new' });
  this.route('i-i-s-545445454554-логистика-l');
  this.route('i-i-s-545445454554-логистика-e',
  { path: 'i-i-s-545445454554-логистика-e/:id' });
  this.route('i-i-s-545445454554-логистика-e.new',
  { path: 'i-i-s-545445454554-логистика-e/new' });
  this.route('i-i-s-545445454554-пользователь-l');
  this.route('i-i-s-545445454554-пользователь-e',
  { path: 'i-i-s-545445454554-пользователь-e/:id' });
  this.route('i-i-s-545445454554-пользователь-e.new',
  { path: 'i-i-s-545445454554-пользователь-e/new' });
  this.route('i-i-s-545445454554-постамат-l');
  this.route('i-i-s-545445454554-постамат-e',
  { path: 'i-i-s-545445454554-постамат-e/:id' });
  this.route('i-i-s-545445454554-постамат-e.new',
  { path: 'i-i-s-545445454554-постамат-e/new' });
  this.route('i-i-s-545445454554-служба-доставки-l');
  this.route('i-i-s-545445454554-служба-доставки-e',
  { path: 'i-i-s-545445454554-служба-доставки-e/:id' });
  this.route('i-i-s-545445454554-служба-доставки-e.new',
  { path: 'i-i-s-545445454554-служба-доставки-e/new' });
  this.route('i-i-s-545445454554-транзакция-l');
  this.route('i-i-s-545445454554-транзакция-e',
  { path: 'i-i-s-545445454554-транзакция-e/:id' });
  this.route('i-i-s-545445454554-транзакция-e.new',
  { path: 'i-i-s-545445454554-транзакция-e/new' });
  this.route('i-i-s-545445454554-хранение-l');
  this.route('i-i-s-545445454554-хранение-e',
  { path: 'i-i-s-545445454554-хранение-e/:id' });
  this.route('i-i-s-545445454554-хранение-e.new',
  { path: 'i-i-s-545445454554-хранение-e/new' });
});

export default Router;
