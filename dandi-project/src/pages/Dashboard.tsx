import React from 'react'
import { useAuth } from '../context/useAuthContext'
import { Navbar } from '../components/Navbar'

export const Dashboard: React.FC = () => {
  const { user } = useAuth()

  return (
    <div className="dashboard">
      <Navbar />
      
      <div className="dashboard-container">
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
