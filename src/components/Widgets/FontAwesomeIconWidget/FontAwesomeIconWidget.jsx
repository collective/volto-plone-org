import React from 'react';
import { TextWidget } from '@plone/volto/components';

const FontAwesomeIconWidget = (props) => {
  const iconDescription = (
    <>
      Icona che verrà mostrata a fianco del numero. E' possibile inserire il
      codice di un'icona di FontAwesome scegliendone una fra quelle disponibili
      su{' '}
      <a
        href="https://fontawesome.com/v5.15/icons?d=gallery&p=2"
        target="_blank"
      >
        https://fontawesome.com
      </a>
    </>
  );
  return (
    <TextWidget {...props} description={iconDescription} onChange={onChange} />
  );
};
export default FontAwesomeIconWidget;
