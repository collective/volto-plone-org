import '~/config'; // This is the bootstrap for the global config - client side
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import itMessages from '~/../locales/it.json';

import '~/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <IntlProvider messages={itMessages} locale="it" defaultLocale="it">
      <StaticRouter location="/">
        <Story />
      </StaticRouter>
    </IntlProvider>
  ),
];
