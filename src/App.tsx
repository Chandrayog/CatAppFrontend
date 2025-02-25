import React from 'react';
import './App.css';
import CatComponent from './component/CatComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* If you need a logo, make sure to import it or remove this line */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
          Cat App Project
       
      </header>
      <CatComponent />
    </div>
  );
};

export default App;

