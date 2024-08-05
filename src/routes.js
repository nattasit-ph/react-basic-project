import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ForgotPassword from './pages/auth/ForgotPassword'

const routes = (
        <Routes>
          {/* Front-End */}
          <Route path="/" exact={true} element={'Home'} />
          <Route path="/home" element={'Home'} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Back-End */}
          <Route path="/admin/dashboard" element={'Dashboard'} />

          {/* 404 Not Found */}
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
)

export default routes