import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { DualRangeSlider } from "@/components/ui/dual-range-slider"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useFilters } from "@/components/contexts/filter-context"
import { useState } from 'react'

interface QuickPriceDropdownProps {
  defaultValue: string;
}

const priceRanges = {
  min: 500000,  // 5L
  max: 5000000, // 50L
}

const formatPrice = (value: number) => {
  if (value >= 100000) {
    return `${(value / 100000).toFixed(1)}L`
  }
  return `${value.toLocaleString()}`
}

export function QuickPriceDropdown({ defaultValue }: QuickPriceDropdownProps) {
  const { selectedFilters, setFilter } = useFilters()
  const price = selectedFilters.quickPrice?.[0] || defaultValue
  const [priceRange, setPriceRange] = useState([priceRanges.min, priceRanges.max])

  const options = ['5-10L', '10-20L', '20-30L', '30-40L', '40-50L']

  const handleRangeChange = (values: number[]) => {
    setPriceRange(values)
    setFilter('priceRange', values)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="h-10 bg-white">
          ₹{price}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px]" align="start">
        <div className="space-y-4">
          <div className="grid gap-2">
            {/* Quick select buttons */}
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

          <div className="space-y-4 pt-4 border-t">
            <div className="flex justify-between">
              <div>₹{formatPrice(priceRange[0])}</div>
              <div>₹{formatPrice(priceRange[1])}</div>
            </div>
            <DualRangeSlider
              defaultValue={[priceRanges.min, priceRanges.max]}
              max={priceRanges.max}
              min={priceRanges.min}
              step={100000}
              value={priceRange}
              onValueChange={handleRangeChange}
              className="w-full"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
