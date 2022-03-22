import React from 'react'
import './login.scss'

export default function login() {
  return (
    <div class="login">
      <h2>Login</h2>
      <span>Username</span>
      <input type="text" />
      <span>Password</span>
      <input type="password" />
      <button>Enter</button>
    </div>
  )
}
