import React from 'react';
import Body from './Body';
import { SidebarPortal } from '@plone/volto/components';
import Sidebar from './Sidebar';

const Edit = (props) => {
  return (
    <div className="block related-items">
      <Body {...props} isEditMode={true} />
      <SidebarPortal selected={props.selected}>
        <Sidebar {...props} />
      </SidebarPortal>
    </div>
  );
};

export default Edit;
