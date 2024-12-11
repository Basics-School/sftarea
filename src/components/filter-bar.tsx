'use client'

import * as React from 'react'
import { X, ChevronDown, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export function PropertyFilterBar() {
  const [activeFilters, setActiveFilters] = React.useState(0)
  const [location, setLocation] = React.useState('London Fields, London')

  return (
    <div className="flex flex-wrap gap-2 p-4 max-w-screen-xl mx-auto bg-white border-b items-center">
      <div className="relative flex-1 min-w-[200px]">
        <Input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter a location"
          className="pr-8"
        />
        {location && (
          <button
            onClick={() => setLocation('')}
            className="absolute right-2 top-1/2 -translate-y-1/2"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>
        )}
      </div>

      <Select defaultValue="this-area">
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Radius" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="this-area">This area only</SelectItem>
          <SelectItem value="1">Within 1 mile</SelectItem>
          <SelectItem value="3">Within 3 miles</SelectItem>
          <SelectItem value="5">Within 5 miles</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="1-3">
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Bedrooms" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1-3">1 - 3 beds</SelectItem>
          <SelectItem value="2-4">2 - 4 beds</SelectItem>
          <SelectItem value="3-5">3 - 5 beds</SelectItem>
          <SelectItem value="4+">4+ beds</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="any">
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Price" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="any">Any price</SelectItem>
          <SelectItem value="100-300">£100k - £300k</SelectItem>
          <SelectItem value="300-500">£300k - £500k</SelectItem>
          <SelectItem value="500+">£500k+</SelectItem>
        </SelectContent>
      </Select>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[140px]">
            Property type
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px]">
          <div className="grid gap-2">
            <Label className="flex items-center space-x-2">
              <Checkbox id="bungalow" />
              <span>Bungalows</span>
            </Label>
            <Label className="flex items-center space-x-2">
              <Checkbox id="detached" />
              <span>Detached</span>
            </Label>
            <Label className="flex items-center space-x-2">
              <Checkbox id="semi" />
              <span>Semi-detached</span>
            </Label>
            <Label className="flex items-center space-x-2">
              <Checkbox id="flats" />
              <span>Flats</span>
            </Label>
          </div>
        </PopoverContent>
      </Popover>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="relative">
            Filters
            {activeFilters > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                {activeFilters}
              </span>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-[500px] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Filter your results</SheetTitle>
          </SheetHeader>
          <div className="grid gap-6 py-4">
            <div className="space-y-4">
              <h3 className="font-medium">Radius</h3>
              <Select defaultValue="this-area">
                <SelectTrigger>
                  <SelectValue placeholder="This area only" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="this-area">This area only</SelectItem>
                  <SelectItem value="1">Within 1 mile</SelectItem>
                  <SelectItem value="3">Within 3 miles</SelectItem>
                  <SelectItem value="5">Within 5 miles</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Bedrooms</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Min beds</Label>
                  <Select defaultValue="1">
                    <SelectTrigger>
                      <SelectValue placeholder="1" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Max beds</Label>
                  <Select defaultValue="3">
                    <SelectTrigger>
                      <SelectValue placeholder="3" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="6">6+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Bathrooms</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Min baths</Label>
                  <Select defaultValue="no-min">
                    <SelectTrigger>
                      <SelectValue placeholder="No min" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no-min">No min</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Max baths</Label>
                  <Select defaultValue="no-max">
                    <SelectTrigger>
                      <SelectValue placeholder="No max" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no-max">No max</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Price</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Min price</Label>
                  <Select defaultValue="no-min">
                    <SelectTrigger>
                      <SelectValue placeholder="No min" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no-min">No min</SelectItem>
                      <SelectItem value="100000">£100,000</SelectItem>
                      <SelectItem value="200000">£200,000</SelectItem>
                      <SelectItem value="300000">£300,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Max price</Label>
                  <Select defaultValue="no-max">
                    <SelectTrigger>
                      <SelectValue placeholder="No max" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no-max">No max</SelectItem>
                      <SelectItem value="400000">£400,000</SelectItem>
                      <SelectItem value="500000">£500,000</SelectItem>
                      <SelectItem value="600000">£600,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Property type</h3>
              <div className="grid gap-2">
                <Label className="flex items-center space-x-2">
                  <Checkbox id="show-all" />
                  <span>Show all</span>
                </Label>
                <Label className="flex items-center space-x-2">
                  <Checkbox id="detached" checked />
                  <span>Detached</span>
                </Label>
                <Label className="flex items-center space-x-2">
                  <Checkbox id="semi-detached" />
                  <span>Semi-detached</span>
                </Label>
                <Label className="flex items-center space-x-2">
                  <Checkbox id="terraced" />
                  <span>Terraced</span>
                </Label>
                <Label className="flex items-center space-x-2">
                  <Checkbox id="flats" checked />
                  <span>Flats</span>
                </Label>
                <Label className="flex items-center space-x-2">
                  <Checkbox id="bungalows" checked />
                  <span>Bungalows</span>
                </Label>
                <Label className="flex items-center space-x-2">
                  <Checkbox id="farms-land" checked />
                  <span>Farms/Land</span>
                </Label>
                <Label className="flex items-center space-x-2">
                  <Checkbox id="park-homes" />
                  <span>Park homes</span>
                </Label>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Include, exclude & show only</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="min-w-[100px]">New homes</span>
                  <ToggleGroup type="single" defaultValue="include">
                    <ToggleGroupItem value="include" className="px-3">Include</ToggleGroupItem>
                    <ToggleGroupItem value="exclude" className="px-3">Exclude</ToggleGroupItem>
                    <ToggleGroupItem value="show-only" className="px-3">Show only</ToggleGroupItem>
                  </ToggleGroup>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Ownership</h3>
              <div className="grid gap-2">
                <Label className="flex items-center space-x-2">
                  <Checkbox id="show-all-ownership" checked />
                  <span>Show all</span>
                </Label>
                <Label className="flex items-center space-x-2">
                  <Checkbox id="freehold" />
                  <span>Freehold</span>
                </Label>
                <Label className="flex items-center space-x-2">
                  <Checkbox id="leasehold" />
                  <span>Leasehold</span>
                </Label>
                <Label className="flex items-center space-x-2">
                  <Checkbox id="share-freehold" />
                  <span>Share of freehold</span>
                </Label>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Property status</h3>
              <div className="grid gap-2">
                <Label className="flex items-center space-x-2">
                  <Checkbox id="chain-free" />
                  <span>Chain-free</span>
                </Label>
                <Label className="flex items-center space-x-2">
                  <Checkbox id="price-reduced" />
                  <span>Price-reduced</span>
                </Label>
                <Label className="flex items-center space-x-2">
                  <Checkbox id="under-offer" />
                  <span>Under offer/Sold STC</span>
                </Label>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Added to site</h3>
              <RadioGroup defaultValue="anytime">
                <div className="grid gap-2">
                  <Label className="flex items-center space-x-2">
                    <RadioGroupItem value="anytime" />
                    <span>Anytime</span>
                  </Label>
                  <Label className="flex items-center space-x-2">
                    <RadioGroupItem value="last-24" />
                    <span>Last 24 hours</span>
                  </Label>
                  <Label className="flex items-center space-x-2">
                    <RadioGroupItem value="last-3" />
                    <span>Last 3 days</span>
                  </Label>
                  <Label className="flex items-center space-x-2">
                    <RadioGroupItem value="last-7" />
                    <span>Last 7 days</span>
                  </Label>
                  <Label className="flex items-center space-x-2">
                    <RadioGroupItem value="last-14" />
                    <span>Last 14 days</span>
                  </Label>
                  <Label className="flex items-center space-x-2">
                    <RadioGroupItem value="last-30" />
                    <span>Last 30 days</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Keywords</h3>
              <Input
                placeholder='e.g. conservatory or "double garage"'
                className="w-full"
              />
              <p className="text-sm text-muted-foreground">
                Search for phrases by using quotation marks e.g. "double garage", or exclude terms by prefixing them with a minus sign e.g. -studio.
              </p>
            </div>

            <div className="flex justify-between pt-4 border-t">
              <Button variant="outline" onClick={() => setActiveFilters(0)}>
                Reset filters
              </Button>
              <Button
                className="bg-primary hover:bg-primary/90"
                onClick={() => setActiveFilters(prev => prev + 1)}
              >
                Update results
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <Button className="bg-primary hover:bg-primary/90">
        <Heart className="mr-2 h-4 w-4" />
        Save
      </Button>
    </div>
  )
}
