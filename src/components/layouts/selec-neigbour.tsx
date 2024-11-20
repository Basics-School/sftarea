"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const neighborhoods = [
    {
        value: "austin",
        label: "Austin",
    },
    {
        value: "california",
        label: "California",
    },
    {
        value: "chicago",
        label: "Chicago",
    },
    {
        value: "france",
        label: "France",
    },
    {
        value: "germany",
        label: "Germany",
    },
    {
        value: "india",
        label: "India",
    },
    {
        value: "japan",
        label: "Japan",
    },
    {
        value: "spain",
        label: "Spain",
    },
    {
        value: "united-states",
        label: "United States",
    },
]

export function SelectNeighbours() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="flex-1 justify-between"
        >
          {value
            ? neighborhoods.find((neighborhood) => neighborhood.value === value)?.label
            : "Select neighborhood..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search neighborhood..." className="h-9" />
          <CommandList>
            <CommandEmpty>No neighborhood found.</CommandEmpty>
            <CommandGroup>
              {neighborhoods.map((neighborhood) => (
                <CommandItem
                  key={neighborhood.value}
                  value={neighborhood.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {neighborhood.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === neighborhood.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
