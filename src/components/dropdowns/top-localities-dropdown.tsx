import { Check } from 'lucide-react'
import { useFilters } from "@/components/contexts/filter-context"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

const topLocalities = [
  "Gole Ka Mandir",
  "City Centre",
  "DD Nagar",
  "Lashkar",
  "Morar",
  "Thatipur",
  "Vijay Nagar",
  "Madhav Ganj",
  "Hospital Road",
  "Phool Bagh"
]

export function TopLocalitiesDropdown() {
  const { selectedFilters, setFilter, removeFilter } = useFilters()
  const selectedLocalities = selectedFilters["locality"] || []

  const handleLocalityChange = (locality: string, checked: boolean) => {
    if (checked) {
      setFilter("locality", [...selectedLocalities, locality])
    } else {
      removeFilter("locality", locality)
    }
  }

  return (
    <div className="space-y-4">
      <Label className="text-base">Top Localities</Label>
      <div className="grid grid-cols-2 gap-2">
        {topLocalities.map((locality) => (
          <div key={locality} className="flex items-center space-x-2">
            <Checkbox
              id={locality}
              checked={selectedLocalities.includes(locality)}
              onCheckedChange={(checked) => handleLocalityChange(locality, checked as boolean)}
            />
            <Label htmlFor={locality} className="text-sm font-normal">
              {locality}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )
}
