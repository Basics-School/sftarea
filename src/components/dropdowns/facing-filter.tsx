import { Plus, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useFilters } from "@/components/contexts/filter-context"

export function FacingFilter() {
  const { selectedFilters, setFilter, removeFilter } = useFilters()
  const facing = selectedFilters.facing || []

  const directions = [
    'East', 'North', 'North - East', 'North - West',
    'South', 'South - East', 'South -West', 'West'
  ]

  const toggleFacing = (value: string) => {
    if (facing.includes(value)) {
      removeFilter('facing', value)
    } else {
      setFilter('facing', value)
    }
  }

  return (
    <div className="space-y-2">
      <h3 className="font-medium">Facing</h3>
      <div className="grid grid-cols-2 gap-2">
        {directions.map((direction) => (
          <Button
            key={direction}
            variant="outline"
            className="justify-start gap-2"
            onClick={() => toggleFacing(direction)}
          >
            {facing.includes(direction) ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
            {direction}
          </Button>
        ))}
      </div>
    </div>
  )
}
