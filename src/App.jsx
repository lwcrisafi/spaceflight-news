import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Homepage from './Homepage'



function App() {
  

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Homepage />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App
