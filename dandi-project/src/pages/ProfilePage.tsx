import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/useAuthContext'
import { Navbar } from '../components/Navbar'

export const ProfilePage: React.FC = () => {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('all')

  const handleSignOut = async () => {
    await signOut()
    navigate('/login')
  }

  const handleEdit = () => {
    // Lógica para editar perfil
    console.log('Edit profile')
  }

  const handleMessage = () => {
    // Lógica para enviar mensaje
    console.log('Send message')
  }

  // Datos de ejemplo para los items
  const userItems = [
    {
      id: 1,
      title: "Playstation 5",
      category: "Electrónica",
      status: "Nuevo",
      timeAgo: "2hrs",
      image: "/api/placeholder/200/200"
    },
    {
      id: 2,
      title: "Ollas",
      category: "Utensilios",
      status: "Usado",
      timeAgo: "1d",
      image: "/api/placeholder/200/200"
    },
    {
      id: 3,
      title: "Bicicleta",
      category: "Deporte",
      status: "Bueno",
      timeAgo: "3d",
      image: "/api/placeholder/200/200"
    },
    {
      id: 4,
      title: "Computador",
      category: "Electrónica",
      status: "Nuevo",
      timeAgo: "1w",
      image: "/api/placeholder/200/200"
    },
    {
      id: 5,
      title: "Pesas",
      category: "Deporte",
      status: "Usado",
      timeAgo: "2w",
      image: "/api/placeholder/200/200"
    },
    {
      id: 6,
      title: "Televisor",
      category: "Electrónica",
      status: "Bueno",
      timeAgo: "1m",
      image: "/api/placeholder/200/200"
    }
  ]

  return (
    <div className="profile-page">
      <Navbar />
      
      <div className="profile-content">
        {/* Banner */}
        <div className="profile-banner">
          <div className="banner-image"></div>
        </div>
        
        {/* Profile Info */}
        <div className="profile-info">
          <div className="profile-picture">
            <div className="avatar-large">
              {user?.email?.charAt(0).toUpperCase()}
            </div>
          </div>
          
          <div className="profile-details">
            <h1 className="profile-name">Tyrone Greyson</h1>
            <p className="profile-posts">20 Posts</p>
            <div className="profile-rating">
              <span>Rating: 4.5</span>
            </div>
          </div>
          
          <div className="profile-actions">
            <button onClick={handleSignOut} className="action-button logout">
              Cerrar sesión
            </button>
            <button onClick={handleEdit} className="action-button edit">
              Edit
            </button>
            <button onClick={handleMessage} className="action-button message">
              Message
            </button>
          </div>
        </div>
        
        {/* Posts Section */}
        <div className="posts-section">
          <div className="posts-header">
            <h2 className="posts-title">Post</h2>
            <div className="posts-tabs">
              <button 
                className={`tab ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                All Items
              </button>
            </div>
          </div>
          
          <div className="items-grid">
            {userItems.map((item) => (
              <div key={item.id} className="item-card">
                <div className="item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="item-content">
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-category">{item.category}</p>
                  <p className="item-status">Estado: {item.status}</p>
                  <p className="item-time">Publicado hace {item.timeAgo}</p>
                </div>
                <div className="item-bookmark">
                  <span className="bookmark-icon">🔖</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
