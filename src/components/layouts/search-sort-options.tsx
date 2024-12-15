import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, BookmarkPlus, List, Map } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SearchHeader() {
  return (
    <div className="border-b pb-4">
      <div className="container mx-auto px-4">
        <div className="space-y-4">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Added in the last 14 days, within 10 miles
            </p>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-8">
                <BookmarkPlus className="mr-2 h-4 w-4" />
                Save search
              </Button>
              <Button variant="outline" size="sm" className="h-8">
                <Bell className="mr-2 h-4 w-4" />
                Create Alert
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm">Sort:</span>
              <Select defaultValue="newest">
                <SelectTrigger className="h-8 w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest Listed</SelectItem>
                  <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                  <SelectItem value="price-desc">Price (High to Low)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Tabs defaultValue="list" className="w-[200px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="list" className="flex items-center gap-2">
                  <List className="h-4 w-4" />
                  List
                </TabsTrigger>
                <TabsTrigger value="map" className="flex items-center gap-2">
                  <Map className="h-4 w-4" />
                  Map
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

