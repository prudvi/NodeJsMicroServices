import React from 'react';

import './side-bar.scss';
// or less ideally
import { Navbar,Nav, NavDropdown, Alert } from 'react-bootstrap';
function SideBar() {
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
    
<div class="sidebar">
  <a href="#home"><i class="fa fa-fw fa-home"></i> Home</a>
  <a href="#services"><i class="fa fa-fw fa-wrench"></i> Services</a>
  <a href="#clients"><i class="fa fa-fw fa-user"></i> Clients</a>
  <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Contact</a>
</div>
  );
}

export default SideBar;
