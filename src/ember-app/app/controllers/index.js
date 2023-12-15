import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.постамат.caption'),
          title: i18n.t('forms.application.sitemap.постамат.title'),
          children: [{
            link: 'i-i-s-545445454554-хранение-l',
            caption: i18n.t('forms.application.sitemap.постамат.i-i-s-545445454554-хранение-l.caption'),
            title: i18n.t('forms.application.sitemap.постамат.i-i-s-545445454554-хранение-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-545445454554-постамат-l',
            caption: i18n.t('forms.application.sitemap.постамат.i-i-s-545445454554-постамат-l.caption'),
            title: i18n.t('forms.application.sitemap.постамат.i-i-s-545445454554-постамат-l.title'),
            icon: 'chart line',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.служба-доставки.caption'),
          title: i18n.t('forms.application.sitemap.служба-доставки.title'),
          children: [{
            link: 'i-i-s-545445454554-служба-доставки-l',
            caption: i18n.t('forms.application.sitemap.служба-доставки.i-i-s-545445454554-служба-доставки-l.caption'),
            title: i18n.t('forms.application.sitemap.служба-доставки.i-i-s-545445454554-служба-доставки-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-545445454554-логистика-l',
            caption: i18n.t('forms.application.sitemap.служба-доставки.i-i-s-545445454554-логистика-l.caption'),
            title: i18n.t('forms.application.sitemap.служба-доставки.i-i-s-545445454554-логистика-l.title'),
            icon: 'folder',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.пользователь.caption'),
          title: i18n.t('forms.application.sitemap.пользователь.title'),
          children: [{
            link: 'i-i-s-545445454554-пользователь-l',
            caption: i18n.t('forms.application.sitemap.пользователь.i-i-s-545445454554-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.пользователь.i-i-s-545445454554-пользователь-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-545445454554-ключ-l',
            caption: i18n.t('forms.application.sitemap.пользователь.i-i-s-545445454554-ключ-l.caption'),
            title: i18n.t('forms.application.sitemap.пользователь.i-i-s-545445454554-ключ-l.title'),
            icon: 'list',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.транзакция.caption'),
          title: i18n.t('forms.application.sitemap.транзакция.title'),
          children: [{
            link: 'i-i-s-545445454554-транзакция-l',
            caption: i18n.t('forms.application.sitemap.транзакция.i-i-s-545445454554-транзакция-l.caption'),
            title: i18n.t('forms.application.sitemap.транзакция.i-i-s-545445454554-транзакция-l.title'),
            icon: 'table',
            children: null
          }]
        }
      ]
    };
  }),
})