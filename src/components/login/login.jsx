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
    <div class="login">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <span>Username</span>
        <input type="text" onChange={e => setUsername(e.target.value)} />
        <span>Password</span>
        <input type="password" onChange={e => setPassword(e.target.value)} />
        <button type='submit'>Enter</button>
      </form>
    </div>
  )
}
