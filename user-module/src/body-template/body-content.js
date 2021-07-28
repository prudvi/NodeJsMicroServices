import React from 'react';

import './body-content.scss';

function BodyContent(props) {
    let colors = [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
        
      ];
  return (
    <div className="App-Header">
      {props.children}
    </div>
   
  );
  
}

export default BodyContent;
