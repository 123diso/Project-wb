import React from 'react'
import { useNavigate } from 'react-router-dom'
import './MapBanner.css'

const MapBanner: React.FC = () => {
  const navigate = useNavigate()

  const handleMapClick = () => {
    navigate('/mapa')
  }

  return (
    <div className="map-banner">
      <div className="map-banner__content">
        <h2 className="map-banner__title">
          Intercambia cerca de donde te encuentres
        </h2>
        <button 
          className="map-banner__button"
          onClick={handleMapClick}
        >
          Ver mapa →
        </button>
      </div>
    </div>
  )
}

export default MapBanner