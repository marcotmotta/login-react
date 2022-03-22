import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import useToken from './components/useToken';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {

  //the component will re-render since im calling useState inside useToken
  const { token, setToken } = useToken();

  if (!token) {
    return(
      <div className="App">
        <Login setToken={setToken} />
      </div>
    )
  }

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home setToken={setToken} />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
