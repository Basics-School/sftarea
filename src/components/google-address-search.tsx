"use client"
import { MapPin } from 'lucide-react';
import React from 'react'
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete'

interface GoogleAddressSearchProps {
    selectedAddress: (address: any) => void;
    setCoordinates: (coords: { lat: number; lng: number }) => void;
}

function GoogleAddressSearch({ selectedAddress: onAddressSelect, setCoordinates }: GoogleAddressSearchProps) {
    return (
        <div className='flex items-center w-full'>
            <MapPin className='h-10 w-10 p-2 rounded-l-md text-primary bg-white' />
            <GooglePlacesAutocomplete
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}
                selectProps={{
                    placeholder: 'Search for your location',
                    isClearable: true,
                    className: 'w-full',
                    styles: {
                        control: (provided) => ({
                            ...provided,
                            height: '40px',
                            borderRadius: '0 0.375rem 0.375rem 0',
                            borderLeft: 'none',
                            backgroundColor: 'white',
                        }),
                    },
                    onChange: (place) => {
                        onAddressSelect(place);
                        if (place) {
                            geocodeByAddress(place.label)
                                .then(result => getLatLng(result[0]))
                                .then(({ lat, lng }) => {
                                    setCoordinates({ lat, lng })
                                })
                        }
                    }
                }}
            />
        </div>
    )
}

export default GoogleAddressSearch
