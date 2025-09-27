import React from 'react'
import { useAuth } from '../context/useAuthContext'

export const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1>Dashboard</h1>
          <button onClick={handleSignOut} className="signout-button">
            Cerrar Sesión
          </button>
        </header>
        
        <main className="dashboard-content">
          <div className="welcome-card">
            <h2>¡Bienvenido!</h2>
            <p>Has iniciado sesión correctamente.</p>
            <div className="user-info">
              <p><strong>Email:</strong> {user?.email}</p>
              <p><strong>ID:</strong> {user?.id}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
