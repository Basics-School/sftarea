"use client"
import React, { useCallback, useEffect } from 'react'
import { GoogleMap } from '@react-google-maps/api';
import MarkerItem from './marker-item';
import { useMap } from './contexts/map-context';

const containerStyle = {
    width: '100%',
    height: '80vh',
    borderRadius: 10
};

interface GoogleMapSectionProps {
    coordinates: {
        lat: number;
        lng: number;
    };
    listing: {
        id: number;
        title: string;
        location: string;
        lat: number;
        lng: number;
        carpetArea: string;
        status: string;
        floor: string;
        price: string;
        pricePerSqft: string;
        owner: string;
        photos: string;
        updated: string;
    }[];
}
function GoogleMapSection({ listing }: GoogleMapSectionProps) {
    const { coordinates, setMap, map, setBounds } = useMap();

    const onLoad = useCallback((map: google.maps.Map) => {
        setMap(map);
        const bounds = new window.google.maps.LatLngBounds();

        // Add markers to bounds
        listing.forEach(item => {
            bounds.extend({
                lat: item.lat || coordinates.lat,
                lng: item.lng || coordinates.lng
            });
        });

        // Add current center to bounds
        bounds.extend(coordinates);
        map.fitBounds(bounds);
        setBounds(bounds);
    }, [coordinates, listing, setMap, setBounds]);

    return (
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={coordinates}
                zoom={10}
                onLoad={onLoad}
                options={{
                    gestureHandling: "greedy"
                }}
            >
                {listing.map((item, index) => (
                    <MarkerItem key={index} item={item} />
                ))}
            </GoogleMap>
        </div>
    )
}

export default GoogleMapSection
