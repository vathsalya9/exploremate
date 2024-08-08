import React, { useRef } from "react";
import { GoogleMap, LoadScript, InfoWindow } from '@react-google-maps/api';
import { Paper, Rating, Typography } from '@mui/material';
import './styles.css';

const Map = ({ places, setCoordinates, setBounds, coordinates }) => {
    const apiKey = 'AIzaSyCYvMO3GcDaf814sGhUbdgjUyqKMJ0tKGs';
    const mapRef = useRef(null);

    const onBoundsChanged = () => {
        if (mapRef.current) {
            const map = mapRef.current;
            const bounds = map.getBounds();
            if (bounds) {
                const ne = bounds.getNorthEast();
                const sw = bounds.getSouthWest();
                setBounds({
                    ne: { lat: ne.lat(), lng: ne.lng() },
                    sw: { lat: sw.lat(), lng: sw.lng() }
                });
                setCoordinates({
                    lat: map.getCenter().lat(),
                    lng: map.getCenter().lng()
                });
            }
        }
    };

    const defaultCoordinates = { lat: 0, lng: 0 };
    const center = coordinates && !isNaN(coordinates.lat) && !isNaN(coordinates.lng)
        ? coordinates
        : defaultCoordinates;

    console.log('Map Coordinates:', coordinates);
    console.log('Map Places:', places);

    return (
        <div className="mapContainer">
            <LoadScript googleMapsApiKey={apiKey}>
                <GoogleMap
                    mapContainerStyle={{ height: '100vh', width: '100%' }}
                    center={center}
                    zoom={14}
                    onLoad={map => { mapRef.current = map; }}
                    onUnmount={() => { mapRef.current = null; }}
                    onBoundsChanged={onBoundsChanged}
                >
                    {places && places.length > 0 && places.map((place, i) => (
                        <InfoWindow
                            key={i}
                            position={{ lat: Number(place.latitude), lng: Number(place.longitude) }}
                            options={{ headerDisabled: true }}
                        >
                            <Paper elevation={3} className="paper" style={{ width: '100px' }}>
                                <Typography className="typography" variant="subtitle2" gutterBottom style={{ fontSize: '9px' }}>
                                    {place.name}
                                </Typography>
                                <img 
                                    className="pointer" 
                                    src={place.photo ? place.photo.images.large.url : 'https://wallpapercave.com/wp/wp1874173.jpg'} 
                                    alt={place.name} 
                                    style={{ width: '100%', height: 'auto' }} // Adjust image size
                                />
                                <Rating size="small" value={Number(place.rating)} readOnly />
                            </Paper>
                        </InfoWindow>
                    ))}
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Map;