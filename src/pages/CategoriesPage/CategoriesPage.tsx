import React, { useMemo, useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import SuggestedCard from '../../components/SuggestedCard/SuggestedCard'
import type { Category } from '../../types'
import categoriesData from '../../assets/categories.json'
import './Categories.css'

const CATEGORIES: Category[] = categoriesData as Category[]

const CategoriesPage: React.FC = () => {
    const [query, setQuery] = useState('')

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase()
        if (!q) return CATEGORIES
        return CATEGORIES.filter((c) => c.name.toLowerCase().includes(q))
    }, [query])

    return (
        <div className="categories__page">
            <div style={{ padding: '32px 40px 0' }}>
                <SearchBar
                    onSearch={setQuery}
                    placeholder="Escribe aquí para buscar..."
                />
            </div>

            <section className="categories__container">
                <h2 className="categories__title">Todas las categorías</h2>

                {filtered.length === 0 ? (
                    <p className="categories__empty">
                        No se encontraron categorías que coincidan con tu
                        búsqueda.
                    </p>
                ) : (
                    <>
                        <div className="categories__grid">
                            {filtered.map((cat) => (
                                <SuggestedCard
                                    key={cat.id}
                                    name={cat.name}
                                    image={cat.image}
                                    showName
                                    className="category-card"
                                    onClick={() =>
                                        console.log('click:', cat.name)
                                    }
                                />
                            ))}
                        </div>

                        {query && (
                            <p className="categories__count">
                                {filtered.length} categoría
                                {filtered.length !== 1 ? 's' : ''} encontrada
                                {filtered.length !== 1 ? 's' : ''}.
                            </p>
                        )}
                    </>
                )}
            </section>
        </div>
    )
}

export default CategoriesPage
