'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        userType: 'buyer',
        name: '',
        email: '',
        password: '',
        mobile: '',
        countryCode: 'IND (+91)',
        agreedToTerms: false
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted:', formData)
    }

    const handleInputChange = (field: string, value: string | boolean) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    return (
        <main className='flex-1'>
            <Card className="w-full max-w-md mx-auto">
                <CardHeader className="space-y-2 text-center">
                    <CardTitle className="text-2xl">New User Registration</CardTitle>
                    <CardDescription>
                        Create an Account to Avail the Best Real Estate Solutions
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label>I am</Label>
                            <RadioGroup
                                defaultValue="buyer"
                                onValueChange={(value) => handleInputChange('userType', value)}
                                className="flex space-x-2"
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="buyer" id="buyer" />
                                    <Label htmlFor="buyer">Buyer/Owner/Tenant</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="agent" id="agent" />
                                    <Label htmlFor="agent">Agent</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="builder" id="builder" />
                                    <Label htmlFor="builder">Builder</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="other" id="other" />
                                    <Label htmlFor="other">Other</Label>
                                </div>
                            </RadioGroup>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="name">Your Name</Label>
                            <Input
                                id="name"
                                required
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                                id="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                required
                                value={formData.password}
                                onChange={(e) => handleInputChange('password', e.target.value)}
                            />
                        </div>

                        <div className="flex space-x-2">
                            <Select
                                defaultValue="IND (+91)"
                                onValueChange={(value) => handleInputChange('countryCode', value)}
                            >
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="IND (+91)">IND (+91)</SelectItem>
                                    <SelectItem value="US (+1)">US (+1)</SelectItem>
                                    <SelectItem value="UK (+44)">UK (+44)</SelectItem>
                                </SelectContent>
                            </Select>
                            <Input
                                placeholder="Mobile"
                                type="tel"
                                value={formData.mobile}
                                onChange={(e) => handleInputChange('mobile', e.target.value)}
                                className="flex-1"
                            />
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="terms"
                                checked={formData.agreedToTerms}
                                onCheckedChange={(checked) =>
                                    handleInputChange('agreedToTerms', checked as boolean)
                                }
                            />
                            <label
                                htmlFor="terms"
                                className="text-sm text-muted-foreground"
                            >
                                I agree to all the{' '}
                                <Link href="/terms" className="text-primary hover:underline">
                                    Terms & Conditions
                                </Link>
                                ,{' '}
                                <Link href="/privacy" className="text-primary hover:underline">
                                    Privacy Policy
                                </Link>{' '}
                                stated herein.
                            </label>
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={!formData.agreedToTerms}
                        >
                            CONTINUE
                        </Button>

                        <div className="text-center text-sm">
                            Already Registered?{' '}
                            <Link href="/login" className="text-primary hover:underline">
                                Login here
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </main>
    )
}
