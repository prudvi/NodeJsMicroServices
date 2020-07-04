import React from 'react';

import './header.scss';
// or less ideally
import { Alert } from 'react-bootstrap';
function Header() {
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

export default Header;
