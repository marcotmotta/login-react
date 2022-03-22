import React, { useState } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {

  const [token, setToken] = useState();

  if (!token) {
    return(
      <Login setToken={setToken} />
    )
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
