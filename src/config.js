/**
 * Add your config changes here.
 * @module config
 * @example
 * export default function applyConfig(config) {
 *   config.settings = {
 *     ...config.settings,
 *     port: 4300,
 * }
 */

// All your imports required for the config here BEFORE this line

import { CustomCSS } from '@package/components';
import { SiteBlocks } from '@package/config/Blocks';
import { SiteWidgets } from '@package/config/Widgets';
import { SiteViews } from '@package/config/Views';
import applyRichTextConfig from '@package/config/RichTextEditor/config';
import applyAccordionConfig from '@package/config/Accordion/config';

import {
  config as faConfig,
  dom as faDom,
  library,
} from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/pro-solid-svg-icons';
import * as IconsRegular from '@fortawesome/pro-regular-svg-icons';
import * as IconsDuotone from '@fortawesome/pro-duotone-svg-icons';
import * as IconsLight from '@fortawesome/pro-light-svg-icons';

import '@plone/volto/config';

faConfig.autoAddCss = false;
const iconList = Object.keys(Icons.fas).map((icon) => Icons[icon]);
const iconListRegular = Object.keys(IconsRegular.far).map(
  (icon) => IconsRegular[icon],
);

const iconListDuotone = Object.keys(IconsDuotone.fad).map(
  (icon) => IconsDuotone[icon],
);

const iconListLight = Object.keys(IconsLight.fal).map(
  (icon) => IconsLight[icon],
);

library.add(
  ...iconList,
  ...iconListRegular,
  ...iconListDuotone,
  ...iconListLight,
);

export default function applyConfig(config) {
  // Add here your project's configuration here by modifying `config` accordingly
  config = applyRichTextConfig(config);
  config = applyAccordionConfig(config);
  config.settings.isMultilingual = false;
  config.settings.supportedLanguages = ['en'];
  config.settings.defaultLanguage = 'en';
  config.settings.showTags = false;
  config.settings.appExtras = [
    ...config.settings.appExtras,
    {
      match: '',
      component: () => <style type="text/css">{faDom.css()}</style>, //load fontawesom dom css
    },
    { match: '', component: CustomCSS },
  ];
  config.settings.nonContentRoutes = [
    ...config.settings.nonContentRoutes,
    /\/passwordreset\/.*$/,
    '/passwordreset',
  ];

  SiteBlocks(config); //blocks configuration for Plone.org
  SiteWidgets(config); //widgets configuration for Plone.org
  SiteViews(config); //views configuration for Plone.org

  config.settings['volto-dropdownmenu'] = {
    options: {
      clickableNavigationRoots: true, //if true, a checkbox option in dropdown menu appears
    },
  };

  config.settings['volto-gdpr-privacy'].defaultPanelConfig.last_updated =
    '2022-03-09T12:11:28+00:00';

  return config;
}
