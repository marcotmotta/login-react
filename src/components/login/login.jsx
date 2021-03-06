import React, { useState } from 'react'
import './Login.scss'
import axios from 'axios'

export default function Login({ setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
  
    let args = {
      url: `http://localhost:4000/users/${username}/${password}`,
      method: 'GET'
    }

    let data

    await axios(args)
      .then(response => data = response.data)

    if (data.token) {
      setToken(data.token)
    } else {
      alert('Could not find user')
    }
  }

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
        <div className="form-group">
          <span>Username</span>
          <input required type="text" onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <span>Password</span>
          <input required type="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <button type='submit'>Enter</button>
      </form>
    </div>
  )
}
