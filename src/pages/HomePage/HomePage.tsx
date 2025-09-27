import React, { useMemo, useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import SuggestedCard from '../../components/SuggestedCard/SuggestedCard'
import Button from '../../components/Button/Button'
import type { CardItem } from '../../types'
import suggestedItemsData from '../../assets/suggestedItems.json'
import tradesItemsData from '../../assets/tradesItems.json'
import './suggested.css'

const suggestedItems: CardItem[] = suggestedItemsData
const tradesItems: CardItem[] = tradesItemsData

const HomePage: React.FC = () => {
    const [query, setQuery] = useState('')

    const filteredSuggested = useMemo(
        () =>
            suggestedItems.filter((i) =>
                i.name.toLowerCase().includes(query.toLowerCase())
            ),
        [query]
    )

    const filteredTrades = useMemo(
        () =>
            tradesItems.filter((i) =>
                i.name.toLowerCase().includes(query.toLowerCase())
            ),
        [query]
    )

    return (
        <main style={{ padding: 24 }}>
            <SearchBar onSearch={setQuery} placeholder="Buscar por nombre..." />

            <HeroBanner />

            {/* Sugeridos */}
            <section className="suggested">
                <header className="suggested__header">
                    <h2 className="suggested__title">Sugeridos de hoy</h2>
                    <Button to="/sugeridos">Ver más</Button>
                </header>
                <div className="suggested__row">
                    {filteredSuggested.map(({ id, name, image }) => (
                        <SuggestedCard key={id} name={name} image={image} />
                    ))}
                </div>
            </section>

            {/* Trueques */}
            <section className="suggested">
                <header className="suggested__header">
                    <h2 className="suggested__title">Trueques cerca de ti</h2>
                    <Button to="/trueques">Ver más</Button>
                </header>
                <div className="suggested__row">
                    {filteredTrades.map(({ id, name, image }) => (
                        <SuggestedCard key={id} name={name} image={image} />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default HomePage
