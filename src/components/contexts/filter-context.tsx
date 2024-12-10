'use client'

import { createContext, useContext, ReactNode, useState } from 'react'
import { useUpdateSearchParams } from '@/hooks/use-search-params'

interface FilterContextType {
  selectedFilters: Record<string, any>
  setFilter: (category: string, value: any) => void
  removeFilter: (category: string, value: any) => void
  clearFilters: () => void
  placeSearch: string
  setPlaceSearch: (value: string) => void
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export function FilterProvider({ children }: { children: ReactNode }) {
  const { setSearchParam, removeSearchParam, searchParams } = useUpdateSearchParams()
  const [placeSearch, setPlaceSearch] = useState('')

  const selectedFilters = Array.from(searchParams.entries()).reduce((acc, [key, value]) => {
    if (acc[key]) {
      if (Array.isArray(acc[key])) {
        acc[key].push(value)
      } else {
        acc[key] = [acc[key], value]
      }
    } else {
      acc[key] = value
    }
    return acc
  }, {} as Record<string, any>)

  const setFilter = (category: string, value: any) => {
    setSearchParam(category, value)
  }

  const removeFilter = (category: string, value: any) => {
    removeSearchParam(category, value)
  }

  const clearFilters = () => {
    Array.from(searchParams.keys()).forEach(key => {
      removeSearchParam(key)
    })
  }

  return (
    <FilterContext.Provider value={{
      selectedFilters,
      setFilter,
      removeFilter,
      clearFilters,
      placeSearch,
      setPlaceSearch
    }}>
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
