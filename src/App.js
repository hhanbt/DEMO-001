import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import MainBody from './MainBody';

function App() {
  return (
    <div className="App">
      <Header 
      name='Hóe'
      age={15}
      />
        <MainBody />
    </div>
  );
}

export default App;
