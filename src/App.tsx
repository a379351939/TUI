import React from 'react';
import Button from './packages/button';
import Affix from './packages/affix';
import './App.scss';

function App() {
  return (
    <div className="contain">
      <Affix>
        <Button type='primary'>Default</Button>
      </Affix>
    </div>
  );
}

export default App;