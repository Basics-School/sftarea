'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface FilterContextType {
  selectedFilters: Record<string, any>
  setFilter: (category: string, value: any) => void
  removeFilter: (category: string, value: any) => void
  clearFilters: () => void
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export function FilterProvider({ children }: { children: ReactNode }) {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, any>>({})

  const setFilter = (category: string, value: any) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: value
    }))
  }

  const removeFilter = (category: string, value: any) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: Array.isArray(prev[category])
        ? prev[category].filter((item: any) => item !== value)
        : []
    }))
  }

  const clearFilters = () => {
    setSelectedFilters({})
  }

  return (
    <FilterContext.Provider value={{ selectedFilters, setFilter, removeFilter, clearFilters }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilters = () => {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error('useFilters must be used within a FilterProvider')
  }
  return context
}
