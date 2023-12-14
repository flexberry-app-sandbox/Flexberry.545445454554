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
          caption: i18n.t('forms.application.sitemap.545445454554.caption'),
          title: i18n.t('forms.application.sitemap.545445454554.title'),
          children: [{
            link: 'i-i-s-545445454554-служба-доставки-l',
            caption: i18n.t('forms.application.sitemap.545445454554.i-i-s-545445454554-служба-доставки-l.caption'),
            title: i18n.t('forms.application.sitemap.545445454554.i-i-s-545445454554-служба-доставки-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-545445454554-хранение-l',
            caption: i18n.t('forms.application.sitemap.545445454554.i-i-s-545445454554-хранение-l.caption'),
            title: i18n.t('forms.application.sitemap.545445454554.i-i-s-545445454554-хранение-l.title'),
            children: null
          }, {
            link: 'i-i-s-545445454554-ключ-l',
            caption: i18n.t('forms.application.sitemap.545445454554.i-i-s-545445454554-ключ-l.caption'),
            title: i18n.t('forms.application.sitemap.545445454554.i-i-s-545445454554-ключ-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-545445454554-логистика-l',
            caption: i18n.t('forms.application.sitemap.545445454554.i-i-s-545445454554-логистика-l.caption'),
            title: i18n.t('forms.application.sitemap.545445454554.i-i-s-545445454554-логистика-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-545445454554-пользователь-l',
            caption: i18n.t('forms.application.sitemap.545445454554.i-i-s-545445454554-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.545445454554.i-i-s-545445454554-пользователь-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-545445454554-транзакция-l',
            caption: i18n.t('forms.application.sitemap.545445454554.i-i-s-545445454554-транзакция-l.caption'),
            title: i18n.t('forms.application.sitemap.545445454554.i-i-s-545445454554-транзакция-l.title'),
            children: null
          }, {
            link: 'i-i-s-545445454554-постамат-l',
            caption: i18n.t('forms.application.sitemap.545445454554.i-i-s-545445454554-постамат-l.caption'),
            title: i18n.t('forms.application.sitemap.545445454554.i-i-s-545445454554-постамат-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})