import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './components/layouts/home';
import { Header } from './components/layouts/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
