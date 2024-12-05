import { X, Plus } from 'lucide-react'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { PropertyPurposeDropdown } from "./dropdowns/property-purpose-dropdown"
import { MoreFiltersDropdown } from "./dropdowns/more-filters-dropdown"
import { SelectedFilters } from "./selected-filters"
import { QuickBHKDropdown } from "./dropdowns/quick-bhk-dropdown"
import { QuickPriceDropdown } from "./dropdowns/quick-price-dropdown"
import { QuickPropertyTypeDropdown } from "./dropdowns/quick-property-type-dropdown"

export function FilterBar() {
  const [searchValue, setSearchValue] = useState("Gwalior")

  return (
    <div className="w-full bg-brand p-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <PropertyPurposeDropdown />

          <div className="relative flex-1 min-w-[200px]">
            <Input
              className="h-10 pr-20 bg-white"
              placeholder="Enter city, locality or project"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button
              variant="ghost"
              className="absolute right-0 top-0 h-full px-3 text-sm font-normal text-muted-foreground hover:bg-transparent"
            >
              Add More
            </Button>
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
