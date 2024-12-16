
import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useFilters } from "@/components/contexts/filter-context"

interface QuickBHKDropdownProps {
  defaultValue: string;
}

export function QuickBHKDropdown({ defaultValue }: QuickBHKDropdownProps) {
  const { selectedFilters, setFilter } = useFilters()
  const bhk = selectedFilters.bhk?.[0] || defaultValue

  const options = ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK']

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="h-10 bg-white">
          {bhk}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px]" align="start">
        <div className="grid gap-2">
          {options.map((option) => (
            <Button
              key={option}
              variant="ghost"
              className="justify-start gap-2"
              onClick={() => setFilter('bhk', option)}
            >
              {option === bhk && <Check className="h-4 w-4" />}
              {option}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
