import { Check, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useFilters } from "@/components/contexts/filter-context"

export function PropertyTypeDropdown() {
  const { selectedFilters, setFilter, removeFilter } = useFilters()
  const propertyTypes = selectedFilters.propertyType || []

  const togglePropertyType = (value: string) => {
    if (propertyTypes.includes(value)) {
      removeFilter('propertyType', value)
    } else {
      setFilter('propertyType', value)
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="font-medium">Property Type</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Residential</h4>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              className="justify-start gap-2"
              onClick={() => togglePropertyType('Flat')}
            >
              {propertyTypes.includes('Flat') ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Plus className="h-4 w-4" />
              )}
              Flat
            </Button>
            <Button
              variant="outline"
              className="justify-start gap-2"
              onClick={() => togglePropertyType('House/Villa')}
            >
              {propertyTypes.includes('House/Villa') ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Plus className="h-4 w-4" />
              )}
              House/Villa
            </Button>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-2">Commercial</h4>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              className="justify-start gap-2 col-span-2"
              onClick={() => togglePropertyType('Office Space')}
            >
              {propertyTypes.includes('Office Space') ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Plus className="h-4 w-4" />
              )}
              Office Space
            </Button>
            <Button
              variant="outline"
              className="justify-start gap-2 col-span-2"
              onClick={() => togglePropertyType('Shop/Showroom')}
            >
              {propertyTypes.includes('Shop/Showroom') ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Plus className="h-4 w-4" />
              )}
              Shop/Showroom
            </Button>
            <Button
              variant="outline"
              className="justify-start gap-2 col-span-2"
              onClick={() => togglePropertyType('Commercial Land')}
            >
              {propertyTypes.includes('Commercial Land') ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Plus className="h-4 w-4" />
              )}
              Commercial Land
            </Button>
            <Button
              variant="outline"
              className="justify-start gap-2 col-span-2"
              onClick={() => togglePropertyType('Coworking Space')}
            >
              {propertyTypes.includes('Coworking Space') ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Plus className="h-4 w-4" />
              )}
              Coworking Space
            </Button>
            <Button
              variant="outline"
              className="justify-start gap-2 col-span-2"
              onClick={() => togglePropertyType('Warehouse/Godown')}
            >
              {propertyTypes.includes('Warehouse/Godown') ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Plus className="h-4 w-4" />
              )}
              Warehouse/Godown
            </Button>
            <Button
              variant="outline"
              className="justify-start gap-2 col-span-2"
              onClick={() => togglePropertyType('Industrial Building')}
            >
              {propertyTypes.includes('Industrial Building') ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Plus className="h-4 w-4" />
              )}
              Industrial Building
            </Button>
            <Button
              variant="outline"
              className="justify-start gap-2 col-span-2"
              onClick={() => togglePropertyType('Industrial Shed')}
            >
              {propertyTypes.includes('Industrial Shed') ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Plus className="h-4 w-4" />
              )}
              Industrial Shed
            </Button>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-2">Others</h4>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              className="justify-start gap-2"
              onClick={() => togglePropertyType('Agricultural Land')}
            >
              {propertyTypes.includes('Agricultural Land') ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Plus className="h-4 w-4" />
              )}
              Agricultural Land
            </Button>
            <Button
              variant="outline"
              className="justify-start gap-2"
              onClick={() => togglePropertyType('Farm House')}
            >
              {propertyTypes.includes('Farm House') ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Plus className="h-4 w-4" />
              )}
              Farm House
            </Button>
          </div>
        </div>
      </div>
      <Button className="w-full mt-4">Done</Button>
    </div>
  )
}
