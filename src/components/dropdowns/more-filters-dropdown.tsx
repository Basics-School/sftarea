import { Plus, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { TopLocalitiesDropdown } from "./top-localities-dropdown"
import { BudgetDropdown } from "./budget-dropdown"
import { PropertyTypeDropdown } from "./property-type-dropdown"
import { BHKDropdown } from "./bhk-dropdown"
import { PostedByDropdown } from "./posted-by-dropdown"
import { BathroomFilter } from "./bathroom-filter"
import { ToggleFilters } from "./toggle-filters"
import { FacingFilter } from "./facing-filter"
import { useFilters } from "@/components/contexts/filter-context"

export function MoreFiltersDropdown() {
  const { selectedFilters, removeFilter, clearFilters } = useFilters()

  const selectedCount = Object.values(selectedFilters).flat().length

  return (
    <div className="flex flex-col gap-4">


      <Popover>
        <PopoverTrigger asChild>
          <div className="flex items-center gap-2">
            
            <Button variant="ghost" className="h-10 bg-white gap-2">
              More Filters
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[80vw] max-w-[800px] p-6" align="end">
          <ScrollArea className="h-[80vh] pr-4">
            <div className="space-y-6">
              <ToggleFilters />
              <Separator />
              <BathroomFilter />
              <Separator />
              <FacingFilter />
              <Separator />
              <TopLocalitiesDropdown />
              <Separator />
              <BudgetDropdown />
              <Separator />
              <PropertyTypeDropdown />
              <Separator />
              <BHKDropdown />
              <Separator />
              <PostedByDropdown />
            </div>
          </ScrollArea>
          <div className="flex justify-between mt-6 pt-4 border-t">
            <Button variant="outline" onClick={clearFilters}>
              Clear All
            </Button>
            <Button>
              View {selectedCount} Properties
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
