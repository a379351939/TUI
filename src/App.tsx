import React from 'react';
// import Button from './packages/button';
// import Affix from './packages/affix';
import Menu from './packages/menu/Menu';
import MenuItem from './packages/menu/MenuItem';
import SubMenu from './packages/menu/SubMenu';
import './App.scss';

function App() {
  return (
    <div className="contain">
      <Menu mode='vertical' onClick={(e)=>{console.log(e)}} >
        <MenuItem key='fuck'>456disjfpoawekpofkawpoekfpoewakfpoawjpeoif</MenuItem>
        <MenuItem key='shit'>123faewfeasdfasdf</MenuItem>
        <SubMenu title='ahaha'>
          <MenuItem key='qwe'>789sadfawefawefsadfdasvccxzvzxcv</MenuItem>
          <MenuItem key='asd'>101qweqweqw</MenuItem>
        </SubMenu>
        <MenuItem key='sadfew'>456disjfpoawekpofkawpoekfpoewakfpoawjpeoif</MenuItem>
        <MenuItem key='qweasdg'>123faewfeasdfasdf</MenuItem>
      </Menu>
    </div>
  );
}

export default App;