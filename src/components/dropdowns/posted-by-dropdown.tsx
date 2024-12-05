import { Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function PostedByDropdown() {
  return (
    <div className="space-y-2">
      <h3 className="font-medium">Posted By</h3>
      <Button variant="outline" className="w-full justify-start gap-2">
        <Plus className="h-4 w-4" />
        Owners
      </Button>
      <Button variant="outline" className="w-full justify-start gap-2">
        <Plus className="h-4 w-4" />
        Brokers
      </Button>
      <Button variant="outline" className="w-full justify-start gap-2">
        <Plus className="h-4 w-4" />
        Builders
      </Button>
    </div>
  )
}

