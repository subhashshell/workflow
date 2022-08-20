import React from 'react';
import New from './New';
import Test from './Test';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Workflow React App</h1>
      <p>Test workflow for unit test coverage and cypress</p>
      <Test />
      <New />
    </div>
  );
}

export default App;
