import { FilterProvider } from '@/components/contexts/filter-context'
import { MapProvider } from '@/components/contexts/map-context'
import PropertySearch from '@/components/property-search'
import React from 'react'

const SearchPage = () => {
    return (
        <main>
            <FilterProvider>
                <MapProvider>
                    <PropertySearch />
                </MapProvider>
            </FilterProvider>
        </main>
    )
}

export default SearchPage
