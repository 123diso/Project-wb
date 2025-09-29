import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ProductCard from "./components/ProductCard/ProductCard";
import ProductDetail from "./pages/ProductDetail";
import './App.css'
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage'

const Layout: React.FC = () => (
    <>
    
        <Outlet />
    </>
)

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            {/*{ path: 'mapa', element: <MapPage /> }, // ← ahora son pages reales
            { path: 'categorias', element: <CategoriesPage /> },*/},
            { path: 'producto/:id', element: <ProductDetailPage /> },
            {
                path: '*',
                element: (
                    <main style={{ padding: 24 }}>Página no encontrada</main>
                ),
            },
        ],
    },
])

export default function App() {
    return <RouterProvider router={router} />
}
