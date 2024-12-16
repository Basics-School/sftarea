import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useFilters } from "@/components/contexts/filter-context"
import { ScrollArea } from "@/components/ui/scroll-area"

export function SelectedFilters() {
  const { selectedFilters, removeFilter } = useFilters()

  const renderFilterGroup = (category: string, value: any) => {
    if (!value) return null;

    const values = Array.isArray(value) ? value : [value];
    if (values.length === 0) return null;

    if (typeof value === 'boolean') {
      return (
        <Badge key={category} variant="secondary" className="h-8 gap-1 px-2">
          {category}
          <Button
            variant="ghost"
            size="sm"
            className="h-4 w-4 p-0 hover:bg-transparent"
            onClick={() => removeFilter(category, value)}
          >
            <X className="h-3 w-3" />
          </Button>
        </Badge>
      );
    }

    if (values.length > 3) {
      return (
        <Badge key={category} variant="secondary" className="h-8 gap-1 px-2">
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

    return values.map((val) => (
      <Badge key={`${category}-${val}`} variant="secondary" className="h-8 gap-1 px-2">
        {val}
        <Button
          variant="ghost"
          size="sm"
          className="h-4 w-4 p-0 hover:bg-transparent"
          onClick={() => removeFilter(category, val)}
        >
          <X className="h-3 w-3" />
        </Button>
      </Badge>
    ));
  };

  return (
    <ScrollArea className="w-full">
      <div className="flex flex-wrap gap-2 p-2">
        {Object.entries(selectedFilters).map(([category, value]) => (
          renderFilterGroup(category, value)
        ))}
      </div>
    </ScrollArea>
  );
}
