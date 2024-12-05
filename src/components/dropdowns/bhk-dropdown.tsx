import { Check, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useFilters } from "@/components/contexts/filter-context"

export function BHKDropdown() {
  const { selectedFilters, setFilter, removeFilter } = useFilters()
  const bhk = selectedFilters.bhk || []

  const toggleBHK = (value: string) => {
    if (bhk.includes(value)) {
      removeFilter('bhk', value)
    } else {
      setFilter('bhk', value)
    }
  }

  return (
    <div className="space-y-2">
      <h3 className="font-medium">BHK</h3>
      <div className="grid grid-cols-2 gap-2">
        {['1', '2', '3', '4', '5', '>5'].map((size) => (
          <Button
            key={size}
            variant="outline"
            className="justify-start gap-2"
            onClick={() => toggleBHK(`${size} BHK`)}
          >
            {bhk.includes(`${size} BHK`) ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
            {size} BHK
          </Button>
        ))}
      </div>
    </div>
  )
}
