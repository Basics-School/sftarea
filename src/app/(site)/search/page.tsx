import { FilterProvider } from '@/components/contexts/filter-context'
import { MapProvider } from '@/components/contexts/map-context'
import PropertySearch from '@/components/property-search'
import React, { Suspense } from 'react'

const SearchPage = () => {
    return (
        <main>
            <Suspense fallback={null}>
                <FilterProvider>
                    <MapProvider>
                        <PropertySearch />
                    </MapProvider>
                </FilterProvider>
            </Suspense>
        </main>
    )
}

export default SearchPage
