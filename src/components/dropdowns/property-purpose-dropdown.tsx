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
      setFilter('purpose', [value, ...purpose])
    }
  }

  const getTriggerText = () => {
    if (purpose.length === 0) return 'Purpose'
    if (purpose.length === 1) return purpose[0]
    return `${purpose[0]} +${purpose.length - 1}`
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="h-10 bg-white gap-2">
          {getTriggerText()}
          {purpose.length > 0 && <Check className="h-4 w-4" />}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-4" align="start">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Residential</h4>
            <div className="grid gap-2">
              {['Buy', 'Rent', 'PG'].map((value) => (
                <Button
                  key={value}
                  variant="outline"
                  className={`justify-start ${purpose.includes(value) ? 'bg-green-50' : ''}`}
                  onClick={() => togglePurpose(value)}
                >
                  {purpose.includes(value) ? (
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                  ) : (
                    <Plus className="h-4 w-4 mr-2" />
                  )}
                  {value}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Commercial</h4>
            <div className="grid gap-2">
              {['Buy', 'Lease'].map((value) => (
                <Button
                  key={`commercial-${value}`}
                  variant="outline"
                  className={`justify-start ${purpose.includes(`Commercial ${value}`) ? 'bg-green-50' : ''}`}
                  onClick={() => togglePurpose(`Commercial ${value}`)}
                >
                  {purpose.includes(`Commercial ${value}`) ? (
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                  ) : (
                    <Plus className="h-4 w-4 mr-2" />
                  )}
                  {value}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
