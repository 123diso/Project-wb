import React, { createContext, useContext, useMemo, useState } from 'react'
import type { AppContextType, PageId } from '../types'

// 1. Creamos el contexto
const AppContext = createContext<AppContextType | undefined>(undefined)

// 2. Creamos el provider
export const AppProvider: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    const [currentPage, setCurrentPage] = useState<PageId>('home')

    const value = useMemo(
        () => ({ currentPage, setCurrentPage }),
        [currentPage]
    )

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

// 3. Hook para consumir el contexto
// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = (): AppContextType => {
    const ctx = useContext(AppContext)
    if (!ctx) throw new Error('useAppContext must be used within <AppProvider>')
    return ctx
}
