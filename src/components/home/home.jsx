import React from 'react'

import './Home.scss'

export default function Home({ setToken }) {

  const logout = () => {
    setToken(null);
  }

  return (
    <div className="home">
      <div className="home-card">
        <h3>Welcome, you're logged in!</h3>
        <button onClick={logout}>Sair</button>
      </div>
    </div>
  )
}
