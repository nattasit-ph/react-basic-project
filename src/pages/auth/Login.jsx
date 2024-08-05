import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import AuthLayout from '../../components/layouts/auth/AuthLayout'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('email.: ', email);
    console.log('password.: ', password);
  }
  return (
    <>
      <AuthLayout>
        <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
          <div className="card shadow-lg p-4" style={{ width: '100%', maxWidth: '500px' }}>
            <h3 className="text-center mb-4">Login</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  />
              </div>
              <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  />
              </div>
              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
            <div className="text-center mt-3">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <div className="text-center mt-3">
              <Link to="/register">Don't have an account? Register</Link>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  )
}

export default Login