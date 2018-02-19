import React from 'react';
function test() {
  console.log('hola', window);
}
export const BulbapediaSection = ({link}) => (
  <div style={{width: 640, height: 480}}>
  {test()}   
    <webview id="foo" src="https://www.github.com/" style={{width: 640, height: 480}}>
    </webview>
  </div>
);
