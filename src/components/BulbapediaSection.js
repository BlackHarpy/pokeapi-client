import React from 'react';
function test() {
  console.log('hola', window);
}
export const BulbapediaSection = ({link}) => (
  <div style={{ width: '100%', height: '100%' }}>
  {test()}   
    <webview id="foo" src="https://www.github.com/" style={{ width: '100%', height: '100%' }}>
    </webview>
  </div>
);
