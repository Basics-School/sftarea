import { Check, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useFilters } from "@/components/contexts/filter-context"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PropertyPurposeDropdown() {
  const { selectedFilters, setFilter, removeFilter } = useFilters()
  const purpose = selectedFilters.purpose || []

  const togglePurpose = (value: string) => {
    if (purpose.includes(value)) {
      removeFilter('purpose', value)
    } else {
      setFilter('purpose', value)
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="h-10 bg-white gap-2">
          {purpose[0] || 'Purpose'}
          {purpose.length > 0 && <Check className="h-4 w-4" />}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-4" align="start">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Residential</h4>
            <div className="grid gap-2">
              <Button variant="outline" className="justify-start">
                Buy
              </Button>
              <Button variant="outline" className="justify-start bg-green-50">
                <Check className="h-4 w-4 mr-2 text-green-500" />
                Rent
              </Button>
              <Button variant="outline" className="justify-start">
                PG
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Commercial</h4>
            <div className="grid gap-2">
              <Button variant="outline" className="justify-start">
                Buy
              </Button>
              <Button variant="outline" className="justify-start">
                Lease
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
