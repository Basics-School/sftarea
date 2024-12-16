"use client"

import * as React from "react"
import { Check, Info } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function PropertyForm() {
  const [formData, setFormData] = React.useState({
    propertyFor: "buy",
    propertyType: "",
    budgetMin: "",
    budgetMax: "",
    builtUpAreaMin: "",
    builtUpAreaMax: "",
    location: "",
    userType: "owner",
    name: "",
    mobile: "",
    email: "",
    termsAccepted: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    // Handle form submission
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-primary">Tell us About Your Property Need!</h1>
        <p className="text-muted-foreground">We'll give you the best Matching Properties in your localities</p>
      </div>

      <div className="mb-6 flex justify-center gap-4">
        {["Tell us your requirements", "Mobile verification", "Confirmation"].map((step, index) => (
          <div key={step} className="flex items-center">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
              index === 0 ? "bg-primary text-primary-foreground" : "bg-muted"
            }`}>
              {index + 1}
            </div>
            <span className="ml-2">{step}</span>
            {index < 2 && <div className="mx-2 h-px w-8 bg-border" />}
          </div>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
        <form onSubmit={handleSubmit} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Requirement Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label>Property for</Label>
                <RadioGroup
                  defaultValue={formData.propertyFor}
                  onValueChange={(value) => handleSelectChange("propertyFor", value)}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="buy" id="buy" />
                    <Label htmlFor="buy">Buy</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="rent" id="rent" />
                    <Label htmlFor="rent">Rent</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pg" id="pg" />
                    <Label htmlFor="pg">PG</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="propertyType">Property Type</Label>
                <Select
                  value={formData.propertyType}
                  onValueChange={(value) => handleSelectChange("propertyType", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="plot">Plot</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Budget</Label>
                  <Select
                    value={formData.budgetMin}
                    onValueChange={(value) => handleSelectChange("budgetMin", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Min" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10000">₹10,000</SelectItem>
                      <SelectItem value="20000">₹20,000</SelectItem>
                      <SelectItem value="30000">₹30,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>&nbsp;</Label>
                  <Select
                    value={formData.budgetMax}
                    onValueChange={(value) => handleSelectChange("budgetMax", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Max" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="40000">₹40,000</SelectItem>
                      <SelectItem value="50000">₹50,000</SelectItem>
                      <SelectItem value="60000">₹60,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">City / Location</Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Enter your city or location"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Contact Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup
                defaultValue={formData.userType}
                onValueChange={(value) => handleSelectChange("userType", value)}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="owner" id="owner" />
                  <Label htmlFor="owner">Owner</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="agent" id="agent" />
                  <Label htmlFor="agent">Agent</Label>
                </div>
              </RadioGroup>

              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile No</Label>
                <div className="flex gap-2">
                  <Select defaultValue="+91">
                    <SelectTrigger className="w-[100px]">
                      <SelectValue placeholder="Code" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="+91">+91</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Enter your mobile number"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email ID</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) =>
                    setFormData(prev => ({ ...prev, termsAccepted: checked as boolean }))
                  }
                />
                <Label htmlFor="terms">
                  Yes I agree to the Terms & Conditions
                </Label>
              </div>

              <Button type="submit" className="w-full">
                Submit Your Property Requirement
              </Button>
            </CardContent>
          </Card>
        </form>

        <Card>
          <CardHeader>
            <CardTitle>How it works?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-medium">Share your Property Requirement</h3>
                <p className="text-sm text-muted-foreground">
                  Post your requirement to get the best deals for Buy/Rent/PG Properties
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-medium">Connect directly with property owner</h3>
                <p className="text-sm text-muted-foreground">
                  We will forward your requirements to property owner/property advertiser that you can make deal directly
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-medium">Get the best deals</h3>
                <p className="text-sm text-muted-foreground">
                  Send accurate information about the property need that will help us to search perfect matching properties
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

