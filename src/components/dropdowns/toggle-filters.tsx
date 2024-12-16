import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useFilters } from "@/components/contexts/filter-context"

export function ToggleFilters() {
  const { selectedFilters, setFilter, removeFilter } = useFilters()

  const toggleFilter = (key: string) => {
    if (selectedFilters[key]) {
      removeFilter(key, true)
    } else {
      setFilter(key, true)
    }
  }

  return (
    <div className="space-y-4">
      {[
        { id: 'offers', label: 'Properties with Offers' },
        { id: 'exclusive', label: 'MB Exclusive Properties' },
        { id: 'certified', label: 'Posted By Certified Agents' },
        { id: 'verified', label: 'Verified Properties' },
        { id: 'society', label: 'Society Only' },
      ].map(({ id, label }) => (
        <div key={id} className="flex items-center space-x-2">
          <Switch
            id={id}
            checked={selectedFilters[id]}
            onCheckedChange={() => toggleFilter(id)}
          />
          <Label htmlFor={id}>{label}</Label>
        </div>
      ))}
    </div>
  )
}
