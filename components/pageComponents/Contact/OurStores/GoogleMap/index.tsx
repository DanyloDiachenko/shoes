"use client";

import { memo, useCallback, useState } from "react";
import {
    GoogleMap as ApiGoogleMap,
    useJsApiLoader,
} from "@react-google-maps/api";

const center = {
    lat: -3.745,
    lng: -38.523,
};

const GoogleMapComponent = () => {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string,
    });

    const [_, setMap] = useState<google.maps.Map | null>(null);

    const onLoad = useCallback((map: google.maps.Map) => {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map);
    }, []);

    const onUnmount = useCallback(() => {
        setMap(null);
    }, []);

    return isLoaded ? (
        <ApiGoogleMap
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            id="google-map"
        />
    ) : (
        <div className="google-map"></div>
    );
};

export const GoogleMap = memo(GoogleMapComponent);
