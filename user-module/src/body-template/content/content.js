import React from 'react';

// or less ideally
import { Alert } from 'react-bootstrap';
function Content(props) {
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
   
    colors.map((variant, idx) => (
        <Alert key={idx} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
        
      ))
  );
  
}

export default Content;
