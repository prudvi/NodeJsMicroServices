import React from 'react';

import './App.scss';

import Header from './header/header';

import BodyContent from './body-template/body-content';
import Content from './body-template/content/content';
import SideBar from './side-bar/side-bar';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <BodyContent>
       <SideBar></SideBar>
       <Content></Content>
     </BodyContent>
    </div>
  );
}

export default App;
