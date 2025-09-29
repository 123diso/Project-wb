import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ProductCard.css'

type ProductCardProps = {
  id: number
  title: string
  category: string
  condition: string
  location: string
  image?: string
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  category,
  condition,
  location
}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    // Redirigir a la página de detalles del producto
    navigate(`/producto/${id}`)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleClick()
    }
  }

  return (
    <div 
      className="product-card"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Ver detalles de ${title}`}
    >
      <div className="product-card__image">
        <div className="product-card__image-placeholder"></div>
      </div>
      
      <div className="product-card__content">
        <h3 className="product-card__title">{title}</h3>
        <div className="product-card__details">
          <span className="product-card__category">{category}</span>
          <span className="product-card__condition">Estado: {condition}</span>
          <span className="product-card__location">{location}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard