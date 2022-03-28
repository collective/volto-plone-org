import DefaultView from '@plone/volto/components/theme/View/DefaultView';

export const SiteViews = (config) => {
  config.views.contentTypesViews = {
    ...config.views.contentTypesViews,
    'News Item': DefaultView,
    Event: DefaultView,
  };
};
