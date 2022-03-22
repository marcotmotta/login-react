import React, { useState } from 'react'
import './Login.scss'

export default function Login({ setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    /* const token = await loginUser({
      username,
      password
    }); */
    const token = username;
    setToken(token);
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
