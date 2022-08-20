import React from 'react';
import Test from './Test'
import New from './New'
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
