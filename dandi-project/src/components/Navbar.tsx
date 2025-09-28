import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/useAuthContext'

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await signOut()
    navigate('/login')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/dashboard" className="navbar-logo">
            Dandi
          </Link>
        </div>
        
        <div className="navbar-menu">
          <Link to="/dashboard" className="navbar-link">
            Home
          </Link>
          <Link to="/map" className="navbar-link">
            Mapa
          </Link>
          <Link to="/categories" className="navbar-link">
            Categorías
          </Link>
        </div>
        
        <div className="navbar-actions">
          <Link to="/profile" className="navbar-user">
            <div className="user-avatar">
              {user?.email?.charAt(0).toUpperCase()}
            </div>
          </Link>
          <button 
            className="navbar-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="navbar-mobile-menu">
            <Link to="/dashboard" className="mobile-link">Home</Link>
            <Link to="/map" className="mobile-link">Mapa</Link>
            <Link to="/categories" className="mobile-link">Categorías</Link>
            <Link to="/profile" className="mobile-link">Perfil</Link>
            <button onClick={handleSignOut} className="mobile-signout">
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
