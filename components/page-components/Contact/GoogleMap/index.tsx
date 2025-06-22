import { memo, useCallback, useState } from "react";
import { GoogleMapProps } from "./GoogleMap.props";
import "./googleMap.scss";
const {
    GoogleMap: ApiGoogleMap,
    Marker,
    useJsApiLoader,
} = await import("@react-google-maps/api");

const GoogleMapComponent = ({ center }: GoogleMapProps) => {
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

    return (
        isLoaded && (
            <ApiGoogleMap
                center={center}
                zoom={13}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={{
                    minZoom: 13,
                    maxZoom: 18,
                }}
                id="google-map"
            >
                <Marker position={center} />
            </ApiGoogleMap>
        )
    );
};

export const GoogleMap = memo(GoogleMapComponent);
