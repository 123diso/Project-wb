import React from 'react'
import { useSaved } from '../../contexts/SavedContext'
import ProductCard from '../../components/ProductCard/ProductCard'
import './SavedPage.css'

const SavedPage: React.FC = () => {
  const { saved } = useSaved()
  const list = Object.values(saved.products)

  return (
    <main className="saved-page">
      <section className="products-section">
        <header className="products-section__header">
          <h2 className="suggested__title">Mis guardados</h2>
          <span className="saved-count">
            {list.length} {list.length === 1 ? 'item' : 'items'}
          </span>
        </header>

        {list.length === 0 ? (
          <p className="saved-empty">Aún no has guardado productos.</p>
        ) : (
          <div className="products-section__list">
            {list.map((p) => (
              <ProductCard
                key={String(p.id)}
                id={Number(p.id)}              // ProductCard espera number
                title={p.title}
                image={p.image}
                category={p.category ?? ''}
                condition={p.condition ?? ''}
                location={p.location ?? ''}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default SavedPage
