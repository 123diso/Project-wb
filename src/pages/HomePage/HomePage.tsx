
import ProductCard from '../../components/ProductCard/ProductCard'
import MapBanner from '../../components/MapBanner/MapBanner'
import Button from '../../components/Button/Button'
import './suggested.css'


const productCardsData = [
  {
    id: 1,
    title: "Reloj UNISEX",
    category: "Accesorios",
    condition: "Nuevo",
    location: "San Fernando"
  },
  {
    id: 2,
    title: "Trípode Control Selfie",
    category: "Electrónica",
    condition: "Nuevo", 
    location: "Hotel Intercontinental"
  },
  {
    id: 3,
    title: "Xbox series s",
    category: "Electrónica",
    condition: "Buen estado",
    location: "CC Unico"
  }
]

const HomePage: React.FC = () => {
    

    return (
        <main style={{ padding: 24 }}>
            {/* /*<SearchBar onSearch={setQuery} placeholder="Buscar por nombre..." />
            <HeroBanner />*/
           }

            
            {/* Sugeridos */}
            

            {/* Trueques */}

            {/* Sección de Productos Destacados */}
            <section className="products-section">
                <header className="products-section__header">
                    <h2 className="products-section__title">Según tus intereses</h2>
                    
                </header>
                
                <div className="products-section__list">{productCardsData.map((product) => (
                    <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    category={product.category}
                    condition={product.condition}
                    location={product.location}
                    />
                ))}
                </div>
                <Button to="/productos">Ver más →</Button>
            </section>

            {/* Banner del Mapa */}
            <MapBanner />

        </main>
    )
}

export default HomePage
