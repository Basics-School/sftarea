
import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useFilters } from "@/components/contexts/filter-context"

interface QuickPriceDropdownProps {
  defaultValue: string;
}

export function QuickPriceDropdown({ defaultValue }: QuickPriceDropdownProps) {
  const { selectedFilters, setFilter } = useFilters()
  const price = selectedFilters.quickPrice?.[0] || defaultValue

  const options = ['5-10L', '10-20L', '20-30L', '30-40L', '40-50L']

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="h-10 bg-white">
          ₹{price}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px]" align="start">
        <div className="grid gap-2">
          {options.map((option) => (
            <Button
              key={option}
              variant="ghost"
              className="justify-start gap-2"
              onClick={() => setFilter('quickPrice', option)}
            >
              {option === price && <Check className="h-4 w-4" />}
              ₹{option}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
