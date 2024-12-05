import { FilterProvider } from '@/components/contexts/filter-context'
import PropertySearch from '@/components/property-search'
import React from 'react'

const SearchPage = () => {
    return (
        <main className='max-w-screen-xl mx-auto'>
            <FilterProvider>
                <PropertySearch />
            </FilterProvider>
        </main>
    )
}

export default SearchPage
