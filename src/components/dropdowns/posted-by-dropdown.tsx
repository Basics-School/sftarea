import { Check, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useFilters } from "@/components/contexts/filter-context"

export function PostedByDropdown() {
  const { selectedFilters, setFilter, removeFilter } = useFilters()

  const togglePostedBy = (value: string) => {
    if (selectedFilters.postedBy?.includes(value)) {
      removeFilter('postedBy', value)
    } else {
      setFilter('postedBy', value)
    }
  }

  return (
    <div className="space-y-2">
      <h3 className="font-medium">Posted By</h3>
      {['Owners', 'Brokers', 'Builders'].map((type) => (
        <Button
          key={type}
          variant="outline"
          className="w-full justify-start gap-2"
          onClick={() => togglePostedBy(type)}
        >
          {selectedFilters.postedBy?.includes(type) ? (
            <Check className="h-4 w-4" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
          {type}
        </Button>
      ))}
    </div>
  )
}
