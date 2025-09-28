import React, { useState } from 'react'
import { Input } from './Input'
import { useAuthActions } from '../hooks/useAuth'

interface AuthFormProps {
  mode: 'login' | 'register'
  onSuccess?: () => void
}

export const AuthForm: React.FC<AuthFormProps> = ({ mode, onSuccess }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const { signIn, signUp, loading, error, clearError } = useAuthActions()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    clearError()

    if (mode === 'register' && password !== confirmPassword) {
      return
    }

    const result = mode === 'login' 
      ? await signIn({ email, password })
      : await signUp({ email, password })

    if (result.success && onSuccess) {
      onSuccess()
    }
  }

  return (
    <div className="auth-form-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2 className="auth-title">
          {mode === 'login' ? 'Iniciar Sesión' : 'Registrarse'}
        </h2>
        
        <div className="form-group">
          <Input
            type="email"
            placeholder="Correo electronico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {mode === 'register' && (
          <>
            <div className="form-group">
              <Input
                type="text"
                placeholder="Nombre completo"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <Input
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <Input
                type="password"
                placeholder="Confirmar contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </>
        )}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {mode === 'register' && password !== confirmPassword && password && confirmPassword && (
          <div className="error-message">
            Las contraseñas no coinciden
          </div>
        )}

        <button 
          type="submit" 
          className="auth-button"
          disabled={loading}
        >
          {loading ? 'Cargando...' : (mode === 'login' ? 'Iniciar Sesión' : 'Registrarse')}
        </button>
      </form>
    </div>
  )
}
