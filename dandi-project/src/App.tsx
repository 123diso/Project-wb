import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/HomePage/HomePage'
import MapPage from './pages/MapPage/MapPage'
import CategoriesPage from './pages/CategoriesPage/CategoriesPage'
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage'
import { SavedProvider } from './contexts/SavedContext'
import SavedPage from './pages/SavedPage/SavedPage'
import './App.css'

const Layout: React.FC = () => (
    <SavedProvider>
        <Navbar />
        <Outlet />
    </SavedProvider>
)

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'mapa', element: <MapPage /> },
            { path: 'categorias', element: <CategoriesPage /> },
            { path: 'producto/:id', element: <ProductDetailPage /> },
            { path: 'guardados', element: <SavedPage /> }, 
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