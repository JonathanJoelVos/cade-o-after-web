"use client";

import { useMap } from '@/hooks/useMap';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from './marker';


export default function Mapa() {
  const { data: partys } = useMap()

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  })

  return (
    <div className='h-screen'>
      {
        isLoaded ? (
          <GoogleMap
            mapContainerStyle={{
              width: '100%',
              height: '100%',
              borderRadius: '1rem',
              zIndex: 0,
            }}
            center={{
              lat: -27.612977,
              lng: -48.512851
            }}
            zoom={12}
          >
            {
              partys && partys.map((party: any) => (
                <Marker
                  key={party.name}
                  lat={party.lat}
                  lng={party.lng}
                  name={party.name}
                  urlLocation={party.urlLocation}
                  localDescription={party.localDescription}
                  musicStyle={party.musicStyle}
                />
              ))
            }

          </GoogleMap>
        ) : <></>
      }
    </div>
  );
}
