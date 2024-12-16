import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { useFilters } from "@/components/contexts/filter-context"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Plus } from 'lucide-react'

export function BudgetDropdown() {
  const { selectedFilters, setFilter } = useFilters()
  const budget = selectedFilters.budget || { min: '', max: '' }

  const handleBudgetChange = (type: 'min' | 'max', value: string) => {
    setFilter('budget', { ...budget, [type]: value })
  }

  const handleSliderChange = (values: number[]) => {
    setFilter('budget', {
      min: values[0].toString(),
      max: values[1].toString()
    })
  }

  return (
    <div className="space-y-4">
      <h3 className="font-medium">Budget</h3>
      <div className="flex gap-4">
        <Select onValueChange={(value) => handleBudgetChange('min', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Min" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10l">10 Lac</SelectItem>
            <SelectItem value="20l">20 Lac</SelectItem>
            <SelectItem value="30l">30 Lac</SelectItem>
          </SelectContent>
        </Select>
        <span className="text-sm self-center">to</span>
        <Select onValueChange={(value) => handleBudgetChange('max', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Max" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="40l">40 Lac</SelectItem>
            <SelectItem value="50l">50 Lac</SelectItem>
            <SelectItem value="60l">60 Lac</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Slider
        defaultValue={[0, 100]}
        max={100}
        step={1}
        className="[&_[role=slider]]:bg-green-500"
        onValueChange={handleSliderChange}
      />
    </div>
  )
}
