"use client"
import React from 'react'
import { Marker, InfoWindow } from '@react-google-maps/api';
import { useMap } from './contexts/map-context';

interface MarkerItemProps {
    item: any;
}

function MarkerItem({ item }: MarkerItemProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const { coordinates } = useMap();

    const position = {
        lat: parseFloat(item.lat || coordinates.lat),
        lng: parseFloat(item.lng || coordinates.lng)
    };

    return (
        <Marker
            position={position}
            onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen && (
                <InfoWindow onCloseClick={() => setIsOpen(false)}>
                    <div className="p-2">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm">{item.location}</p>
                        <p className="text-sm font-semibold">₹{item.price} Lac</p>
                    </div>
                </InfoWindow>
            )}
        </Marker>
    )
}

export default MarkerItem
