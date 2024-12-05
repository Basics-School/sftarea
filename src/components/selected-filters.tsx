
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useFilters } from "@/components/contexts/filter-context"
import { ScrollArea } from "@/components/ui/scroll-area"

export function SelectedFilters() {
  const { selectedFilters, removeFilter } = useFilters()

  const renderFilterGroup = (category: string, values: string[]) => {
    if (values.length === 0) return null;

    if (values.length > 3) {
      return (
        <Badge variant="secondary" className="h-8 gap-1 px-2">
          {category}: {values.length}
          <Button
            variant="ghost"
            size="sm"
            className="h-4 w-4 p-0 hover:bg-transparent"
            onClick={() => values.forEach(v => removeFilter(category, v))}
          >
            <X className="h-3 w-3" />
          </Button>
        </Badge>
      );
    }

    return values.map((value) => (
      <Badge key={value} variant="secondary" className="h-8 gap-1 px-2">
        {value}
        <Button
          variant="ghost"
          size="sm"
          className="h-4 w-4 p-0 hover:bg-transparent"
          onClick={() => removeFilter(category, value)}
        >
          <X className="h-3 w-3" />
        </Button>
      </Badge>
    ));
  };

  return (
    <ScrollArea className="w-full">
      <div className="flex flex-wrap gap-2 p-2">
        {Object.entries(selectedFilters).map(([category, values]) => (
          renderFilterGroup(category, values)
        ))}
      </div>
    </ScrollArea>
  );
}
