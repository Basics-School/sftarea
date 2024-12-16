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
                    <div className="flex justify-center gap-4 my-4">
                        <button className="px-4 py-2 border rounded-md hover:bg-gray-100">&lt; Previous</button>
                        <span className="flex items-center">Page 1 of 10</span>
                        <button className="px-4 py-2 border rounded-md hover:bg-gray-100">Next &gt;</button>
                    </div>

                </FilterProvider>
            </Suspense>
        </main>
    )
}

export default SearchPage
