import React from 'react';

export const BulbapediaSection = ({link}) => (
  <div style={{ width: '100%', height: '100%' }}>
    <webview id="foo" src={link} style={{ width: '100%', height: '100%' }}>
    </webview>
  </div>
);
