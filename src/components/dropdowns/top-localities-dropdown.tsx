import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export function TopLocalitiesDropdown() {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Top Localities</h3>
      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline" className="justify-start gap-2">
          <Plus className="h-4 w-4" />
          City Centre
        </Button>
        <Button variant="outline" className="justify-start gap-2">
          <Plus className="h-4 w-4" />
          Lashkar
        </Button>
        <Button variant="outline" className="justify-start gap-2">
          <Plus className="h-4 w-4" />
          Morar
        </Button>
        <Button variant="outline" className="justify-start gap-2">
          <Plus className="h-4 w-4" />
          Vinay Nagar
        </Button>
        <Button variant="outline" className="justify-start gap-2">
          <Plus className="h-4 w-4" />
          Alkapuri
        </Button>
        <Button variant="outline" className="justify-start gap-2">
          <Plus className="h-4 w-4" />
          New City Center
        </Button>
        <Button variant="outline" className="justify-start gap-2">
          <Plus className="h-4 w-4" />
          Badagaon
        </Button>
        <Button variant="outline" className="justify-start gap-2">
          <Plus className="h-4 w-4" />
          Tansen Nagar
        </Button>
        <Button variant="outline" className="justify-start gap-2">
          <Plus className="h-4 w-4" />
          Gole Ka Mandir
        </Button>
        <Button variant="outline" className="justify-start gap-2">
          <Plus className="h-4 w-4" />
          Sirol
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="select-all" />
        <label
          htmlFor="select-all"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Select All
        </label>
      </div>
    </div>
  )
}

