import { Plus, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useFilters } from "@/components/contexts/filter-context"

export function BathroomFilter() {
  const { selectedFilters, setFilter, removeFilter } = useFilters()
  const bathrooms = selectedFilters.bathrooms || []

  const toggleBathroom = (value: string) => {
    if (bathrooms.includes(value)) {
      removeFilter('bathrooms', value)
    } else {
      setFilter('bathrooms', value)
    }
  }

  return (
    <div className="space-y-2">
      <h3 className="font-medium">Bathroom</h3>
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5].map((num) => (
          <Button
            key={num}
            variant="outline"
            className="justify-start gap-2"
            onClick={() => toggleBathroom(num.toString())}
          >
            {bathrooms.includes(num.toString()) ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
            {num}
          </Button>
        ))}
      </div>
    </div>
  )
}
