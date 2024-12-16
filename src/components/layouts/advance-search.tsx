'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'

export default function AdvancedSearch() {
  const [searchType, setSearchType] = React.useState<'rent' | 'sale'>('rent')

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="flex justify-end gap-2 mb-6">
        <Button
          variant={searchType === 'rent' ? 'default' : 'outline'}
          onClick={() => setSearchType('rent')}
          className="bg-brand text-background hover:bg-purple-500"
        >
          FOR RENT
        </Button>
        <Button
          variant={searchType === 'sale' ? 'default' : 'outline'}
          onClick={() => setSearchType('sale')}
          className="bg-brand text-background hover:bg-purple-400"
        >
          FOR SALE
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="condo">Condo</SelectItem>
          </SelectContent>
        </Select>

        <Input placeholder="Title" />
        <Input placeholder="Address" />

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="All Countries" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="All States" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mh">Maharashtra</SelectItem>
            <SelectItem value="dl">Delhi</SelectItem>
            <SelectItem value="ka">Karnataka</SelectItem>
            <SelectItem value="tn">Tamil Nadu</SelectItem>
            <SelectItem value="gj">Gujarat</SelectItem>
            <SelectItem value="wb">West Bengal</SelectItem>
            <SelectItem value="up">Uttar Pradesh</SelectItem>
            <SelectItem value="ts">Telangana</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="All Cities" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mumbai">Mumbai</SelectItem>
            <SelectItem value="delhi">Delhi</SelectItem>
            <SelectItem value="bangalore">Bangalore</SelectItem>
            <SelectItem value="chennai">Chennai</SelectItem>
            <SelectItem value="hyderabad">Hyderabad</SelectItem>
            <SelectItem value="kolkata">Kolkata</SelectItem>
            <SelectItem value="pune">Pune</SelectItem>
            <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="All Neighborhoods" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bandra">Bandra</SelectItem>
            <SelectItem value="andheri">Andheri</SelectItem>
            <SelectItem value="juhu">Juhu</SelectItem>
            <SelectItem value="malad">Malad</SelectItem>
            <SelectItem value="powai">Powai</SelectItem>
            <SelectItem value="worli">Worli</SelectItem>
            <SelectItem value="chembur">Chembur</SelectItem>
            <SelectItem value="goregaon">Goregaon</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Any Bedrooms" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 Bedroom</SelectItem>
            <SelectItem value="2">2 Bedrooms</SelectItem>
            <SelectItem value="3">3+ Bedrooms</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Any Bathrooms" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 Bathroom</SelectItem>
            <SelectItem value="2">2 Bathrooms</SelectItem>
            <SelectItem value="3">3+ Bathrooms</SelectItem>
          </SelectContent>
        </Select>

        <div className="grid grid-cols-2 gap-2">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Min Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="100000">$100,000</SelectItem>
              <SelectItem value="200000">$200,000</SelectItem>
              <SelectItem value="300000">$300,000</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Max Price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="400000">$400,000</SelectItem>
              <SelectItem value="500000">$500,000</SelectItem>
              <SelectItem value="600000">$600,000</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Min Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="500">500 sq ft</SelectItem>
              <SelectItem value="1000">1000 sq ft</SelectItem>
              <SelectItem value="1500">1500 sq ft</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Max Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2000">2000 sq ft</SelectItem>
              <SelectItem value="2500">2500 sq ft</SelectItem>
              <SelectItem value="3000">3000 sq ft</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Min Land Area" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1000">1000 sq ft</SelectItem>
              <SelectItem value="2000">2000 sq ft</SelectItem>
              <SelectItem value="3000">3000 sq ft</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Max Land Area" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="4000">4000 sq ft</SelectItem>
              <SelectItem value="5000">5000 sq ft</SelectItem>
              <SelectItem value="6000">6000 sq ft</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="All Labels" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hot">Hot</SelectItem>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="new">New</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Any Garages" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 Garage</SelectItem>
            <SelectItem value="2">2 Garages</SelectItem>
            <SelectItem value="3">3+ Garages</SelectItem>
          </SelectContent>
        </Select>

        <Input placeholder="Property ID" />

        <div className="lg:col-span-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="features" />
            <label
              htmlFor="features"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Other Features
            </label>
          </div>
          <Button className="bg-brand text-background hover:bg-purple-400">SEARCH</Button>
        </div>
      </div>
    </div>
  )
}
