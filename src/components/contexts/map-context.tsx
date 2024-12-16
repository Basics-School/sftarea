"use client";
import { createContext, useContext, useState } from 'react';

interface MapContextType {
  coordinates: { lat: number; lng: number };
  setCoordinates: (coords: { lat: number; lng: number }) => void;
  selectedAddress: any;
  setSelectedAddress: (address: any) => void;
  map: google.maps.Map | null;
  setMap: (map: google.maps.Map | null) => void;
  bounds: google.maps.LatLngBounds | null;
  setBounds: (bounds: google.maps.LatLngBounds | null) => void;
}

const MapContext = createContext<MapContextType>({
  coordinates: { lat: 40.730610, lng: -73.935242 },
  setCoordinates: () => {},
  selectedAddress: null,
  setSelectedAddress: () => {},
  map: null,
  setMap: () => {},
  bounds: null,
  setBounds: () => {},
});

export function MapProvider({ children }: { children: React.ReactNode }) {
  const [coordinates, setCoordinates] = useState({ lat: 40.730610, lng: -73.935242 });
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [bounds, setBounds] = useState<google.maps.LatLngBounds | null>(null);

  return (
    <MapContext.Provider value={{
      coordinates,
      setCoordinates,
      selectedAddress,
      setSelectedAddress,
      map,
      setMap,
      bounds,
      setBounds
    }}>
      {children}
    </MapContext.Provider>
  );
}

export const useMap = (): MapContextType => {
  return useContext(MapContext);
};
