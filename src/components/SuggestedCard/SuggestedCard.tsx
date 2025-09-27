import React from 'react'
import './SuggestedCard.css'
import type { CardItem } from '../../types'

export type SuggestedCardProps = Pick<CardItem, 'name' | 'image'> & {
    onClick?: () => void
    className?: string
    showName?: boolean // si true, muestra el nombre debajo de la imagen
}

const SuggestedCard: React.FC<SuggestedCardProps> = ({
    name,
    image,
    onClick,
    className,
    showName,
}) => {
    return (
        <div
            className={`card ${className ?? ''}`}
            onClick={onClick}
            tabIndex={0}
        >
            <img src={image} alt={name} className="card__img" />
            {showName && <p className="card__label">{name}</p>}
        </div>
    )
}

export default SuggestedCard
