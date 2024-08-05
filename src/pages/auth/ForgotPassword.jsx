import React, { useState } from 'react'
import AuthLayout from '../../components/layouts/auth/AuthLayout';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle forgot password logic here
    console.log('Email:', email);
  };

  return (
    <>
      <AuthLayout>
        <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
          <div className="card shadow-lg p-4" style={{ width: '100%', maxWidth: '400px' }}>
            <h3 className="text-center mb-4">Forgot Password</h3>
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
              <button type="submit" className="btn btn-primary w-100">Reset Password</button>
            </form>
            <div className="text-center mt-3">
              <Link to="/login">Back to login</Link>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  )
}

export default ForgotPassword