import GoogleMapReact from 'google-map-react';
import FireMarker from './FireMarker.js';
import FireInfoBox from './FireInfoBox';
import {useState} from 'react';


function Map ({eventData, center, zoom}) {
    const [locationInfo, setLocationInfo] = useState(null);

    const markers = eventData.map(event => {
        if (event.categories[0].id === 8) {
            return ( 
                <FireMarker 
                    lat={event.geometries[0].coordinates[1]} 
                    lng={event.geometries[0].coordinates[0]}
                    key={event.id}
                    displayInfo={() => setLocationInfo({id: event.id, title: event.title })} 
                />
            )
        }
            return null
    });
 
    const key = `${process.env.REACT_APP_API_KEY}`

    return (
        <div className='map'>
            <GoogleMapReact 
                bootstrapURLKeys={{key: key}}
                defaultCenter={center}
                defaultZoom={zoom}>
                {markers}
            </GoogleMapReact>
            {locationInfo && <FireInfoBox closeBox={() => setLocationInfo(null)} info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 4
}

export default Map
