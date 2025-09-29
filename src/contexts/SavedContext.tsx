import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'


export type SavedProduct = {
  id: number | string
  title: string
  image?: string
  category?: string
  condition?: string
  location?: string
}

type SavedState = { products: Record<string, SavedProduct> }

type SavedContextType = {
  saved: SavedState
  isProductSaved: (id: number | string) => boolean
  toggleProduct: (item: SavedProduct) => void
}

const SavedContext = createContext<SavedContextType | undefined>(undefined)
const STORAGE_KEY = 'dandi:saved'

export const SavedProvider: React.FC<React.PropsWithChildren> = ({ children }) => {

  const [saved, setSaved] = useState<SavedState>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? (JSON.parse(raw) as SavedState) : { products: {} }
    } catch {
      return { products: {} }
    }
  })
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(saved)) } catch {}
  }, [saved])

  const isProductSaved = (id: number | string) => Boolean(saved.products[String(id)])

  const toggleProduct = (item: SavedProduct) => {
  setSaved((prev) => {
    const next: SavedState = { products: { ...prev.products } }
    const key = String(item.id)

    if (next.products[key]) {
      delete next.products[key]
      console.log('Eliminado de guardados')
    } else {
      next.products[key] = item
      console.log('Guardado exitosamente')
    }

    return next
  })
}

  const value = useMemo(() => ({ saved, isProductSaved, toggleProduct }), [saved])

  return <SavedContext.Provider value={value}>{children}</SavedContext.Provider>
}

export const useSaved = (): SavedContextType => {
  const ctx = useContext(SavedContext)
  if (!ctx) throw new Error('useSaved must be used within <SavedProvider>')
  return ctx
}
