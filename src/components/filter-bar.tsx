import { X, Plus, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { useMap } from './contexts/map-context'
import GoogleAddressSearch from './google-address-search'
import { Badge } from "@/components/ui/badge"
import { PropertyPurposeDropdown } from "./dropdowns/property-purpose-dropdown"
import { MoreFiltersDropdown } from "./dropdowns/more-filters-dropdown"
import { SelectedFilters } from "./selected-filters"
import { QuickBHKDropdown } from "./dropdowns/quick-bhk-dropdown"
import { QuickPriceDropdown } from "./dropdowns/quick-price-dropdown"
import { QuickPropertyTypeDropdown } from "./dropdowns/quick-property-type-dropdown"
import { useSearch } from '@/hooks/use-search'

export function FilterBar() {
  const { searchValue, setSearchValue, isSearching } = useSearch();
  const { setCoordinates, setSelectedAddress } = useMap();

  return (
    <div className="w-full bg-brand p-4">
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <PropertyPurposeDropdown />

          <div className="relative flex-1 min-w-[200px]">
            <GoogleAddressSearch
              selectedAddress={setSelectedAddress}
              setCoordinates={setCoordinates}
            />
          </div>

          <QuickBHKDropdown defaultValue="2 BHK" />
          <QuickPriceDropdown defaultValue="10-20L" />
          <QuickPropertyTypeDropdown defaultValue="Flat" />
          <MoreFiltersDropdown />
        </div>
        <SelectedFilters />
      </div>
    </div>
  )
}
