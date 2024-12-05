
import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useFilters } from "@/components/contexts/filter-context"

interface QuickPropertyTypeDropdownProps {
  defaultValue: string;
}

export function QuickPropertyTypeDropdown({ defaultValue }: QuickPropertyTypeDropdownProps) {
  const { selectedFilters, setFilter } = useFilters()
  const type = selectedFilters.propertyType?.[0] || defaultValue

  const options = ['Flat', 'House/Villa', 'Plot', 'Commercial']

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="h-10 bg-white">
          {type}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px]" align="start">
        <div className="grid gap-2">
          {options.map((option) => (
            <Button
              key={option}
              variant="ghost"
              className="justify-start gap-2"
              onClick={() => setFilter('propertyType', option)}
            >
              {option === type && <Check className="h-4 w-4" />}
              {option}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
