import React from 'react'
import { Link } from 'react-router-dom'
import { AuthForm } from '../components/AuthForm'
import DandiLogo from '../assets/dandi-logo.svg'

export const LoginPage: React.FC = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="logo-container">
          <img src={DandiLogo} alt="Dandi" className="logo-image" />
        </div>
        <div className="welcome-message">
          <p>Inicia sesión para acceder a tu cuenta</p>
        </div>
        <AuthForm mode="login" />
        <div className="auth-switch">
          <p>¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></p>
        </div>
      </div>
    </div>
  )
}
